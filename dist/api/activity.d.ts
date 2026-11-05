import { ActivityResponse, FetchActivitiesParams } from '../types/activity';
export interface GetCallRecordingResponse {
    message: {
        url: string;
    };
}
/**
 * Creates a default fetch-based API client with optional auth token.
 */
export declare const createDefaultApiClient: (baseURL?: string, token?: string) => {
    get: <T>(endpoint: string) => Promise<T>;
    getBlob: (endpoint: string) => Promise<Blob>;
};
/**
 * Direct API methods for activity-related endpoints.
 * These can be used by the default adapter.
 */
export declare const activityApi: (client: ReturnType<typeof createDefaultApiClient>) => {
    /**
     * Get activities for a contact (paginated).
     */
    getActivities: (params: FetchActivitiesParams) => Promise<ActivityResponse>;
    /**
     * Fetch the call recording stream URL for a given call_log_id.
     */
    getCallRecording: (callLogId: string) => Promise<string | null>;
    /**
     * Fetch the recording from the stream URL with Authorization and return a Blob.
     */
    fetchBlob: (streamUrl: string) => Promise<Blob>;
};
