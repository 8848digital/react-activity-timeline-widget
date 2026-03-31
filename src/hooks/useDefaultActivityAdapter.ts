import { useMemo } from "react";
import { activityApi, createDefaultApiClient } from "../api/activity";
import type {
  ActivityWidgetConfig,
  ActivityResponse,
  FetchActivitiesParams,
  EmailReplyData,
  SocketMessage,
} from "../types/activity";

export interface DefaultActivityAdapterParams {
  /** Base URL for API calls (e.g. "https://new-crm-8848.8848digitalerp.com") */
  baseURL?: string;
  /** Auth token for API requests */
  token?: string;
  /** Contact name to fetch activities for */
  contactName: string | null;
  /** API base URL for attachment URLs (same as baseURL if not specified) */
  apiBaseUrl?: string;
  /** Type of view: contact or lead */
  type?: "contact" | "lead";
  /** Title label for the tab */
  title?: string;
  /** Socket message subscription handler */
  onSocketMessage?: (handler: (msg: SocketMessage) => void) => (() => void);
  /** Search params from the router (abstracted from Next.js) */
  searchParams?: Record<string, string | null>;
  /** Chat message list custom renderer */
  renderChatMessageList?: ActivityWidgetConfig["renderChatMessageList"];
  /** Email reply handler */
  onEmailReply?: (data: EmailReplyData) => void;
  /** Email reply-all handler */
  onEmailReplyAll?: (data: EmailReplyData) => void;
  /** Lead fetcher for filter options */
  fetchLeads?: () => { leads: Array<{ name: string }> };
}

/**
 * A standalone hook to create the default Frappe-compatible adapter and config.
 * Follows the same pattern as useDefaultEmailAdapter from react-email-composer-widget.
 *
 * Usage:
 * ```tsx
 * const activityConfig = useDefaultActivityAdapter({
 *   baseURL: API_BASE_URL,
 *   token: authToken,
 *   contactName: selectedContact,
 * });
 *
 * <ActivityProvider {...activityConfig}>
 *   <ActivityTab />
 * </ActivityProvider>
 * ```
 */
export function useDefaultActivityAdapter({
  baseURL = "/",
  token,
  contactName,
  apiBaseUrl,
  type,
  title,
  onSocketMessage,
  searchParams,
  renderChatMessageList,
  onEmailReply,
  onEmailReplyAll,
  fetchLeads,
}: DefaultActivityAdapterParams): ActivityWidgetConfig {
  // Initialize API methods
  const apiInstance = useMemo(() => createDefaultApiClient(baseURL, token), [baseURL, token]);
  const methods = useMemo(() => activityApi(apiInstance), [apiInstance]);

  // Build the unified config
  const config: ActivityWidgetConfig = useMemo(
    () => ({
      contactName,
      apiBaseUrl: apiBaseUrl || baseURL,
      type,
      title,
      onSocketMessage,
      searchParams,
      renderChatMessageList,
      onEmailReply,
      onEmailReplyAll,
      fetchLeads,

      // API adapters (wired to Frappe backend)
      fetchActivities: async (params: FetchActivitiesParams): Promise<ActivityResponse> => {
        return methods.getActivities(params);
      },

      fetchCallRecording: async (callLogId: string): Promise<string | null> => {
        return methods.getCallRecording(callLogId);
      },

      fetchCallRecordingBlob: async (streamUrl: string): Promise<Blob> => {
        return methods.fetchBlob(streamUrl);
      },
    }),
    [
      contactName,
      apiBaseUrl,
      baseURL,
      type,
      title,
      onSocketMessage,
      searchParams,
      renderChatMessageList,
      onEmailReply,
      onEmailReplyAll,
      fetchLeads,
      methods,
    ]
  );

  return config;
}
