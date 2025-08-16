import { useState } from 'react';
import type { Meta, StoryObj } from "@storybook/react-vite";
import LoginModal from './index';

const meta: Meta<typeof LoginModal> = {
  title: 'Components/Modal/LoginModal',
  component: LoginModal,
};

export default meta;

type Story = StoryObj<typeof LoginModal>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
      <>
        <button onClick={() => setIsOpen(true)}>로그인 모달 열기</button>
        <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  },
};