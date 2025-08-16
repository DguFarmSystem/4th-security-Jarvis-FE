// components/atoms/FilterPanel/index.tsx
import React from 'react';

interface FilterPanelProps {
  dateRange?: string;
  keyword?: string;
  eventType?: string;
  onDateChange?: (value: string) => void;
  onKeywordChange?: (value: string) => void;
  onEventTypeChange?: (value: string) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  dateRange = '',
  keyword = '',
  eventType = 'All',
  onDateChange,
  onKeywordChange,
  onEventTypeChange,
}) => {
  return (
    <div style={styles.container}>
      <div style={styles.group}>
        <label style={styles.label}>Date</label>
        <input
          type="text"
          value={dateRange}
          onChange={(e) => onDateChange?.(e.target.value)}
          placeholder="MM/DD/YYYY - MM/DD/YYYY"
          style={styles.input}
        />
      </div>

      <div style={styles.group}>
        <label style={styles.label}>Event</label>
        <input
          type="text"
          value={keyword}
          onChange={(e) => onKeywordChange?.(e.target.value)}
          placeholder="Search user or event"
          style={styles.input}
        />
      </div>

      <div style={styles.group}>
        <label style={styles.label}>Event Type</label>
        <select
          value={eventType}
          onChange={(e) => onEventTypeChange?.(e.target.value)}
          style={styles.input}
        >
          <option value="All">All</option>
          <option value="Login">Login</option>
          <option value="Logout">Logout</option>
          <option value="Action">Action</option>
        </select>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
    marginTop: 12,
  },
  group: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    minWidth: 160,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
    color: '#444',
  },
  input: {
    padding: '6px 10px',
    border: '1px solid #ccc',
    borderRadius: 8,
    fontSize: 14,
  },
};

export default FilterPanel;
