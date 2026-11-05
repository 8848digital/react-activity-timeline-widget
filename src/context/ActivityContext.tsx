import React, { createContext, useContext } from "react";
import type { ActivityWidgetConfig } from "../types/activity";

const ActivityContext = createContext<ActivityWidgetConfig | null>(null);

export function useActivityConfig(): ActivityWidgetConfig {
  const ctx = useContext(ActivityContext);
  if (!ctx) {
    throw new Error("useActivityConfig must be used within an <ActivityProvider>");
  }
  return ctx;
}

interface ActivityProviderProps extends ActivityWidgetConfig {
  children: React.ReactNode;
}

export const ActivityProvider: React.FC<ActivityProviderProps> = ({ children, ...config }) => {
  return <ActivityContext.Provider value={config}>{children}</ActivityContext.Provider>;
};
