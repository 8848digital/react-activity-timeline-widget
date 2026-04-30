import React from "react";
import { ActivityProvider } from "../context/ActivityContext";
import ActivityTab from "./ActivityTab";
import { useDefaultActivityAdapter, DefaultActivityAdapterParams } from "../hooks/useDefaultActivityAdapter";

/**
 * Unified Activity Widget that handles Provider and Adapter internally.
 * This component minimizes the boilerplate required in the host application.
 *
 * @example
 * ```tsx
 * <ActivityWidget
 *   baseURL={API_BASE_URL}
 *   token={authToken}
 *   contactName="John Doe"
 *   onEmailReply={(data) => handleReply(data)}
 * />
 * ```
 */
import { MessageList } from "./MessageList";

export interface ActivityWidgetProps extends DefaultActivityAdapterParams {
  className?: string;
}

export const ActivityWidget: React.FC<ActivityWidgetProps> = (props) => {
  const adapterConfig = useDefaultActivityAdapter(props);

  // Default chat message renderer if none provided
  const renderChatMessageList =
    props.renderChatMessageList ||
    (({ activity, icon, showIcon }) => (
      <MessageList
        activity={activity as any}
        icon={icon}
        showIcon={showIcon}
        apiBaseUrl={props.apiBaseUrl || props.baseURL}
      />
    ));

  return (
    <ActivityProvider {...adapterConfig} renderChatMessageList={renderChatMessageList} currentUserEmail={props.currentUserEmail}>
      <ActivityTab />
    </ActivityProvider>
  );
};

export default ActivityWidget;
