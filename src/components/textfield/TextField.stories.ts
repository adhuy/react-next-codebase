import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '.';

const meta = {
  title: 'Example/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'label',
    placeholder: 'placeholder',
  },
};

