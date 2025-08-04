import { Tab } from "./index";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof Tab> = {
  title: "Components/Tab",
  component: Tab,
};
export default meta;

type Story = StoryObj<typeof Tab>;


export const Default: Story = {
  args: {
  },
};