import { useState } from 'react';
import type { Meta, StoryObj } from "@storybook/react-vite";
import LoginModal from './index';

const meta: Meta<typeof LoginModal> = {
  title: 'Components/Modal/LoginModal',
  component: LoginModal,
};

export default meta;

type Story = StoryObj<typeof LoginModal>;

const LoginModalStoryComponent = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleLoginSuccess = (token: string) => {
    alert(`로그인 성공! accessToken: ${token}`);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>로그인 모달 열기</button>
      <LoginModal isOpen={isOpen} onSuccess={handleLoginSuccess}/>
    </>
  );
};

export const Default: Story = {
  render: () => <LoginModalStoryComponent />,
};