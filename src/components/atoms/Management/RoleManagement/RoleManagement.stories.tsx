import type { Meta, StoryObj } from "@storybook/react-vite";
import { RoleManagement, type RoleRow } from "./index";

const meta: Meta<typeof RoleManagement> = {
  title: "Components/Management/RoleManagement",
  component: RoleManagement,
  parameters: {
    layout: "padded",
  },
};
export default meta;

type Story = StoryObj<typeof RoleManagement>;

export const Default: Story = {
  args: {},
};

export const CustomData: Story = {
  args: {
    title: "Role Management",
    roles: [
      {
        role: "Admin",
        permissionsLeft: ["View resources", "Edit resources", "View audit log"],
        permissionsRight: ["Manage users", "Manage roles", "Access billing"],
      },
      {
        role: "Operator",
        permissionsLeft: ["View resources", "View audit log"],
        permissionsRight: ["Restart services", "Deploy updates"],
      },
      {
        role: "User",
        permissionsLeft: ["View resources"],
      },
    ] as RoleRow[],
  },
};