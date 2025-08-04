// AddUserModal.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { AddUserModal } from "./index";

const meta: Meta<typeof AddUserModal> = {
  title: "Components/Modal/AddUserModal",
  component: AddUserModal,
};

export default meta;

type Story = StoryObj<typeof AddUserModal>;

export const Default: Story = {};