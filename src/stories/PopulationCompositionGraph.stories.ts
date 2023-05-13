import { Meta, StoryObj } from "@storybook/react"

import { PopulationCompositionGraph } from "@/components/presentational/PopulationCompositionGraph"
import { totalPopulationTestData } from "@/test/fixtures/totalPopulationTestData"

export default {
  title: "@/components/presentational/PopulationCompositionGraph",
  component: PopulationCompositionGraph,
} satisfies Meta<typeof PopulationCompositionGraph>

type Story = StoryObj<typeof PopulationCompositionGraph>

export const Primary: Story = {
  args: {
    elements: totalPopulationTestData,
  },
}

export const Empty: Story = {
  args: {
    elements: [],
  },
}
