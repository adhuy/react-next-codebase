import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '.';

const meta = {
  title: 'Example/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'card title',
    description: 'lorem ipsum dolor sit amet',
  },
};

export const TopImage: Story = {
  args: {
    title: 'card title',
    description: 'lorem ipsum dolor sit amet',
    isImage: true,
    imagePosition: 'top',
  },
};

export const BottomImage: Story = {
  args: {
    title: 'card title',
    description: 'lorem ipsum dolor sit amet',
    isImage: true,
    imagePosition: 'bottom',
  },
};

export const LeftImage: Story = {
  args: {
    title: 'card title',
    description: 'lorem ipsum dolor sit amet',
    isImage: true,
    imagePosition: 'left',
  },
};

export const RightImage: Story = {
  args: {
    title: 'card title',
    description: 'lorem ipsum dolor sit amet',
    isImage: true,
    imagePosition: 'right',
  },
};
