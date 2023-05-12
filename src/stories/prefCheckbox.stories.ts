import { Meta, StoryObj } from "@storybook/react"

import { PrefCheckbox } from "@/components/presentational/PrefCheckbox"

export default {
  title: "@/components/presentational/PrefCheckbox",
  component: PrefCheckbox,
} satisfies Meta<typeof PrefCheckbox>

type Story = StoryObj<typeof PrefCheckbox>

export const UnChecked: Story = {
  args: {
    prefName: "北海道",
    prefCode: 1,
    checked: false,
  },
}

export const Checked: Story = {
  args: {
    prefName: "青森県",
    prefCode: 2,
    checked: true,
  },
}
