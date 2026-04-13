import React from "react";
import StatusBadge from "./StatusBadge";

interface ActivityBooleanBadgesProps {
  activity: any;
}

const ActivityBooleanBadges: React.FC<ActivityBooleanBadgesProps> = ({ activity }) => {
  return (
    <>
      {activity.is_lead && (
        <StatusBadge
          label="Lead"
          bgColor="#F0F9FF"
          textColor="#0284C7"
          borderColor="#BAE6FD"
          shape="pill"
          style={{ fontSize: "10px", padding: "0 8px", height: "18px", lineHeight: "16px", fontWeight: "600" }}
        />
      )}
      {activity.is_pd && (
        <StatusBadge
          label="PDA"
          bgColor="#FDF2F8"
          textColor="#DB2777"
          borderColor="#FBCFE8"
          shape="pill"
          style={{ fontSize: "10px", padding: "0 8px", height: "18px", lineHeight: "16px", fontWeight: "600" }}
        />
      )}
      {activity.is_dc && (
        <StatusBadge
          label="DC"
          bgColor="#FFF7ED"
          textColor="#EA580C"
          borderColor="#FFEDD5"
          shape="pill"
          style={{ fontSize: "10px", padding: "0 8px", height: "18px", lineHeight: "16px", fontWeight: "600" }}
        />
      )}
    </>
  );
};

export default ActivityBooleanBadges;
