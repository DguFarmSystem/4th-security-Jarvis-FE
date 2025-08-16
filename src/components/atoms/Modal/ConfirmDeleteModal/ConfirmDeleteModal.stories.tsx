import type { Meta, StoryObj } from "@storybook/react-vite";
import { ConfirmDeleteModal } from "./index";

const meta: Meta<typeof ConfirmDeleteModal> = {
  title: "Components/Modal/ConfirmDeleteModal",
  component: ConfirmDeleteModal,
};

export default meta;
type Story = StoryObj<typeof ConfirmDeleteModal>;

export const Default: Story = {
  args: {
    title: "Delete User",
    message: "Are you sure you want to delete john.doe?",
  },
};

export const ForRole: Story = {
  args: {
    title: "Delete Role",
    message: "Are you sure you want to delete the role 'editor'?",
  },
};