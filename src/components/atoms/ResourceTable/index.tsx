import React, { useState} from 'react';
import Button from '../Button';
import { TrashIcon } from '@/assets/icons/TrashIcon';
import { ConfirmDeleteModal } from '../Modal/ConfirmDeleteModal/index';

export interface Resource {
  name: string;
  type: string;
  actionLabel?: string; // e.g. "연결"
  onActionClick?: () => void;
   nodeHost?: string; // WebSocket 연결에 필요한 호스트
  loginUser?: string; // 로그인 사용자
    nodeName?: string; // API 호출 시 사용할 실제 노드 이름(= metadata.name)
  onDeleteClick?: () => void; // 삭제 아이콘 클릭 핸들러
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

   const [toDeleteIndex, setToDeleteIndex] = useState<number | null>(null);

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
            {/* 액션 칸 */}
            {res.actionLabel !== undefined || res.onDeleteClick ? (
              <td style={styles.td}>
                <div style={styles.actions}>
                  {res.actionLabel !== undefined && (
                    <Button variant="connect" onClick={res.onActionClick}>
                      {res.actionLabel}
                    </Button>
                  )}
                  {res.onDeleteClick && (
                    <button
                      type="button"
                      title="노드 삭제"
                      aria-label={`${res.name} 삭제`}
                      onClick={res.onDeleteClick}
                      style={styles.iconButton}
                    >
                      <TrashIcon />
                    </button>
                  )}
                </div>
              </td>
            ) : null}
          </tr>
        ))}
      </tbody>
    </table>
     {toDeleteIndex !== null && (
        <ConfirmDeleteModal
          title="노드 삭제"
          message={`"${resources[toDeleteIndex].name}" 노드를 삭제할까요?`}
          onConfirm={confirmDelete}
          onCancel={closeConfirm}
        />
      )}
    </>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  table: { width: '100%', borderCollapse: 'collapse' },
  th: { textAlign: 'left', fontSize: 13, color: '#333', padding: '6px 8px', borderBottom: '1px solid #eee' },
  tr: { borderBottom: '1px solid #f1f1f1' },
  td: { padding: '8px', fontSize: 14 },
  actions: { display: 'flex', alignItems: 'center', gap: 8 },
  iconButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 6,
    border: '1px solid #ddd',
    background: '#fff',
    cursor: 'pointer',
  },
};
export default ResourceTable;