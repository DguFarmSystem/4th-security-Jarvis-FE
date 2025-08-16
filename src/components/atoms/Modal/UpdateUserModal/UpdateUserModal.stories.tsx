import type { Meta, StoryObj } from "@storybook/react-vite";
import { UpdateUserModal } from "./index";

const meta: Meta<typeof UpdateUserModal> = {
  title: "Components/Modal/UpdateUserModal",
  component: UpdateUserModal,
};

export default meta;
type Story = StoryObj<typeof UpdateUserModal>;

export const Default: Story = {
  args: {
    username: "john.doe",
    email: "john@example.com",
    role: "editor",
  },
};