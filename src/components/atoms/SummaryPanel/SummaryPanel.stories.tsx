import type { Meta, StoryObj } from "@storybook/react-vite";
import { ResourceSummary } from ".";

const meta: Meta<typeof ResourceSummary> = {
  title: "Components/ResourceSummary",
  component: ResourceSummary,
};

export default meta;

type Story = StoryObj<typeof ResourceSummary>;

export const Default: Story = {
  args: {
    nodeCount: 3,
    dbCount: 2,
    appCount: 5,
  },
};