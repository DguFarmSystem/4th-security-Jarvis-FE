export type ResourceOption = {
  label: string;
  checked?: boolean;
  disabled?: boolean;
};

type ResourceTypeProps = {
  title?: string;
  options?: ResourceOption[];
  onToggle?: (index: number, checked: boolean) => void;
};

const DEFAULT_OPTIONS: ResourceOption[] = [
  { label: "서버", checked: true },
  { label: "데이터베이스", checked: false, disabled: true },
  { label: "애플리케이션", checked: true },
];

export function ResourceType({
  title = "Resource Type",
  options = DEFAULT_OPTIONS,
  onToggle,
}: ResourceTypeProps) {
  return (
    <div
      style={{
        width: "921px",
        borderRadius: "15px",
        border: "1px solid #737373",
        background: "var(--color-white)",
        opacity: 0.5,
        padding: "12px 16px",
        fontFamily: "var(--font-pretendard)",
      }}
    >
      {/* 타이틀 */}
      <div
        style={{
          color: "#000",
          fontSize: 16,
          fontWeight: 700,
          marginBottom: 10,
        }}
      >
        {title}
      </div>

      {/* 체크박스 라인 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        {options.map((opt, i) => (
          <label
            key={`${opt.label}-${i}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              color: opt.disabled ? "var(--color-gray-400)" : "#000",
              fontSize: 14,
              cursor: opt.disabled ? "not-allowed" : "pointer",
              opacity: opt.disabled ? 0.6 : 1,
            }}
          >
            <input
              type="checkbox"
              defaultChecked={opt.checked}
              disabled={opt.disabled}
              onChange={(e) => onToggle?.(i, e.currentTarget.checked)}
            />
            {opt.label}
          </label>
        ))}
      </div>
    </div>
  );
}