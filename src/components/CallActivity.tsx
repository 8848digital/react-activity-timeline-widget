import React, { useState } from "react";
import { PhoneIcon, UserIcon } from "./icons";
import AudioPlayer from "react-h5-audio-player";
import type { CallActivityType } from "../types/activity";
import { useCallRecording } from "../hooks/useCallRecording";
import { parseDateTime } from "../utils/dateMapper";
import { formatDuration } from "../utils/durationUtilities";
import { getBadgeColor } from "../utils/badgeColorUtilities";
import Tooltip from "./common/Tooltip";
import StatusBadge from "./common/StatusBadge";

const CALL_ICON_COLOR = "#175353";

interface CallActivityProps {
  activity: CallActivityType;
}

const CallActivity: React.FC<CallActivityProps> = ({ activity }) => {
  const isOutgoing = activity.activity_type === "out-going" || activity.activity_type === "outgoing_call";
  const callLabel = isOutgoing ? "Outbound Call" : "Inbound Call";
  const { date, time } = parseDateTime(activity.creation || "");

  const callerLabel = (activity as { _caller?: { label?: string } })._caller?.label ?? activity.caller ?? "Unknown";
  const toContact = (activity as { _receiver?: { label?: string } })._receiver?.label ?? null;

  const { audioUrl, isLoading: isLoadingRecording, error: recordingError } = useCallRecording(
    activity.recording_url ? (activity.name as string) : undefined
  );
  const [playbackError, setPlaybackError] = useState(false);

  const duration = activity._duration;
  const formattedDuration = typeof duration === "number" ? formatDuration(duration) : duration;

  const isZeroDuration =
    duration === 0 ||
    duration === "0" ||
    duration === "0s" ||
    duration === "0m" ||
    formattedDuration === "0s" ||
    formattedDuration === "0m";

  const statusColors = getBadgeColor(activity.status);

  return (
    <div className="activity-item call-activity">
      <div className="activity-header">
        <Tooltip content="Call">
          <div className="activity-icon-wrapper">
            <PhoneIcon size={20} color={CALL_ICON_COLOR} />
          </div>
        </Tooltip>
        <div className="activity-date-time">
          {date} - {time}
        </div>
      </div>
      <div className="activity-content">
        <div className="call-activity-card">
          <div className="call-activity-header-row">
            <div className="call-activity-label">{callLabel}</div>
            {activity.status && (
              <StatusBadge
                label={activity.status}
                bgColor={statusColors.bgColor}
                textColor={statusColors.textColor}
                borderColor={statusColors.borderColor}
                shape="pill"
                showIcon={false}
              />
            )}
          </div>
          <div className="call-activity-details">
            <div className="call-activity-details-row">
              <div className="call-activity-person">
                <div className="call-activity-avatar">
                  <UserIcon size={16} color={CALL_ICON_COLOR} />
                </div>
                <span className="call-activity-name">{callerLabel}</span>
              </div>
              {toContact != null && toContact !== "" && (
                <>
                  <span className="call-activity-to-label">To</span>
                  <span className="call-activity-arrow">→</span>
                  <div className="call-activity-to-contact">
                    <div className="call-activity-avatar">
                      <UserIcon size={16} color={CALL_ICON_COLOR} />
                    </div>
                    <span className="call-activity-to-name">{toContact}</span>
                  </div>
                </>
              )}
            </div>
            <div className="call-activity-actions">
              {isLoadingRecording ? (
                <span className="call-activity-loading">Loading recording…</span>
              ) : recordingError || playbackError ? (
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span className="call-activity-loading" style={{ color: "#f44336" }}>Recording unavailable</span>
                  {formattedDuration && !isZeroDuration && <span className="call-activity-duration">Duration {formattedDuration}</span>}
                </div>
              ) : audioUrl ? (
                <div className="call-activity-player-wrapper">
                  <AudioPlayer
                    key={audioUrl}
                    src={audioUrl}
                    showJumpControls={false}
                    showDownloadProgress={false}
                    customAdditionalControls={[]}
                    customVolumeControls={[]}
                    layout="horizontal-reverse"
                    className="call-activity-audio-player"
                    onError={() => setPlaybackError(true)}
                  />
                  {formattedDuration && !isZeroDuration && <span className="call-activity-duration">Duration {formattedDuration}</span>}
                </div>
              ) : (
                formattedDuration && !isZeroDuration && <span className="call-activity-duration" style={{ marginLeft: 0 }}>Duration {formattedDuration}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallActivity;
