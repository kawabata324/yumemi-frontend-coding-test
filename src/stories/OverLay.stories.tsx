import { Meta, StoryObj } from "@storybook/react"
import { BallTriangle } from "react-loader-spinner"

import { Overlay } from "@/components/presentational/Overlay"

export default {
  title: "@/components/presentational/Overlay",
  component: Overlay,
} satisfies Meta<typeof Overlay>

type Story = StoryObj<typeof Overlay>

export const Primary: Story = {
  args: {
    children: (
      <BallTriangle
        ariaLabel="ball-triangle-loading"
        color="#4fa94d"
        height={200}
        radius={5}
        visible={true}
        width={200}
      />
    ),
  },
}
