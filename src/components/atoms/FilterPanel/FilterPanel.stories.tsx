// components/atoms/FilterPanel/FilterPanel.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import FilterPanel from './index';

const meta: Meta<typeof FilterPanel> = {
  title: 'Components/FilterPanel',
  component: FilterPanel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FilterPanel>;

export const Default: Story = {
  args: {
    dateRange: '01/01/2024 - 01/31/2024',
    keyword: '',
    eventType: 'All',
    onDateChange: (value) => console.log('Date changed:', value),
    onKeywordChange: (value) => console.log('Keyword changed:', value),
    onEventTypeChange: (value) => console.log('Event type changed:', value),
  },
};