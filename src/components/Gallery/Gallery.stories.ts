import type { Meta, StoryObj } from "@storybook/react";
import { Gallery } from "./Gallery";

const meta = {
  title: "Молекулы/Gallery",
  component: Gallery,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Gallery>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Loaded: Story = {
  args: {
    images: ["/src/assets/Item.jpg", "/src/assets/photo.jpg"],
  },
};

export const Loading: Story = {
  args: {
    images: ["", ""],
  },
};

export const Scrolling: Story = {
  args: {
    images: [
      "/src/assets/Item.jpg",
      "/src/assets/photo.jpg",
      "/src/assets/Item.jpg",
      "/src/assets/photo.jpg",
      "/src/assets/Item.jpg",
      "/src/assets/photo.jpg",
      "/src/assets/Item.jpg",
      "/src/assets/photo.jpg",
      "/src/assets/Item.jpg",
      "/src/assets/photo.jpg",
    ],
  },
};
