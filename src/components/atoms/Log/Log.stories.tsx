import type { Meta, StoryObj } from "@storybook/react-vite";
import { Log } from "./index";

const meta: Meta<typeof Log> = {
  title: "Components/Log",
  component: Log,
};

export default meta;

type Story = StoryObj<typeof Log>;

export const AuditLog: Story = {
  args: {
    mode: "audits",
  },
};

export const SessionLog: Story = {
  args: {
    mode: "sessions",
  },
};