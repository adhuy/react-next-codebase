import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '.';

const meta = {
  title: 'Example/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'left',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Project Name',
    list: [
      { label: 'Home', icon: 'HomeIcon' },
      { label: 'About', icon: 'UserSquare2' },
      { label: 'Contact', icon: 'Contact2' },
    ]
  },
};
