import type { Meta, StoryObj } from "@storybook/react-vite";
import { CreateRoleModal } from "./index";

const meta: Meta<typeof CreateRoleModal> = {
  title: "Components/Modal/CreateRoleModal",
  component: CreateRoleModal,
};

export default meta;

type Story = StoryObj<typeof CreateRoleModal>;

export const Default: Story = {};