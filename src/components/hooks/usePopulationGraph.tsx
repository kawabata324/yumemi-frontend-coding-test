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

const getYears = (elements: PopulationCompositionGraphElements) => {
  return elements.map((el) => {
    return el.data.map((d) => d.year)
  })[0]
}

const getPopulation = (elements: PopulationCompositionGraphElements) => {
  return elements.map((el) => {
    return el.data.map((d) => d.value)
  })[0]
}

export const usePopulationGraph: CustomHook<State, Action> = (elements: PopulationCompositionGraphElements) => {
  const yearArray = getYears(elements)
  const minYear = Math.min(...yearArray)
  const maxYear = Math.max(...yearArray)
  const populationArray = getPopulation(elements)
  const maxPopulation = Math.max(...populationArray)

  const generateRandomColorCode = () => {
    /*
     * INFO:
     * 16777216 = 16^6 = 256^3
     * 0 ~ 16777215 の整数をランダムに生成し、それを16進数に変換する
     */
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
