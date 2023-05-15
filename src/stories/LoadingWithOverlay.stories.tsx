import { Meta, StoryObj } from "@storybook/react"

import { LoadingWithOverlay } from "@/components/presentational/LoadingWithOverlay"

export default {
  title: "@/components/presentational/LoadingWithOverlay",
  component: LoadingWithOverlay,
} satisfies Meta<typeof LoadingWithOverlay>

type Story = StoryObj<typeof LoadingWithOverlay>

export const Primary: Story = {
  args: {},
}
