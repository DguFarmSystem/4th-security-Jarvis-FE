import type { Meta, StoryObj } from "@storybook/react-vite";
import { Log } from "./index";

const meta: Meta<typeof Log> = {
  title: "Components/Log",
  component: Log,
};

export default meta;

type Story = StoryObj<typeof Log>;

export const Audits: Story = {
  args: {
    mode: "audits",
    data: [
      { time: "2025-08-16 10:30", user: "yunho_choi", event: "login" },
      { time: "2025-08-16 10:32", user: "yunho_choi", event: "session.start" },
      { time: "2025-08-16 11:00", user: "bot-jarvis-bot", event: "access" },
    ],
  },
};

export const Sessions: Story = {
  args: {
    mode: "sessions",
    data: [
      { user: "yunho_choi", server: "localhost", duration: "00:00:10" },
      { user: "comet", server: "test-server", duration: "00:00:06" },
      { user: "jarvis-bot", server: "test-server", duration: "13:45:12" },
    ],
  },
};

export const Activities: Story = {
  args: {
    mode: "activities",
    data: [
      { time: "2025-08-16 11:30", event: "Login" },
      { time: "2025-08-16 12:45", event: "Session Start" },
    ],
  },
};