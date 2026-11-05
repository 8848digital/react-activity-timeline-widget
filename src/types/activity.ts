/**
 * Single activity item (union of all activity types returned by the API)
 */
export type ActivityItem =
  | {
    activity_type: "communication";
    communication_type: string;
    communication_date: string;
    creation: string;
    data: {
      subject: string;
      content: string;
      sender_full_name: string;
      sender: string;
      recipients: string;
      cc: string | null;
      bcc: string | null;
      attachments: Array<{
        name: string;
        file_name: string;
        file_type: string | null;
        file_url: string;
        file_size: number;
        is_private: number;
        modified: string;
        creation: string;
        owner: string;
      }>;
      read_by_recipient: number;
      delivery_status: string;
      sent_or_received?: string;
    };
    is_lead: boolean;
    name?: string;
  }
  | {
    name: string;
    title: string;
    content: string;
    owner: string;
    modified: string;
    activity_type: "notes";
    creation?: string;
  }
  | {
    activity_type: "creation";
    creation: string;
    owner: string;
    data: string;
    is_lead: boolean;
  }
  | {
    name: number | string;
    creation: string;
    modified: string;
    modified_by: string;
    owner: string;
    docstatus: number;
    idx: number;
    title: string;
    priority: string;
    start_date: string | null;
    reference_doctype: string | null;
    reference_docname: string | null;
    task_type: "Schedule";
    assigned_to: string | null;
    status: string;
    due_date: string;
    type: string;
    description: string | null;
    activity_type: "Schedule";
    [key: string]: unknown;
  }
  | {
    name: number | string;
    creation: string;
    modified: string;
    modified_by: string;
    owner: string;
    docstatus: number;
    idx: number;
    title: string;
    priority: string;
    start_date: string | null;
    reference_doctype: string | null;
    reference_docname: string | null;
    task_type: "Reminder";
    assigned_to: string | null;
    status: string;
    due_date: string;
    type: string;
    description: string | null;
    activity_type: "Reminder";
    [key: string]: unknown;
  }
  | {
    activity_type: "whatsapp";
    name?: string;
    message?: string;
    type?: string;
    is_outbound?: number;
    creation?: string;
    date?: string;
    time?: string;
    attach?: string;
    content_type?: string;
    status?: string;
    [key: string]: unknown;
  }
  | {
    activity_type: "out-going" | "outgoing_call";
    name?: string;
    creation?: string;
    date?: string;
    time?: string;
    personName?: string;
    person_name?: string;
    caller_name?: string;
    caller?: string;
    sender_full_name?: string;
    sender?: string;
    audioUrl?: string;
    audio_url?: string;
    recording_url?: string;
    recording?: string;
    duration?: string | number;
    call_duration?: string;
    duration_seconds?: string;
    _duration?: string | number;
    status?: string;
    _caller?: { label?: string; image?: string | null };
    _receiver?: { label?: string; image?: string | null };
    [key: string]: unknown;
  }
  | {
    activity_type: "incoming" | "incoming_call";
    name?: string;
    creation?: string;
    date?: string;
    time?: string;
    personName?: string;
    person_name?: string;
    caller_name?: string;
    caller?: string;
    sender_full_name?: string;
    sender?: string;
    audioUrl?: string;
    audio_url?: string;
    recording_url?: string;
    recording?: string;
    duration?: string | number;
    call_duration?: string;
    duration_seconds?: string;
    _duration?: string | number;
    status?: string;
    _caller?: { label?: string; image?: string | null };
    _receiver?: { label?: string; image?: string | null };
    [key: string]: unknown;
  }
  | {
    name: number | string;
    creation: string;
    modified: string;
    modified_by: string;
    owner: string;
    docstatus: number;
    idx: number;
    title: string;
    priority: string;
    start_date: string | null;
    reference_doctype: string | null;
    reference_docname: string | null;
    task_type: "Task";
    assigned_to: string | null;
    status: string;
    due_date: string | null;
    type: string | null;
    description: string | null;
    skip_reason?: string | null;
    activity_type: "Task";
    [key: string]: unknown;
  }
  | {
    activity_type: "lead";
    title: string;
    initiator: string;
    priority: string;
    description: string;
    status: string;
    creation: string;
    name: string;
    lead_owner?: string;
    owner?: string;
    [key: string]: unknown;
  }
  | {
    activity_type: "brief";
    name: string;
    title: string;
    customer_code: string;
    status: string;
    assigned_to: string;
    creation: string;
    modified: string;
    href: string;
    is_pd: boolean;
    [key: string]: unknown;
  }
  | {
    activity_type: "raven";
    name: string;
    owner: string;
    creation: string;
    modified: string;
    text: string;
    file: string | null;
    message_type: string;
    from: string;
    to: string;
    is_pd: boolean;
    is_dc: boolean;
    content?: string;
    [key: string]: unknown;
  }
  | {
    activity_type: "quotation";
    name: string;
    creation: string;
    quotation_no: string;
    company: string;
    quotation_date: string;
    customer_code: string;
    currency: string | null;
    po_no: string | null;
    remarks: string | null;
    sales_person: string | null;
    created_by: string | null;
    last_modified: string | null;
    leads: string[];
    is_lead: boolean;
    item_count: number;
    total_qty: number;
    total_amount: number;
    items: QuotationItem[];
    [key: string]: unknown;
  };

