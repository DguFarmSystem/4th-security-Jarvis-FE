import type { Meta, StoryObj } from "@storybook/react-vite";
import { RoleManagement, type RoleRow } from "./index";

const meta: Meta<typeof RoleManagement> = {
  title: "Atoms/Management/RoleManagement",
  component: RoleManagement,
};
export default meta;

type Story = StoryObj<typeof RoleManagement>;

const roles: RoleRow[] = [
  {
    role: "Admin",
    permissions: [
      "View resources",
      "Edit resources",
      "View audit log",
      "Manage nodes",
      "Read sessions",
      "Issue tokens",
    ],
    checkedPermissions: [
      "View resources",
      "Edit resources",
      "View audit log",
      "Manage nodes",
      "Read sessions",
    ],
  },
  {
    role: "User",
    permissions: ["View resources", "Read sessions"],
    checkedPermissions: ["View resources"],
  },
];

export const Default: Story = {
  args: {
    title: "Role Management",
    roles,
    onCreateRole: () => alert("Create Role clicked"),
    onTogglePermission: (rIdx, permission, checked) => {
      console.log("toggle", { rIdx, permission, checked });
    },
  },
};