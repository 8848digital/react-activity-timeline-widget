import React, { useState, useRef, useEffect } from "react";
import { FunnelIcon } from "./icons";

interface ActivityFilterProps {
  initialFilters: { field: string; value: string }[];
  onApply: (filters: { field: string; value: string }[]) => void;
  onClear: () => void;
  valueOptions: Record<string, { label: string; value: string }[]>;
}

const ActivityFilter: React.FC<ActivityFilterProps> = ({
  initialFilters,
  onApply,
  onClear,
  valueOptions,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const [selectedTypes, setSelectedTypes] = useState<string[]>(() =>
    initialFilters
      .filter((f) => f.field === "activity_type")
      .map((f) => f.value)
  );

  const activityOptions = valueOptions.activity_type || [];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleToggle = () => setIsOpen((v) => !v);

  const handleCheckboxChange = (value: string, checked: boolean) => {
    if (checked) {
      setSelectedTypes((prev) => [...prev, value]);
    } else {
      setSelectedTypes((prev) => prev.filter((t) => t !== value));
    }
  };

  const handleApply = () => {
    const filters = selectedTypes.map((type) => ({
      field: "activity_type",
      value: type,
    }));
    onApply(filters);
    setIsOpen(false);
  };

  const handleClear = () => {
    setSelectedTypes([]);
    onClear();
    setIsOpen(false);
  };

  return (
    <div className="atw-filter-wrapper" ref={panelRef}>
      <button
        type="button"
        onClick={handleToggle}
        className="atw-filter-trigger"
      >
        <FunnelIcon size={22} color="#175353" />
      </button>

      {isOpen && (
        <div className="atw-filter-panel">
          <div className="atw-filter-options">
            {activityOptions.map((opt) => (
              <label key={opt.value} className="atw-filter-option">
                <input
                  type="checkbox"
                  checked={selectedTypes.includes(opt.value)}
                  onChange={(e) => handleCheckboxChange(opt.value, e.target.checked)}
                />
                <span>{opt.label}</span>
              </label>
            ))}
          </div>
          <div className="atw-filter-actions">
            <button type="button" onClick={handleClear} className="atw-filter-clear-btn">
              Clear
            </button>
            <button type="button" onClick={handleApply} className="atw-filter-apply-btn">
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActivityFilter;
