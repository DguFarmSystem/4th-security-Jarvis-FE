import Button from "../../Button";

type Permission = string;

export type RoleRow = {
  role: string;
  permissionsLeft: Permission[];
  permissionsRight?: Permission[];
};

interface RoleManagementProps {
  title?: string;
  roles?: RoleRow[];
  onCreateRole?: () => void;
  onTogglePermission?: (roleIndex: number, column: "left" | "right", permIndex: number, checked: boolean) => void;
}

const DEFAULT_ROLES: RoleRow[] = [
  {
    role: "Admin",
    permissionsLeft: ["View resources", "Edit resources", "View audit log"],
    permissionsRight: ["View resources", "Edit resources", "View audit log"],
  },
  {
    role: "User",
    permissionsLeft: ["View resources", "Edit resources", "View audit log"],
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
      }}
    >
      {/* 헤더 */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        <h3 style={{ margin: 0, color: "#000", fontSize: 18, fontWeight: 700 }}>{title}</h3>
        <Button variant="createRole" onClick={onCreateRole}>
          + Create Role
        </Button>
      </div>

      {/* 상단 구분선 */}
      <div style={{ height: 1, width: "100%", background: "var(--color-gray-400, #D3D3D3)", marginBottom: 8 }} />

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
        }}
      >
        <div>Role</div>
        <div>Permissions</div>
      </div>

      {/* 목록 */}
      <div>
        {roles.map((r, rIdx) => (
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

            {/* Permissions (2 columns) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: r.permissionsRight?.length ? "1fr 1fr" : "1fr",
                gap: "8px 32px",
              }}
            >
              {/* left */}
              <div style={{ display: "grid", gap: 8 }}>
                {r.permissionsLeft.map((p, pIdx) => (
                  <label key={`L-${pIdx}`} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <input
                      type="checkbox"
                      defaultChecked
                      onChange={(e) =>
                        onTogglePermission?.(rIdx, "left", pIdx, e.currentTarget.checked)
                      }
                    />
                    <span style={{ color: "#000", fontSize: 14 }}>{p}</span>
                  </label>
                ))}
              </div>

              {/* right (optional) */}
              {r.permissionsRight?.length ? (
                <div style={{ display: "grid", gap: 8 }}>
                  {r.permissionsRight.map((p, pIdx) => (
                    <label key={`R-${pIdx}`} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <input
                        type="checkbox"
                        defaultChecked
                        onChange={(e) =>
                          onTogglePermission?.(rIdx, "right", pIdx, e.currentTarget.checked)
                        }
                      />
                      <span style={{ color: "#000", fontSize: 14 }}>{p}</span>
                    </label>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}