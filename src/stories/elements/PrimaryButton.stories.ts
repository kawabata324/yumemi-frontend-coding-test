import { Meta, StoryObj } from "@storybook/react"

import { PrimaryButton } from "@/components/presentational/PrimaryButton"

export default {
  title: "@/components/presentational/PrimaryButton",
  component: PrimaryButton,
} satisfies Meta<typeof PrimaryButton>

type Story = StoryObj<typeof PrimaryButton>

export const Primary: Story = {
  args: {
    label: "ボタン",
    selected: false,
  },
}

export const Selected: Story = {
  args: {
    label: "選択中",
    selected: true,
  },
}
