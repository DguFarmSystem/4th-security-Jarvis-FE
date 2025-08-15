import type { Meta, StoryObj } from '@storybook/react-vite';
import ResourceTable from './index';

const meta: Meta<typeof ResourceTable> = {
  title: 'Components/ResourceTable',
  component: ResourceTable,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ResourceTable>;

// 공통 스타일 래퍼 생성 함수
const withWrapper = (width: number, height: number) => (StoryFn: any) => (
  <div
    style={{
      width,
      height,
      flexShrink: 0,
      borderRadius: 15,
      border: '1px solid #737373',
      opacity: 0.5,
      background: '#fff',
      boxSizing: 'border-box',
      padding: 12,
    }}
  >
    <StoryFn />
  </div>
);

const onConnect = (name: string) => () => {
  console.log(`${name} 연결 클릭`);
};

export const Basic: Story = {
  args: {
    columns: ['Name', 'Type'],
    resources: [
      { name: 'Server 1', type: 'Server' },
      { name: 'Server 2', type: 'Server' },
      { name: 'Database A', type: 'Database' },
    ],
    showLoading: true,
  },
  decorators: [withWrapper(921, 287)],
};

export const WithActions: Story = {
  args: {
    columns: ['이름', '종류', '태그'],
    resources: [
      { name: 'Server A', type: '서버', actionLabel: '연결', onActionClick: onConnect('Server A') },
      { name: 'Database B', type: '데이터베이스', actionLabel: '연결', onActionClick: onConnect('Database B') },
      { name: 'App Server X', type: '서버', actionLabel: '연결', onActionClick: onConnect('App Server X') },
      { name: 'Web Server Y', type: '서버', actionLabel: '연결', onActionClick: onConnect('Web Server Y') },
      { name: 'Server B', type: '서버', actionLabel: '연결', onActionClick: onConnect('Server B') },
      { name: 'Main DB', type: '데이터베이스', actionLabel: '연결', onActionClick: onConnect('Main DB') },
      { name: 'Server C', type: '서버', actionLabel: '연결', onActionClick: onConnect('Server C') },
    ],
    showLoading: true,
  },
  decorators: [withWrapper(921, 595)],
};