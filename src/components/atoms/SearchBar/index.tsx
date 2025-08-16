import React from 'react';
import { SearchIcon } from '../../../assets/icons/SearchIcon';
import { FilterIcon } from '../../../assets/icons/FilterIcon';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onFilterClick?: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = '이름 또는 태그로 검색',
  value = '',
  onChange,
  onFilterClick,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div style={styles.container}>
      <SearchIcon />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        style={styles.input}
      />
      <button style={styles.filterButton} onClick={onFilterClick}>
        <FilterIcon />
      </button>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    alignItems: 'center',
    border: '1px solid #ddd',
    borderRadius: 24,
    padding: '6px 12px',
    backgroundColor: '#fff',
    maxWidth: 400,
    width: '100%',
  },
  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    marginLeft: 8,
    fontSize: 14,
    color: '#333',
    background: 'transparent',
  },
  filterButton: {
    background: 'none',
    border: 'none',
    marginLeft: 8,
    cursor: 'pointer',
  },
};

export default SearchBar;