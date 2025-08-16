// components/atoms/SearchControls/SearchControls.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import SearchControls from './index';

const meta: Meta<typeof SearchControls> = {
  title: 'Components/SearchControls',
  component: SearchControls,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchControls>;

export const Default: Story = {
  args: {
    dateLabel: 'Last 30 days',
    onDateClick: () => console.log('Date picker opened'),
    onFilterClick: () => console.log('Filter panel opened'),
  },
};