/** One design line of an EMR quotation */
export interface QuotationItem {
  sr: number;
  design_code: string;
  suffix: string | null;
  size: string | null;
  karat: string | null;
  colour: string | null;
  qty: number;
  /** Price of one piece */
  rate: number;
  amount: number;
}

/**
 * Paginated message wrapper from API
 */
export interface ActivityMessage {
  activities: ActivityItem[];
  total_count: number;
  page: number;
  page_size: number;
  includes_pd?: boolean;
  includes_dc?: boolean;
}

/**
 * Activity response from API
 */
export interface ActivityResponse {
  docinfo?: {
    name: string;
    communications: Array<{
      name: string;
      communication_type: string;
      communication_medium: string;
      communication_date: string;
      content: string;
      sender: string;
      sender_full_name: string;
      recipients: string;
      cc: string | null;
      bcc: string | null;
      subject: string;
      delivery_status: string;
      read_by_recipient: number;
      attachments: string;
    }>;
  };
  message: ActivityMessage;
}

export type CommunicationActivity = Extract<ActivityItem, { activity_type: "communication" }>;
export type NotesActivityType = Extract<ActivityItem, { activity_type: "notes" }>;
export type CreationActivity = Extract<ActivityItem, { activity_type: "creation" }>;
export type ScheduleActivityType = Extract<ActivityItem, { activity_type: "Schedule" }>;
export type ReminderActivityType = Extract<ActivityItem, { activity_type: "Reminder" }>;
export type WhatsAppActivity = Extract<ActivityItem, { activity_type: "whatsapp" }>;
export type CallActivityType = Extract<
  ActivityItem,
  { activity_type: "out-going" | "outgoing_call" | "incoming" | "incoming_call" }
>;
export type TaskActivityType = Extract<ActivityItem, { activity_type: "Task" }>;
export type LeadActivityType = Extract<ActivityItem, { activity_type: "lead" }>;
export type BriefActivityType = Extract<ActivityItem, { activity_type: "brief" }>;
export type RavenActivityType = Extract<ActivityItem, { activity_type: "raven" }>;
export type QuotationActivityType = Extract<ActivityItem, { activity_type: "quotation" }>;

/** Node types for activity grouping display */
export type ActivityNode =
  | { type: "single"; activity: ActivityItem; index: number }
  | { type: "date-group"; activities: ActivityItem[]; firstIndex: number };

/** Parameters for fetching activities */
export interface FetchActivitiesParams {
  contactName: string;
  limit_start: number;
  limit_page_length: number;
  filters?: Record<string, string[]>;
}

/** Socket message structure */
export interface SocketMessage {
  event: string;
  message: unknown;
}

/** Email reply data for adapter */
export interface EmailReplyData {
  name?: string;
  subject: string;
  content: string;
  recipients: string;
  cc?: string | null;
  bcc?: string | null;
  sender?: string;
  senderFullName?: string;
  isReplyAll?: boolean;
}

/** Activity widget configuration (adapter interface) */
export interface ActivityWidgetConfig {
  /** Fetch activities from API */
  fetchActivities: (params: FetchActivitiesParams) => Promise<ActivityResponse>;
  /** Call recording URL resolver */
  fetchCallRecording?: (callLogId: string) => Promise<string | null>;
  /** Optional: handle binary blob fetching for audio with authorization */
  fetchCallRecordingBlob?: (streamUrl: string) => Promise<Blob>;
  /** Optional: handle email reply */
  onEmailReply?: (data: EmailReplyData) => void;
  /** Optional: handle email reply all */
  onEmailReplyAll?: (data: EmailReplyData) => void;
  /** Contact name to fetch activities for */
  contactName: string | null;
  /** API base URL for attachment URLs */
  apiBaseUrl?: string;
  /** Type of view: contact or lead */
  type?: "contact" | "lead";
  /** Title label */
  title?: string;
  /** Socket message handler — subscribe to receive messages */
  onSocketMessage?: (handler: (msg: SocketMessage) => void) => (() => void);
  /** Search params (abstracted from Next.js router) */
  searchParams?: Record<string, string | null>;
  /** Chat message list renderer for WhatsApp activities */
  renderChatMessageList?: (props: { activity: WhatsAppActivity; icon: React.ReactNode; showIcon: boolean }) => React.ReactNode;
  /** Lead fetcher for filter options */
  fetchLeads?: () => { leads: Array<{ name: string }> };
  /** Logged in user email for identifying outbound messages (e.g. Raven chat) */
  currentUserEmail?: string | null;
}
