import { Meta, StoryObj } from "@storybook/react"

import { PrefCheckbox } from "@/components/presentational/PrefCheckbox"

export default {
  title: "@/components/presentational/PrefCheckbox",
  component: PrefCheckbox,
} satisfies Meta<typeof PrefCheckbox>

type Story = StoryObj<typeof PrefCheckbox>

export const Primary: Story = {
  args: {
    prefName: "北海道",
    prefCode: 1,
  },
}
