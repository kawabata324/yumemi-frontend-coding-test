import { Meta, StoryObj } from "@storybook/react"

import { PopulationCompositionGraph } from "@/components/presentational/PopulationCompositionGraph"
import { totalPopulationFixture } from "@/test/fixtures/populationComposition/totalPopulationFixture"

export default {
  title: "@/components/presentational/PopulationCompositionGraph",
  component: PopulationCompositionGraph,
} satisfies Meta<typeof PopulationCompositionGraph>

type Story = StoryObj<typeof PopulationCompositionGraph>

export const Primary: Story = {
  args: {
    elements: totalPopulationFixture,
  },
}
