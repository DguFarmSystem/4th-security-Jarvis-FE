import React, { useEffect, useMemo, useState } from 'react';
import { CalendarIcon } from '@/assets/icons/CalendarIcon';

interface FilterPanelProps {
  dateRange?: string;
  keyword?: string;
  onDateChange?: (value: string) => void;
  onKeywordChange?: (value: string) => void;

  // ✅ 다중 선택 관련
  selectedEventTypes?: string[];
  eventTypeOptions?: string[];
  onEventTypesChange?: (value: string[]) => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  dateRange = '',
  keyword = '',
  onDateChange,
  onKeywordChange,

  selectedEventTypes = [],
  eventTypeOptions = [],
  onEventTypesChange,
}) => {
  const [openPicker, setOpenPicker] = useState(false);
  const [start, setStart] = useState<string>('');
  const [end, setEnd] = useState<string>('');

  // EventType 팝오버
  const [openEventSel, setOpenEventSel] = useState(false);
  const [tempSelected, setTempSelected] = useState<string[]>(selectedEventTypes);

  // 열릴 때 현재 값으로 초기화
  useEffect(() => {
    if (openEventSel) setTempSelected(selectedEventTypes);
  }, [openEventSel, selectedEventTypes]);

  // dateRange가 있으면 팝오버 열 때 초기값으로 반영
  useMemo(() => {
    const [s, e] = (dateRange || '').split(' - ');
    if (s) setStart(s);
    if (e) setEnd(e);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openPicker]);

  const applyRange = () => {
    if (!start || !end) return alert('시작일과 종료일을 모두 선택하세요.');
    if (new Date(start) > new Date(end)) return alert('종료일이 시작일보다 이전입니다.');
    onDateChange?.(`${start} - ${end}`);
    setOpenPicker(false);
  };

  const clearRange = () => {
    setStart('');
    setEnd('');
    onDateChange?.('');
    setOpenPicker(false);
  };

  // --- 이벤트 타입 드롭다운 로직 ---
  const toggle = (opt: string) => {
    setTempSelected(prev =>
      prev.includes(opt) ? prev.filter(v => v !== opt) : [...prev, opt]
    );
  };
  const applyEvents = () => {
    onEventTypesChange?.(tempSelected);
    setOpenEventSel(false);
  };
  const clearEvents = () => {
    setTempSelected([]);
    onEventTypesChange?.([]); // 빈 배열 = All
    setOpenEventSel(false);
  };
  const eventSummary =
    selectedEventTypes.length === 0 ? 'All'
    : selectedEventTypes.length === 1 ? selectedEventTypes[0]
    : `${selectedEventTypes.length} selected`;

  return (
    <div style={styles.container}>
      {/* Date */}
      <div style={{ ...styles.group, position: 'relative' }}>
        <label style={styles.label}>Date</label>
        <input
          type="text"
          value={dateRange}
          readOnly
          placeholder="YYYY-MM-DD - YYYY-MM-DD"
          style={{ ...styles.input, paddingRight: 36 }}
        />
        <button type="button" onClick={() => setOpenPicker(v => !v)} aria-label="open date picker" style={iconBtnStyle}>
          <CalendarIcon />
        </button>

        {openPicker && (
          <div style={popoverStyle} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', gap: 12 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={popoverLabel}>Start</label>
                <input type="date" value={start} onChange={(e) => setStart(e.target.value)} style={dateInputStyle} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <label style={popoverLabel}>End</label>
                <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} style={dateInputStyle} />
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 12, gap: 8 }}>
              <button type="button" onClick={clearRange} style={ghostBtn}>Clear</button>
              <button type="button" onClick={applyRange} style={primaryBtn}>Apply</button>
            </div>
          </div>
        )}
      </div>

      {/* Keyword */}
      <div style={styles.group}>
        <label style={styles.label}>Search</label>
        <input
          type="text"
          value={keyword}
          onChange={(e) => onKeywordChange?.(e.target.value)}
          placeholder="Search user or event"
          style={styles.input}
        />
      </div>

      {/* Event Type (multi-select) */}
      <div style={{ ...styles.group, position: 'relative' }}>
        <label style={styles.label}>Event Type</label>
        <button type="button" onClick={() => setOpenEventSel(v => !v)} style={{ ...styles.input, textAlign: 'left' }}>
          {eventSummary}
        </button>

        {openEventSel && (
          <div style={{ ...popoverStyle, width: 260 }} onClick={(e) => e.stopPropagation()}>
            <div style={{ maxHeight: 220, overflowY: 'auto', paddingRight: 4 }}>
              {eventTypeOptions.length === 0 ? (
                <div style={{ color: '#777', fontSize: 13 }}>No event types</div>
              ) : (
                eventTypeOptions.map(opt => (
                  <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '4px 2px', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={tempSelected.includes(opt)}
                      onChange={() => toggle(opt)}
                    />
                    <span>{opt}</span>
                  </label>
                ))
              )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, gap: 8 }}>
              <button type="button" onClick={clearEvents} style={ghostBtn}>All</button>
              <button type="button" onClick={applyEvents} style={primaryBtn}>Apply</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: { display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 12 },
  group: { display: 'flex', flexDirection: 'column', flex: 1, minWidth: 160 },
  label: { fontSize: 12, marginBottom: 4, color: '#444' },
  input: { padding: '6px 10px', border: '1px solid #ccc', borderRadius: 8, fontSize: 14, background: '#fff' },
};

const iconBtnStyle: React.CSSProperties = {
  position: 'absolute', right: 8, bottom: 8, background: 'transparent', border: 'none', padding: 0, cursor: 'pointer',
};
const popoverStyle: React.CSSProperties = {
  position: 'absolute', top: '100%', left: 0, marginTop: 8, background: '#fff', border: '1px solid #ddd',
  borderRadius: 8, boxShadow: '0 6px 18px rgba(0,0,0,0.12)', padding: 12, zIndex: 10, width: 300,
};
const dateInputStyle: React.CSSProperties = { padding: '6px 10px', border: '1px solid #ccc', borderRadius: 8, fontSize: 14 };
const popoverLabel: React.CSSProperties = { fontSize: 12, color: '#666' };
const ghostBtn: React.CSSProperties = { background: 'transparent', border: '1px solid #ccc', borderRadius: 6, padding: '6px 10px', cursor: 'pointer' };
const primaryBtn: React.CSSProperties = { background: '#1a73e8', color: '#fff', border: 'none', borderRadius: 6, padding: '6px 12px', cursor: 'pointer' };

export default FilterPanel;