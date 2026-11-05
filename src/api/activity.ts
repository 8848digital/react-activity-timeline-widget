/**
 * Internal API client for the Activity Timeline Widget.
 * Follows the same pattern as react-email-composer-widget/src/api/email.ts
 */

import type { ActivityResponse, FetchActivitiesParams } from "../types/activity";

// ─── Shared Types ───

export interface GetCallRecordingResponse {
  message: { url: string };
}

// ─── Default API Implementation (Frappe / fetch) ───

/**
 * Creates a default fetch-based API client with optional auth token.
 */
export const createDefaultApiClient = (baseURL: string = "/", token?: string) => {
  const defaultHeaders: Record<string, string> = {};
  if (token) {
    defaultHeaders["Authorization"] = `token ${token}`;
  }

  /** Internal fetch wrapper */
  const apiFetch = async <T>(endpoint: string, options: RequestInit = {}): Promise<T> => {
    const headers: Record<string, string> = { ...defaultHeaders };

    // Merge existing headers if any
    if (options.headers) {
      const existingHeaders = new Headers(options.headers);
      Object.assign(headers, Object.fromEntries(existingHeaders.entries()));
    }

    const url = endpoint.startsWith("http") ? endpoint : `${baseURL}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  };

  /** Internal fetch wrapper for blobs */
  const apiFetchBlob = async (endpoint: string, options: RequestInit = {}): Promise<Blob> => {
    const headers: Record<string, string> = { ...defaultHeaders };

    if (options.headers) {
      const existingHeaders = new Headers(options.headers);
      Object.assign(headers, Object.fromEntries(existingHeaders.entries()));
    }

    const url = endpoint.startsWith("http") ? endpoint : `${baseURL}${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.blob();
  };

  return {
    get: <T>(endpoint: string) => apiFetch<T>(endpoint, { method: "GET" }),
    getBlob: (endpoint: string) => apiFetchBlob(endpoint, { method: "GET" }),
  };
};

/**
 * Direct API methods for activity-related endpoints.
 * These can be used by the default adapter.
 */
export const activityApi = (client: ReturnType<typeof createDefaultApiClient>) => ({
  /**
   * Get activities for a contact (paginated).
   */
  getActivities: async (params: FetchActivitiesParams): Promise<ActivityResponse> => {
    const searchParamsObject: Record<string, string> = {
      name: params.contactName,
      limit_start: String(params.limit_start ?? 0),
      limit_page_length: String(params.limit_page_length ?? 20),
    };

    if (params.filters) {
      searchParamsObject.filters = JSON.stringify(params.filters);
    }

    const search = new URLSearchParams(searchParamsObject);
    const url = `/api/method/crm_integration.crm_integration.api.activities.get_activities?${search.toString()}`;
    return client.get<ActivityResponse>(url);
  },

  /**
   * Fetch the call recording stream URL for a given call_log_id.
   */
  getCallRecording: async (callLogId: string): Promise<string | null> => {
    try {
      const res = await client.get<GetCallRecordingResponse>(
        `/api/method/crm_integration.crm_exotel.api.call_log.get_call_recording?call_log_id=${encodeURIComponent(callLogId)}`
      );
      return res?.message?.url || null;
    } catch {
      return null;
    }
  },

  /**
   * Fetch the recording from the stream URL with Authorization and return a Blob.
   */
  fetchBlob: async (streamUrl: string): Promise<Blob> => {
    // Determine if streamUrl is absolute or relative
    let url = streamUrl;
    // createDefaultApiClient adds baseURL to endpoint, so we should check
    return client.getBlob(url);
  },
});
