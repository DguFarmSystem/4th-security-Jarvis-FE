// components/atoms/FilterPanel/FilterPanel.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import FilterPanel from './index';

const meta: Meta<typeof FilterPanel> = {
  title: 'Components/FilterPanel',
  component: FilterPanel,
  tags: ['autodocs'],
  argTypes: {
    onDateChange: { action: 'onDateChange' },
    onKeywordChange: { action: 'onKeywordChange' },
    onEventTypesChange: { action: 'onEventTypesChange' },
  },
}; // ← 여기 '>' 빼고 세미콜론으로 마무리

export default meta;
type Story = StoryObj<typeof FilterPanel>;

export const Default: Story = {
  args: {
    dateRange: '2024-01-01 - 2024-01-31',
    keyword: '',
    selectedEventTypes: [], // 빈 배열 = All
    eventTypeOptions: ['ssh.login', 'ssh.logout', 'db.query', 'file.download'],
  },
};

export const WithSelected: Story = {
  args: {
    dateRange: '2024-05-01 - 2024-05-31',
    keyword: 'root',
    selectedEventTypes: ['ssh.login', 'db.query'],
    eventTypeOptions: ['ssh.login', 'ssh.logout', 'db.query', 'file.download'],
  },
};

export const NoOptions: Story = {
  args: {
    dateRange: '',
    keyword: '',
    selectedEventTypes: [],
    eventTypeOptions: [], // 옵션이 없을 때 UI 확인용
  },
};