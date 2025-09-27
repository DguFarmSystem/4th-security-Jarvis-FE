import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserManagement } from "./index";

const meta: Meta<typeof UserManagement> = {
  title: "Components/Management/UserManagement",
  component: UserManagement,
  parameters: {
    layout: "centered",
  },
  args: {
    // 기본 데이터는 컴포넌트 내부 DEFAULT_USERS 사용
  },
  argTypes: {
    onAddUser: { action: "add_user_clicked" },
    onUpdateUser: { action: "updtae_user_clicked" },
    onDelete: { action: "delete_clicked" },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof UserManagement>;

export const Default: Story = {};

export const Empty: Story = {
  args: {
    users: [],
  },
};