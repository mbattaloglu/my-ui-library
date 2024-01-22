import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./modal.component";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    title: "Hi!",
    description: "This is modal",
  },
};

export const Accept: Story = {
  args: {
    variant: "accept",
    title: "Success!",
    description: "We got your payment.",
  },
};

export const Warn: Story = {
  args: {
    variant: "warn",
    title: "Warning!",
    description: "I warn you.",
  },
};

export const Error: Story = {
  args: {
    variant: "danger",
    title: "Error!",
    description: "Systems are down.",
  },
};
