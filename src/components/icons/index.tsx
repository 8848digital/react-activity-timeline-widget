import React from "react";
import {
  Phone as PhPhone,
  Envelope as PhEnvelope,
  Note as PhNote,
  Calendar as PhCalendar,
  Bell as PhBell,
  Chat as PhChat,
  WhatsappLogo as PhWhatsappLogo,
  User as PhUser,
  Paperclip as PhPaperclip,
  Funnel as PhFunnel,
  Check as PhCheck,
  Checks as PhChecks,
  Warning as PhWarning,
  ArrowSquareOut as PhArrowSquareOut,
  FileText as PhFileText,
} from "@phosphor-icons/react";

/** Lightweight wrapper for Phosphor icons used by the activity timeline widget. */

export interface IconProps {
  size?: number | string;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  weight?: "thin" | "light" | "regular" | "bold" | "fill" | "duotone";
}

export const PhoneIcon = (props: IconProps) => <PhPhone {...props} />;
export const EnvelopeIcon = (props: IconProps) => <PhEnvelope {...props} />;
export const NoteIcon = (props: IconProps) => <PhNote {...props} />;
export const CalendarIcon = (props: IconProps) => <PhCalendar {...props} />;
export const BellIcon = (props: IconProps) => <PhBell {...props} />;
export const ChatIcon = (props: IconProps) => <PhChat {...props} />;
export const WhatsAppIcon = (props: IconProps) => <PhWhatsappLogo {...props} />;
export const UserIcon = (props: IconProps) => <PhUser {...props} />;
export const PaperclipIcon = (props: IconProps) => <PhPaperclip {...props} />;
export const FunnelIcon = (props: IconProps) => <PhFunnel {...props} />;
export const Check = (props: IconProps) => <PhCheck {...props} />;
export const CheckDouble = (props: IconProps) => <PhChecks {...props} />;
export const Warning = (props: IconProps) => <PhWarning {...props} />;
export const ArrowSquareOut = (props: IconProps) => <PhArrowSquareOut {...props} />;
export const FileText = (props: IconProps) => <PhFileText {...props} />;

