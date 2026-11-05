/**
 * Hook to fetch call recording URL using the adapter.
 */
export declare function useCallRecording(callLogId?: string): {
    audioUrl: string | null;
    isLoading: boolean;
    error: Error | null;
};
