import type { StorybookConfig } from "@storybook/nextjs"

const path = require("path")

const config: StorybookConfig = {
  stories: ["../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    {
      name: "@storybook/addon-styling",
      options: {
        sass: {
          implementation: require("sass"),
        },
      },
    },
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  webpackFinal(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
    }
    return config
  },
}
export default config
