import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';
import { PlusIcon18, PlusIcon30 } from '../Icons/Icons';

const meta = {
  title: 'Атомы/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
    parameters: {
        docs: {
            description: {
                story: "Большая кнопка"
            }
        }
    },
  args: {
    content: PlusIcon30,
    width: 70,
    height: 62,    
  },
};

export const Small: Story = {
    parameters: {
        docs: {
            description: {
                story: "Маленькая кнопка"
            }
        }
    },
    args: {
        content: PlusIcon18,
        width: 50,
        height: 50,    
    },
};

export const Disable: Story = {
    parameters: {
        docs: {
            description: {
                story: "Кнопка не доступна"
            }
        }
    },
  args: {
    content: PlusIcon30,
    width: 70,
    height: 62,
    disable: true,
  },
};


