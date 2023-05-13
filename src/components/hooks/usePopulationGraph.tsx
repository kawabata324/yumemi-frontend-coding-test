import { CustomHook } from "@/types/customHook"
import { PopulationCompositionGraphElements } from "@/types/populationComposition"

type State = {
  minYear: number
  maxYear: number
  maxPopulation: number
}

type Action = {
  generateRandomColorCode: () => string
}

export const usePopulationGraph: CustomHook<State, Action> = (elements: PopulationCompositionGraphElements) => {
  const minYear = Math.min(...elements.map((el) => el.data[0].year))
  const maxYear = Math.min(...elements.map((el) => el.data[0].year))
  const maxPopulation = Math.min(...elements.map((el) => el.data[0].value))

  const generateRandomColorCode = () => {
    const randomInt = Math.floor(Math.random() * 16777216)
    return "#" + randomInt.toString(16).padStart(6, "0")
  }

  return {
    state: {
      minYear,
      maxYear,
      maxPopulation,
    },
    action: {
      generateRandomColorCode,
    },
  }
}
