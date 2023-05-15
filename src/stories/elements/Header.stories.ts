import { Meta, StoryObj } from "@storybook/react"

import { Header } from "@/components/presentational/elements/Header"

export default {
  title: "@/components/presentational/elements/Header",
  component: Header,
} satisfies Meta<typeof Header>

type Story = StoryObj<typeof Header>

export const Primary: Story = {
  args: {},
}
