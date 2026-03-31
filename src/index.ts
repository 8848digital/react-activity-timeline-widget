// Components
export { Activity } from "./components/Activity";
export { default as ActivityTab } from "./components/ActivityTab";
export { default as ActivityWidget } from "./components/ActivityWidget";
export type { ActivityWidgetProps } from "./components/ActivityWidget";
export { default as ActivityDateGroup } from "./components/ActivityDateGroup";
export { default as ActivityFilter } from "./components/ActivityFilter";
export { default as EmailActivity } from "./components/EmailActivity";
export { default as NotesActivity } from "./components/NotesActivity";
export { default as ChatActivity } from "./components/ChatActivity";
export { default as CallActivity } from "./components/CallActivity";
export { default as CallNotesActivity } from "./components/CallNotesActivity";
export { default as ScheduleActivity } from "./components/ScheduleActivity";
export { default as TaskActivity } from "./components/TaskActivity";
export { default as ReminderActivity } from "./components/ReminderActivity";
export { default as LeadActivity } from "./components/LeadActivity";
export { EmailRecipientRow } from "./components/EmailRecipientRow";

// Context
export { ActivityProvider, useActivityConfig } from "./context/ActivityContext";

// Hooks
export { useActivityTabLogic } from "./hooks/useActivityTabLogic";
export type { UseActivityTabLogicReturn } from "./hooks/useActivityTabLogic";
export { useActivities } from "./hooks/useActivities";
export { useExpandableContent } from "./hooks/useExpandableContent";
export { useScrollToActivity, getActivityElementId } from "./hooks/useScrollToActivity";
export { useFilterState, ACTIVITY_TYPE_LABELS } from "./hooks/useFilterState";
export { useCallRecording } from "./hooks/useCallRecording";
export { useDefaultActivityAdapter } from "./hooks/useDefaultActivityAdapter";
export type { DefaultActivityAdapterParams } from "./hooks/useDefaultActivityAdapter";

// API
export { createDefaultApiClient, activityApi } from "./api/activity";

// Types
export * from "./types/activity";

// Utils
export { parseDateTime, getActivityDateKey, getDateKeyFromActivity } from "./utils/dateMapper";
export { sanitizeHtmlLight } from "./utils/htmlSanitizer";
export { getActivityDate, getActivityTimestamp } from "./utils/activityUtilities";
export { formatDuration } from "./utils/durationUtilities";
export { getBadgeColor } from "./utils/badgeColorUtilities";
export { buildActivityNodes } from "./utils/activityGroupDisplay";
export { formatTimeLocale, parseMessageWithLinks, renderMessageStatusIcon } from "./utils/WhatsApp";

// Styles
import "./styles/activity-timeline.css";
import "react-h5-audio-player/lib/styles.css";
