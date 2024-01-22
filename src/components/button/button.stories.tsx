import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button } from "./button.component";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    title: "Click Me!",
    onClick: action("button-click"),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Primal Button Color
 */
export const Primary: Story = {};

/**
 * Green-colored (represents positivity) button
 */
export const Accept: Story = {
  args: {
    variant: "accept",
  },
};

/**
 * Yellow-colored (represents warning, neutrall) button
 */
export const Warn: Story = {
  args: {
    variant: "warn",
  },
};

/**
 * Red-colored (represents negativity) button
 */
export const Danger: Story = {
  args: {
    variant: "danger",
  },
};
