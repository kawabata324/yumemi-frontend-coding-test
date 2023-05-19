import { Meta, StoryObj } from "@storybook/react"

import { Footer } from "@/components/presentational/Footer"

export default {
  title: "@/components/presentational/Footer",
  component: Footer,
} satisfies Meta<typeof Footer>

type Story = StoryObj<typeof Footer>

export const Primary: Story = {
  args: {},
}
