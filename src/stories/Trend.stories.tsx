import { Meta, StoryObj } from "@storybook/react"

import { Trend } from "@/components/presentational/Trend"
import { prefListFixture } from "@/test/fixtures/prefListFixture"
import { totalPopulationFixture } from "@/test/fixtures/populationComposition/totalPopulationFixture"

export default {
  title: "@/components/presentational/Trend",
  component: Trend,
} satisfies Meta<typeof Trend>

type Story = StoryObj<typeof Trend>

export const Primary: Story = {
  args: {
    prefList: prefListFixture,
    checkedIdList: [1],
    populationComposition: totalPopulationFixture,
    selectedLabel: "総人口",
  },
}

export const NoData: Story = {
  args: {
    prefList: prefListFixture,
    checkedIdList: [1],
    populationComposition: [],
    selectedLabel: "総人口",
  },
}
