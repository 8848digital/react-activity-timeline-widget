import React from "react";
import { Activity } from "./Activity";
import ActivityDateGroup from "./ActivityDateGroup";
import Loader from "./common/Loader";
import ActivityFilter from "./ActivityFilter";
import { useActivityTabLogic } from "../hooks/useActivityTabLogic";
import { useActivityConfig } from "../context/ActivityContext";

const ActivityTab: React.FC = () => {
  const { title = "Activity" } = useActivityConfig();

  const {
    activityNodes,
    initialFilters,
    isLoading,
    error,
    isFetchingNextPage,
    valueOptions,
    refetch,
    handleApplyFilters,
    handleClearFilters,
    getActivityElementId,
    loadMoreRef,
    includes_pd,
    includes_dc,
  } = useActivityTabLogic();

  if (isLoading) {
    return (
      <div className="activity-tab">
        <div className="atw-sticky-header">
          <h2 className="activity-tab-title">{title}</h2>
        </div>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div className="activity-tab">
        <h2 className="activity-tab-title">{title}</h2>
        <div className="atw-error-fallback">
          <p>Failed to load {title}.</p>
          <button type="button" onClick={refetch} className="atw-retry-btn">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="activity-tab">
      <div className="atw-sticky-header">
        <div className="atw-header-left">
          <span className="activity-tab-title">Total Activity</span>
          <span className="atw-activity-count-badge">
            {activityNodes.reduce((acc, node) => acc + (node.type === "single" ? 1 : node.activities.length), 0)}
          </span>
        </div>
        <div className="atw-header-right">
          {includes_pd && (
            <button
              type="button"
              className={`atw-special-filter-btn ${initialFilters.some((f) => f.field === "sources" && f.value === "pd") ? "active" : ""}`}
              onClick={() => {
                const isPd = initialFilters.some((f) => f.field === "sources" && f.value === "pd");
                const others = initialFilters.filter((f) => !(f.field === "sources" && f.value === "pd"));
                handleApplyFilters(isPd ? others : [...others, { field: "sources", value: "pd" }]);
              }}
            >
              PDA
            </button>
          )}
          {includes_dc && (
            <button
              type="button"
              className={`atw-special-filter-btn ${initialFilters.some((f) => f.field === "sources" && f.value === "dc") ? "active" : ""}`}
              onClick={() => {
                const isDc = initialFilters.some((f) => f.field === "sources" && f.value === "dc");
                const others = initialFilters.filter((f) => !(f.field === "sources" && f.value === "dc"));
                handleApplyFilters(isDc ? others : [...others, { field: "sources", value: "dc" }]);
              }}
            >
              DC
            </button>
          )}
          <ActivityFilter
            key={JSON.stringify(initialFilters)}
            initialFilters={initialFilters}
            onApply={handleApplyFilters}
            onClear={handleClearFilters}
            valueOptions={valueOptions}
          />
        </div>
      </div>

      <div className="activity-timeline">
        {activityNodes.length === 0 ? (
          <div style={{ padding: "20px", textAlign: "center", color: "#666" }}>No activities found for this contact.</div>
        ) : (
          <>
            {activityNodes.map((node) => {
              if (node.type === "single") {
                const id = getActivityElementId(node.activity, node.index);
                return (
                  <div key={id} data-activity-id={id}>
                    <Activity activity={node.activity} />
                  </div>
                );
              }
              const id = getActivityElementId(node.activities[0], node.firstIndex);
              return <ActivityDateGroup key={id} activities={node.activities} scrollId={id} />;
            })}
            <div ref={loadMoreRef} className="activity-load-more-sentinel" aria-hidden="true" />
            {isFetchingNextPage && (
              <div className="activity-load-more" style={{ padding: "12px", textAlign: "center", color: "#666" }}>
                <Loader />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ActivityTab;
