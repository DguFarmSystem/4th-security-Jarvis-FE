import type { Meta, StoryObj } from "@storybook/react-vite";
import { UpdateRoleModal } from "./index";

const meta: Meta<typeof UpdateRoleModal> = {
  title: "Components/Modal/UpdateRoleModal",
  component: UpdateRoleModal,
};

export default meta;
type Story = StoryObj<typeof UpdateRoleModal>;

export const Default: Story = {
  args: {
    roleName: "editor",
    permissions: [
      "View resources",
      "Edit resources",
      "Manage users",
      "Access billing",
    ],
  },
};