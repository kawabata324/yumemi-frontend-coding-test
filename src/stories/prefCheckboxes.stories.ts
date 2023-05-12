import { Meta, StoryObj } from "@storybook/react"

import { PrefCheckboxes } from "@/components/presentational/prefCheckboxes/PrefCheckboxes"
import { prefListTestData } from "@/test/fixtures/prefListTestData"

export default {
  title: "@/components/presentational/PrefCheckboxes",
  component: PrefCheckboxes,
} satisfies Meta<typeof PrefCheckboxes>

type Story = StoryObj<typeof PrefCheckboxes>

export const Primary: Story = {
  args: {
    checkedIdList: [12, 20, 3, 4, 5],
    prefList: prefListTestData,
  },
}