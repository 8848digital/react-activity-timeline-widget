import React, { useState } from "react";
import { Receipt } from "./icons";
import { parseDateTime } from "../utils/dateMapper";
import type { QuotationActivityType, QuotationItem } from "../types/activity";
import Tooltip from "./common/Tooltip";
import ActivityBooleanBadges from "./common/ActivityBooleanBadges";

const QUOTATION_COLOR = "#0F766E";
/** Lines shown before "View all" */
const COLLAPSED_ITEM_COUNT = 3;

interface QuotationActivityProps {
  activity: QuotationActivityType;
}

function formatAmount(value: number, currency?: string | null): string {
  const amount = (value ?? 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return currency ? `${currency} ${amount}` : amount;
}

function formatQty(value: number): string {
  return (value ?? 0).toLocaleString(undefined, { maximumFractionDigits: 2 });
}

/** Karat · colour · size, skipping blanks */
function getItemDetails(item: QuotationItem): string {
  return [item.karat, item.colour, item.size].filter(Boolean).join(" · ");
}

const MetaRow: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <div className="quotation-activity-meta-row">
    <div className="quotation-activity-label-cell">
      <span className="quotation-activity-label">{label}</span>
      <span className="quotation-activity-colon">:</span>
    </div>
    <span className="quotation-activity-value">{children}</span>
  </div>
);

const QuotationActivity: React.FC<QuotationActivityProps> = ({ activity }) => {
  const [showAllItems, setShowAllItems] = useState(false);
  const creationDateTime = parseDateTime(activity.creation);
  const items = activity.items ?? [];
  const visibleItems = showAllItems ? items : items.slice(0, COLLAPSED_ITEM_COUNT);
  const hiddenCount = items.length - COLLAPSED_ITEM_COUNT;

  return (
    <div className="activity-item quotation-activity">
      <div className="activity-header">
        <Tooltip content="Quotation" align="left">
          <div className="activity-icon-wrapper">
            <Receipt size={20} color={QUOTATION_COLOR} />
          </div>
        </Tooltip>
        <div className="activity-date-time" style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span>
            {creationDateTime.date} - {creationDateTime.time}
          </span>
          <ActivityBooleanBadges activity={activity} />
        </div>
      </div>
      <div className="activity-content">
        <div className="quotation-activity-card">
          <div className="quotation-activity-card-header">
            <h4 className="quotation-activity-title">Quotation {activity.quotation_no}</h4>
            <span className="quotation-activity-total">{formatAmount(activity.total_amount, activity.currency)}</span>
          </div>
          <div className="quotation-activity-card-content">
            <div className="quotation-activity-meta">
              <MetaRow label="Quotation Date">{parseDateTime(activity.quotation_date).date}</MetaRow>
              {activity.customer_code && <MetaRow label="Customer Code">{activity.customer_code}</MetaRow>}
              {activity.leads?.length > 0 && <MetaRow label="Lead">{activity.leads.join(", ")}</MetaRow>}
              <MetaRow label="Items">
                {activity.item_count} {activity.item_count === 1 ? "design" : "designs"} · Qty {formatQty(activity.total_qty)}
              </MetaRow>
              {activity.po_no && <MetaRow label="PO No">{activity.po_no}</MetaRow>}
              {activity.sales_person && <MetaRow label="Sales Person">{activity.sales_person}</MetaRow>}
              {activity.created_by && <MetaRow label="Created By">{activity.created_by}</MetaRow>}
              {activity.remarks && <MetaRow label="Remarks">{activity.remarks}</MetaRow>}
            </div>

            {items.length > 0 && (
              <div className="quotation-activity-items">
                <table className="quotation-activity-items-table">
                  <thead>
                    <tr>
                      <th>Design</th>
                      <th>Details</th>
                      <th className="quotation-activity-num">Qty</th>
                      <th className="quotation-activity-num">Rate</th>
                      <th className="quotation-activity-num">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleItems.map((item) => (
                      <tr key={item.sr}>
                        <td className="quotation-activity-design">{item.design_code}</td>
                        <td>{getItemDetails(item) || "-"}</td>
                        <td className="quotation-activity-num">{formatQty(item.qty)}</td>
                        <td className="quotation-activity-num">{formatAmount(item.rate)}</td>
                        <td className="quotation-activity-num">{formatAmount(item.amount)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {hiddenCount > 0 && (
                  <button type="button" className="quotation-activity-toggle" onClick={() => setShowAllItems((prev) => !prev)}>
                    {showAllItems ? "Show less" : `View all ${items.length} designs`}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotationActivity;
