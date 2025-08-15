import React from 'react';
import Button from '../Button';

export interface Resource {
  name: string;
  type: string;
  actionLabel?: string; // e.g. "연결"
  onActionClick?: () => void;
}

interface ResourceTableProps {
  columns: string[]; // ['이름', '종류', '태그']
  resources: Resource[];
  showLoading?: boolean;
}

const ResourceTable: React.FC<ResourceTableProps> = ({
  columns,
  resources,
}) => {
  return (
      <table style={styles.table}>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col} style={styles.th}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {resources.map((res, idx) => (
            <tr key={idx} style={styles.tr}>
              <td style={styles.td}>{res.name}</td>
              <td style={styles.td}>{res.type}</td>
              {res.actionLabel !== undefined ? (
                <td style={styles.td}>
                  <Button variant="connect" onClick={res.onActionClick}>
                    {res.actionLabel}
                  </Button>
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  th: {
    textAlign: 'left',
    fontSize: 13,
    color: '#333',
    padding: '6px 8px',
    borderBottom: '1px solid #eee',
  },
  tr: {
    borderBottom: '1px solid #f1f1f1',
  },
  td: {
    padding: '8px',
    fontSize: 14,
  },
  actionButton: {
    padding: '4px 10px',
    borderRadius: 6,
    backgroundColor: '#1d72ea',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: 13,
  },
  loading: {
    textAlign: 'center',
    padding: '12px 0 4px',
    color: '#999',
    fontSize: 18,
  },
};

export default ResourceTable;