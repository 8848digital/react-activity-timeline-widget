import { useState, useCallback, useMemo } from "react";

/** Shape of filter objects. */
interface TableFilterItem<T extends string> {
  field: T;
  value: string;
}

/**
 * Converts a flat array of {field, value} filter items into a Record.
 */
function toFilterRecord<T extends string>(filters: TableFilterItem<T>[]): Partial<Record<T, string | string[]>> {
  const result: Partial<Record<T, string | string[]>> = {};
  for (const { field, value } of filters) {
    if (!value) continue;
    const existing = result[field];
    if (!existing) {
      result[field] = value;
    } else if (Array.isArray(existing)) {
      if (!existing.includes(value)) {
        result[field] = [...existing, value];
      }
    } else if (existing !== value) {
      result[field] = [existing, value];
    }
  }
  return result;
}

// Consolidated configuration for Activity Types
const ACTIVITY_CONFIG: Record<string, string[]> = {
  "WhatsApp Chat": ["whatsapp"],
  Emails: ["communication"],
  Notes: ["notes"],
  Schedules: ["schedule"],
  Reminders: ["reminder"],
  Calls: ["call"],
  Leads: ["lead"],
  Brief: ["brief"],
  "Raven Message": ["raven"],
};

const REVERSE_ACTIVITY_TYPE_MAP = ACTIVITY_CONFIG;

export const ACTIVITY_TYPE_LABELS = Object.keys(ACTIVITY_CONFIG).map((label) => ({
  label,
  value: label,
}));

export interface UseFilterManagerOptions<T extends string> {
  initialParameters?: Partial<Record<T, string | string[]>>;
}

/**
 * Hook for managing filter state and API transformations for Activities.
 */
export function useFilterState<T extends string = string>({
  initialParameters = {},
}: UseFilterManagerOptions<T> = {}) {
  const [filterParameters, setFilterParameters] = useState<Partial<Record<T, string | string[]>>>(initialParameters);

  const handleApplyFilters = useCallback((filters: TableFilterItem<T>[]) => {
    const record = toFilterRecord(filters);
    setFilterParameters(Object.keys(record).length === 0 ? {} : record);
  }, []);

  const handleClearFilters = useCallback(() => {
    setFilterParameters({});
  }, []);

  const filtersPayload = useMemo(() => {
    const params = filterParameters as Partial<Record<string, string | string[]>>;
    const filters: Record<string, string | string[]> = {};

    if (params.activity_type) {
      const typeValues = Array.isArray(params.activity_type) ? params.activity_type : [params.activity_type];
      const allMapped: string[] = [];
      typeValues.forEach((val) => {
        const mapped = REVERSE_ACTIVITY_TYPE_MAP[val];
        if (mapped) {
          allMapped.push(...mapped);
        }
      });
      if (allMapped.length > 0) {
        filters.activity_type = Array.from(new Set(allMapped));
      }
    }

    if (params.sources) {
      filters.sources = Array.isArray(params.sources) ? params.sources : [params.sources];
    }

    if (params.lead_id) {
      const leadValues = Array.isArray(params.lead_id) ? params.lead_id : [params.lead_id];
      filters.lead = leadValues;
    }

    return filters;
  }, [filterParameters]);

  const initialFilters = useMemo(() => {
    const init: { field: T; value: string }[] = [];
    Object.entries(filterParameters).forEach(([field, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => {
          init.push({ field: field as T, value: v });
        });
      } else if (value) {
        init.push({ field: field as T, value: value as string });
      }
    });
    return init;
  }, [filterParameters]);

  return {
    filtersPayload,
    initialFilters,
    handleApplyFilters,
    handleClearFilters,
  };
}
