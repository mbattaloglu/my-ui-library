import type {Meta, StoryObj} from "@storybook/react";
import Button, { ButtonTypes } from "./button.component";

const meta: Meta<typeof Button> = {
  title:"Components/Button",
  component: Button,
  parameters:{
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    title: "Click Me!"
  }
}

export default meta

type Story = StoryObj<typeof meta>;

export const Primary:Story = {
  args:{
    variant: "Primary"
  }
}

export const Accept:Story = {
  args:{
    variant: "Accept"
  }
}

export const Warn:Story = {
  args:{
    variant: "Warn"
  }
}

export const Danger:Story = {
  args:{
    variant: "Primary"
  }
}