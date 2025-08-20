import type { ReactNode } from "react";

export type ResourceOption = {
  label: string;
  checked?: boolean;
  disabled?: boolean;
};

type ResourceTypeProps = {
  title?: string;
  options?: ResourceOption[];
  onToggle?: (index: number, checked: boolean) => void;
  /** 1행 오른쪽(예: "생성") */
  headerRight?: ReactNode;
  /** 2행 오른쪽(예: 리소스 추가 버튼) */
  optionsRight?: ReactNode;
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
  headerRight,
  optionsRight,
}: ResourceTypeProps) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 921,
        borderRadius: 15,
        border: "1px solid #737373",
        background: "var(--color-white)",
        padding: "12px 16px",
        fontFamily: "var(--font-pretendard)",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      {/* 1행: 제목(좌) + headerRight(우) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <div style={{ color: "#000", fontSize: 16, fontWeight: 700 }}>
          {title}
        </div>
        {headerRight && (
          <div style={{ fontSize: 14, color: "#000", fontWeight: 600 }}>
            {headerRight}
          </div>
        )}
      </div>

      {/* 2행: 체크박스(좌) + optionsRight(우) */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          flexWrap: "wrap",
        }}
      >
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
                userSelect: "none",
              }}
            >
              <input
                type="checkbox"
                checked={!!opt.checked} // 제어형
                disabled={opt.disabled}
                onChange={(e) => onToggle?.(i, e.currentTarget.checked)}
              />
              {opt.label}
            </label>
          ))}
        </div>

        {/* 우측 버튼을 오른쪽 끝으로 밀기 */}
        {optionsRight && <div style={{ marginLeft: "auto" }}>{optionsRight}</div>}
      </div>
    </div>
  );
}