import { useState, useEffect } from "react";
import { useActivityConfig } from "../context/ActivityContext";

/**
 * Hook to fetch call recording URL using the adapter.
 */
export function useCallRecording(callLogId?: string) {
  const { fetchCallRecording, fetchCallRecordingBlob } = useActivityConfig();
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Reset state immediately whenever the ID changes
    setAudioUrl(null);
    setError(null);

    if (!callLogId || !fetchCallRecording) {
      setIsLoading(false);
      return;
    }

    let cancelled = false;
    let localBlobUrl: string | null = null;
    setIsLoading(true);

    const loadRecording = async () => {
      try {
        const streamUrl = await fetchCallRecording(callLogId);
        if (cancelled) return;

        if (!streamUrl) {
          setIsLoading(false);
          return;
        }

        // If blob fetcher is available, use it to get a local playable URL (handles auth headers)
        if (fetchCallRecordingBlob) {
          const blob = await fetchCallRecordingBlob(streamUrl);
          if (cancelled) return;
          localBlobUrl = URL.createObjectURL(blob);
          setAudioUrl(localBlobUrl);
        } else {
          // Fallback to raw URL if no blob fetcher provided
          setAudioUrl(streamUrl);
        }
        setIsLoading(false);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err : new Error("Failed to fetch recording"));
          setIsLoading(false);
        }
      }
    };

    loadRecording();

    return () => {
      cancelled = true;
      if (localBlobUrl) {
        URL.revokeObjectURL(localBlobUrl);
      }
    };
  }, [callLogId, fetchCallRecording, fetchCallRecordingBlob]);

  return { audioUrl, isLoading, error };
}
