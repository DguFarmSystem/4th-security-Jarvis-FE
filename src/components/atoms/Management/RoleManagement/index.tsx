import Button from "../../Button";

type Permission = string;

export type RoleRow = {
  role: string;
  /** 평탄화된 권한 리스트 */
  permissions: Permission[];
  /** 체크된 권한 목록(옵션). 없으면 전부 체크된 상태로 렌더 */
  checkedPermissions?: Permission[];
};

interface RoleManagementProps {
  title?: string;
  roles?: RoleRow[];
  onCreateRole?: () => void;
  onTogglePermission?: (roleIndex: number, permission: Permission, checked: boolean) => void;
}

/** 내부 유틸: 1차원 배열을 2열로 분할 */
function splitInTwo<T>(arr: T[]): [T[], T[]] {
  const mid = Math.ceil(arr.length / 2);
  return [arr.slice(0, mid), arr.slice(mid)];
}

const DEFAULT_ROLES: RoleRow[] = [
  {
    role: "Admin",
    permissions: ["View resources", "Edit resources", "View audit log", "Manage nodes", "Read sessions"],
  },
  {
    role: "User",
    permissions: ["View resources", "Read sessions"],
  },
];

export function RoleManagement({
  title = "Role Management",
  roles = DEFAULT_ROLES,
  onCreateRole,
  onTogglePermission,
}: RoleManagementProps) {
  return (
    <div
      style={{
        width: "921px",
        borderRadius: "15px",
        border: "1px solid #737373",
        background: "var(--color-white)",
        opacity: 0.5,
        padding: "16px 20px",
        fontFamily: "var(--font-pretendard)",
        // 고정 높이 + 내부 스크롤
        height: 460,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* 헤더 */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12, flexShrink: 0 }}>
        <h3 style={{ margin: 0, color: "#000", fontSize: 18, fontWeight: 700 }}>{title}</h3>
        <Button variant="createRole" onClick={onCreateRole}>
          + Create Role
        </Button>
      </div>

      {/* 상단 구분선 */}
      <div
        style={{
          height: 1,
          width: "100%",
          background: "var(--color-gray-400, #D3D3D3)",
          marginBottom: 8,
          flexShrink: 0,
        }}
      />

      {/* 헤더 라벨 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "200px 1fr",
          color: "#000",
          fontSize: 14,
          fontWeight: 700,
          padding: "10px 8px",
          borderBottom: "1px solid var(--color-gray-400, #D3D3D3)",
          flexShrink: 0,
        }}
      >
        <div>Role</div>
        <div>Permissions</div>
      </div>

      {/* 목록 (스크롤 영역) */}
      <div
        style={{
          flex: 1,
          minHeight: 0,
          overflowY: "auto",
        }}
      >
        {roles.map((r, rIdx) => {
          const [left, right] = splitInTwo(r.permissions);
          const isChecked = (perm: string) =>
            r.checkedPermissions ? r.checkedPermissions.includes(perm) : true;

          return (
            <div
              key={`${r.role}-${rIdx}`}
              style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                padding: "12px 8px",
                borderBottom:
                  rIdx === roles.length - 1 ? "none" : "1px solid var(--color-gray-400, #D3D3D3)",
              }}
            >
              {/* Role */}
              <div style={{ color: "#000", fontSize: 14 }}>{r.role}</div>

              {/* Permissions (2 columns auto) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: right.length ? "1fr 1fr" : "1fr",
                  gap: "8px 32px",
                }}
              >
                {/* Left column */}
                <div style={{ display: "grid", gap: 8 }}>
                  {left.map((p, pIdx) => (
                    <label key={`L-${p}-${pIdx}`} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <input
                        type="checkbox"
                        checked={isChecked(p)}
                        onChange={(e) => onTogglePermission?.(rIdx, p, e.currentTarget.checked)}
                      />
                      <span style={{ color: "#000", fontSize: 14 }}>{p}</span>
                    </label>
                  ))}
                </div>

                {/* Right column */}
                {right.length ? (
                  <div style={{ display: "grid", gap: 8 }}>
                    {right.map((p, pIdx) => (
                      <label key={`R-${p}-${pIdx}`} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <input
                          type="checkbox"
                          checked={isChecked(p)}
                          onChange={(e) => onTogglePermission?.(rIdx, p, e.currentTarget.checked)}
                        />
                        <span style={{ color: "#000", fontSize: 14 }}>{p}</span>
                      </label>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}