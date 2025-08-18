import type { Meta, StoryObj } from "@storybook/react-vite";
import { UpdateRoleModal } from "./index";

const meta: Meta<typeof UpdateRoleModal> = {
  title: "Components/Modal/UpdateRoleModal",
  component: UpdateRoleModal,
  argTypes: {
    onSave: { action: "save" },
    onCancel: { action: "cancel" },
  },
};

export default meta;
type Story = StoryObj<typeof UpdateRoleModal>;

export const Default: Story = {
  args: {
    roleName: "editor",
    allPermissions: [
      "View resources",
      "Edit resources",
      "Manage users",
      "Access billing",
    ],
    selectedPermissions: ["View resources", "Edit resources"],
  },
};

export const ManyPermissions: Story = {
  args: {
    roleName: "auditor",
    allPermissions: Array.from({ length: 30 }, (_, i) => `perm-${i + 1}`),
    selectedPermissions: ["perm-1", "perm-2", "perm-10", "perm-20"],
  },
};