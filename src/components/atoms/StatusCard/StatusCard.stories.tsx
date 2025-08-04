import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatusCard } from "./index";

const meta: Meta<typeof StatusCard> = {
  title: "Components/StatusCard",
  component: StatusCard,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof StatusCard>;

export const Default: Story = {
  args: {
    value: "정상",
    label: "클러스터 상태",
    color: "#BFF5D5", // 예시: system용 배경
  },
};

export const ActiveSessions: Story = {
  args: {
    value: "2",
    label: "활성 세션 수",
    color: "#BFF0F9",
  },
};

export const TotalUsers: Story = {
  args: {
    value: "1070",
    label: "총 사용자 수",
    color: "#85BCFF",
  },
};