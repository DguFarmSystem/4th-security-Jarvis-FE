import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import Button from './index';
import type { ButtonVariant } from './index';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    variant: 'login',
    children: 'Button',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: [
        'login',
        'auth',
        'auth-cancel',
        'toggle',
        'connect',
        'updateUser',
        'createRole',
        'addToken',
        'save',
      ] as ButtonVariant[],
    },
    active: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    onClick: { action: 'clicked' },
  },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

const baseArgs: Story['args'] = {
  children: '344x100', // 공통 텍스트
  // onClick: () => , 함수
};

export const Login: Story = {
  args: {
    ...baseArgs,
    variant: 'login',
    children: 'Login',
  },
};

export const Auth: Story = {
  args: {
    ...baseArgs,
    variant: 'auth',
    children: '인증',
  },
};

export const AuthCancel: Story = {
  args: {
    ...baseArgs,
    variant: 'auth-cancel',
    children: '취소',
  },
};

export const Connect: Story = {
  args: {
    ...baseArgs,
    variant: 'connect',
    children: '연결',
  },
};

export const AddUser: Story = {
  args: {
    ...baseArgs,
    variant: 'updateUser',
    children: '+ Update User',
  },
};

export const CreateRole: Story = {
  args: {
    ...baseArgs,
    variant: 'createRole',
    children: '+ Create Role',
  },
};

export const AddToken: Story = {
  args: {
    ...baseArgs,
    variant: 'addToken',
    children: '+ Add Token',
  },
};

export const Save: Story = {
  args: {
    ...baseArgs,
    variant: 'save',
    children: 'Save',
  },
};

export const Toggle: Story = {
  args: {
    ...baseArgs,
    variant: 'toggle',
  },
  render: function Render(args) {
    const [isActive, setIsActive] = useState(false);

    return (
        <Button
            {...args}
            active={isActive}
            onClick={(e) => {
              setIsActive(!isActive);
              args.onClick?.(e);
            }}
        >
          {isActive ? '비활성' : '활성'}
        </Button>
    );
  },
};

 export const View: Story = {
  args: {
    ...baseArgs,
    variant: 'view',
    children: 'View',
  },
};