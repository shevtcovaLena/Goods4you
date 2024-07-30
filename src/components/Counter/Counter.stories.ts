import type { Meta, StoryObj } from "@storybook/react";
import { fn } from '@storybook/test';
import { Counter } from "./Counter";

const meta = {
  title: "Молекулы/Counter",
  component: Counter,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onPlus: fn(), onMinus: fn() },
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    count: 3,
    variation: "large",
  },
};

export const Small: Story = {
  args: {
    count: 3,
  },
};

export const EmptySmall: Story = {
  args: {
    count: 0,
  },
};

export const EmptyLarge: Story = {
  args: {
    count: 0,
    variation: "large",
  },
};

export const OnePosition: Story = {
  args: {
    count: 1,
    variation: "large",
  },
};

export const ManyPosition: Story = {
  args: {
    count: 5,
    variation: "large",
  },
};
