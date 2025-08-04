import type { Meta, StoryObj } from "@storybook/react-vite";
import { ConnectModal } from "./index";
const meta: Meta<typeof ConnectModal> = {
  title: "Components/Modal/ConnectModal",
  component: ConnectModal,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ConnectModal>;

export const Default: Story = {};