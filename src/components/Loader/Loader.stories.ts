import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';

const meta = {
  title: 'Атомы/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
    parameters: {
        docs: {
            description: {
                story: "Большой лоудер"
            }
        }
    },
  args: {
    variant: "large"    
  },
};

export const Small: Story = {
    parameters: {
        docs: {
            description: {
                story: "Маленький лоудер"
            }
        }
    },
    args: {
        variant: "small"    
    },
};

