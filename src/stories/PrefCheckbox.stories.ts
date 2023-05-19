import { expect } from "@storybook/jest"
import { Meta, StoryObj } from "@storybook/react"
import { userEvent, within } from "@storybook/testing-library"
import { selectors } from "playwright-core"

import { PrefCheckbox } from "@/components/presentational/PrefCheckbox"

export default {
  title: "@/components/presentational/PrefCheckbox",
  component: PrefCheckbox,
} satisfies Meta<typeof PrefCheckbox>

type Story = StoryObj<typeof PrefCheckbox>

export const UnChecked: Story = {
  args: {
    prefName: "北海道",
    prefCode: 1,
    checkedIdList: [20],
  },
}

export const Checked: Story = {
  args: {
    prefName: "青森県",
    prefCode: 2,
    checkedIdList: [2, 3],
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    const checkboxInput = canvas.getByLabelText("青森県", {
      selector: "input",
    })
    const checkBoxLabel = canvas.getByText("青森県")

    await userEvent.hover(checkboxInput)
    await userEvent.hover(checkBoxLabel)
    expect(checkboxInput).toHaveStyle("cursor: pointer")
    expect(checkBoxLabel).toHaveStyle("cursor: pointer")
  },
}
