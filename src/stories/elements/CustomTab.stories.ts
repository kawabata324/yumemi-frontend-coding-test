import { Meta, StoryObj } from "@storybook/react"

import { CustomTab } from "@/components/presentational/CustomTab"

export default {
  title: "@/components/presentational/CustomTab",
  component: CustomTab,
} satisfies Meta<typeof CustomTab>

type Story = StoryObj<typeof CustomTab>

export const Primary: Story = {
  args: {
    children: "CustomTab",
  },
}
