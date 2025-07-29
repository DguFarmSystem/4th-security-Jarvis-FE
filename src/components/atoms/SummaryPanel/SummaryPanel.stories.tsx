import type { Meta, StoryObj } from "@storybook/react-vite";
import { SummaryPanel } from "./index";

const meta: Meta<typeof SummaryPanel> = {
  title: "Components/SummaryPanel",
  component: SummaryPanel,
};

export default meta;

type Story = StoryObj<typeof SummaryPanel>;

export const SystemStatus: Story = {
  args: {
    mode: "system",
  },
};

export const ResourceSummary: Story = {
  args: {
    mode: "resource",
  },
};