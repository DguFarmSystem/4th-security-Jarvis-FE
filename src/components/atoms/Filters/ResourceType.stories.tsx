import type { Meta, StoryObj } from "@storybook/react-vite";
import { ResourceType, type ResourceOption } from "./index";

const meta: Meta<typeof ResourceType> = {
  title: "Components/Filters/ResourceType",
  component: ResourceType,
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj<typeof ResourceType>;

export const Default: Story = {
  args: {
    title: "Resource Type",
    options: [
      { label: "서버", checked: true },
      { label: "데이터베이스" },
      { label: "애플리케이션", checked: true },
    ] as ResourceOption[],
  },
};