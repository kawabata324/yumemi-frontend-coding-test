import { Meta, StoryObj } from "@storybook/react"

import { CustomTab } from "@/components/presentational/elements/CustomTab"

export default {
  title: "@/components/presentational/elements/CustomTab",
  component: CustomTab,
} satisfies Meta<typeof CustomTab>

type Story = StoryObj<typeof CustomTab>

export const Primary: Story = {
  args: {
    children: "CustomTab",
  },
}
