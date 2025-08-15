import type { Meta, StoryObj } from '@storybook/react-vite';
import SearchBar from './index';

const meta: Meta<typeof SearchBar> = {
  title: 'Components/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    placeholder: '이름 또는 태그로 검색',
    value: '',
    onChange: (value) => console.log('Search changed:', value),
    onFilterClick: () => console.log('Filter clicked'),
  },
};