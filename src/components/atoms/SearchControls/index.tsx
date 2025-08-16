// components/atoms/SearchControls/index.tsx
import React from 'react';
import { CalendarIcon } from '../../../assets/icons/CalendarIcon';
import { FilterIcon } from '../../../assets/icons/FilterIcon';

interface SearchControlsProps {
  dateLabel?: string;
  onDateClick?: () => void;
  onFilterClick?: () => void;
}

const SearchControls: React.FC<SearchControlsProps> = ({
  dateLabel = 'Last 30 days',
  onDateClick,
  onFilterClick,
}) => {
  return (
    <div style={styles.wrapper}>
      <button style={styles.button} onClick={onDateClick}>
        <CalendarIcon />
        <span>{dateLabel}</span>
      </button>
      <button style={styles.button} onClick={onFilterClick}>
        <span>Filter</span>
        <FilterIcon />
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    display: 'flex',
    gap: 8,
    flexWrap: 'wrap',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    padding: '6px 12px',
    border: '1px solid #ccc',
    borderRadius: 20,
    fontSize: 14,
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
};

export default SearchControls;