import React, { useState } from 'react';
import Button from '../Button';
import { TrashIcon } from '@/assets/icons/TrashIcon';
import { ConfirmDeleteModal } from '../Modal/ConfirmDeleteModal/index';

export interface Resource {
  name: string;
  type: string;
  tags?: string[];
  actionLabel?: string;
  onActionClick?: () => void;
  nodeHost?: string;
  loginUser?: string;
  nodeName?: string;
  onDeleteClick?: () => void;
}

interface ResourceTableProps {
  columns: string[]; // ['이름','종류','태그']
  resources: Resource[];
  showLoading?: boolean;
}

const ResourceTable: React.FC<ResourceTableProps> = ({ columns, resources }) => {
  const [toDeleteIndex, setToDeleteIndex] = useState<number | null>(null);

  // 액션 칸(휴지통) 유무만 판단 → 하나라도 있으면 우측 끝에 아주 좁게 생성
  const hasTrash = resources.some(r => !!r.onDeleteClick);

  const openConfirm = (idx: number) => setToDeleteIndex(idx);
  const closeConfirm = () => setToDeleteIndex(null);
  const confirmDelete = () => {
    if (toDeleteIndex === null) return;
    resources[toDeleteIndex].onDeleteClick?.();
    closeConfirm();
  };

  return (
    <>
      <table style={styles.table}>
        <colgroup>
          <col style={{ width: '32%' }} />                    {/* 이름 */}
          <col style={{ width: '18%' }} />                    {/* 종류 */}
          <col style={{ width: hasTrash ? 'auto' : '50%' }} />{/* 태그(가변) + 버튼 */}
          {hasTrash && <col style={{ width: 48 }} />}         {/* 액션(휴지통만) */}
        </colgroup>

        <thead>
  <tr>
    {columns.map((col, i) => (
      <th
        key={col}
        style={{
          ...styles.th,
          // 3번째 칸(태그)이거나 라벨명이 '태그'면 오른쪽 정렬
          textAlign: i === 2 || col === '태그' ? 'right' : styles.th.textAlign,
        }}
      >
        {col}
      </th>
    ))}
    {/* 액션 헤더: 글자 없이 빈 셀만 유지 */}
    {hasTrash && (
      <th
        aria-label="actions"
        style={{ ...styles.th, textAlign: 'right' }}
      />
    )}
  </tr>
</thead>

        <tbody>
          {resources.map((res, idx) => (
            <tr key={idx} style={styles.tr}>
              <td style={styles.td}>{res.name}</td>
              <td style={styles.td}>{res.type}</td>

              {/* 태그 칸: 태그 + (버튼도 여기) */}
              <td style={{ ...styles.td }}>
                <div style={styles.tagAndButtonRow}>
                  <span style={styles.tagsText}>
                    {res.tags?.length ? res.tags.join(', ') : ''}
                  </span>
                  {res.actionLabel !== undefined && (
                    <Button variant="connect" onClick={res.onActionClick}>
                      {res.actionLabel}
                    </Button>
                  )}
                </div>
              </td>
              {hasTrash && (
                <td style={{ ...styles.td, ...styles.actionsCell }}>
                  {res.onDeleteClick && (
                    <button
                      type="button"
                      title="Delete Node"
                      aria-label={`${res.name} 삭제`}
                      onClick={() => openConfirm(idx)}
                      style={{
      background: "transparent",
      border: "none",
      cursor: "pointer",
      padding: 0,
    }}
                    >
                      <TrashIcon />
                    </button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      {toDeleteIndex !== null && (
        <ConfirmDeleteModal
          title="Delete Node"
          message={`Are you sure you want to delete "${resources[toDeleteIndex].name}"?`}
          onConfirm={confirmDelete}
          onCancel={closeConfirm}
        />
      )}
    </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    tableLayout: 'fixed',
  },
  th: {
    textAlign: 'left',
    fontSize: 13,
    color: '#333',
    padding: '6px 8px',
    borderBottom: '1px solid #eee',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  tr: { borderBottom: '1px solid #f1f1f1' },
  td: {
    padding: '8px',
    fontSize: 14,
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  // 태그 + 버튼을 한 줄 정렬 (오른쪽 끝에 버튼 배치)
  tagAndButtonRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    justifyContent: 'space-between',
    minWidth: 0, // ellipsis 작동 보조
  },
  tagsText: {
    flex: 1,
    minWidth: 0,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    marginRight: 8,
  },

  actionsCell: {
    textAlign: 'right',
    paddingRight: 8,
  },
};

export default ResourceTable;