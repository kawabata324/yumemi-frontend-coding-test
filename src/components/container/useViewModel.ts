import { useState } from "react"

import { usePopulationComposition } from "@/components/hooks/api/usePopulationComposition"
import { usePrefectures } from "@/components/hooks/api/usePrefectures"
import {
  ALL_POPULATION,
  POPULATION_BY_OLDER,
  POPULATION_BY_WORKING_AGE,
  POPULATION_BY_YOUNG,
  PopulationCompositionType,
} from "@/constants/populationCompositionType"
import { CustomHook } from "@/types/customHook"
import {
  PopulationCompositionGraphElements,
  PopulationCompositionDataList,
  PopulationCompositionGraphElement,
} from "@/types/populationComposition"
import { PrefCode, PrefCodeList, PrefList } from "@/types/pref"

type State = {
  prefList: PrefList
  prefCodeList: PrefCodeList
  composition: PopulationCompositionGraphElements
  selectedLabel: PopulationCompositionType
  totalPopulations: PopulationCompositionGraphElements
  youngPopulations: PopulationCompositionGraphElements
  workingPopulations: PopulationCompositionGraphElements
  olderPopulations: PopulationCompositionGraphElements
}

type Action = {
  checkPrefecture: (prefCode: PrefCode) => void
  changeComposition: (label: PopulationCompositionType) => void
}

// INFO: テストのために外部から初期値を渡せるようにしている
export const useViewModel: CustomHook<State, Action> = (
  {
    initSelectedLabel,
    initTotalPopulations,
    initYoungPopulations,
    initWorkingPopulations,
    initOlderPopulations,
    initPrefCodeList,
  } = {
    initSelectedLabel: ALL_POPULATION,
    initTotalPopulations: [],
    initYoungPopulations: [],
    initWorkingPopulations: [],
    initOlderPopulations: [],
    initPrefCodeList: [],
  }
) => {
  const {
    state: { prefList },
  } = usePrefectures()
  const {
    action: { fetchPopulationComposition },
  } = usePopulationComposition()

  const [prefCodeList, setPrefCodeList] = useState<PrefCodeList>(initPrefCodeList)
  const [selectedLabel, setSelectedLabel] = useState<PopulationCompositionType>(initSelectedLabel)
  const [populationCompositions, setPopulationCompositions] = useState<Array<PopulationCompositionGraphElements>>([
    initTotalPopulations,
    initYoungPopulations,
    initWorkingPopulations,
    initOlderPopulations,
  ])

  const totalPopulations = populationCompositions[0]
  const youngPopulations = populationCompositions[1]
  const workingPopulations = populationCompositions[2]
  const olderPopulations = populationCompositions[3]

  const checkPrefecture = async (code: PrefCode) => {
    if (prefCodeList.includes(code)) {
      deletePref(code)
      return
    }

    const data = await fetchPopulationComposition(code)

    if (data?.totalPopulation.length === 0 || !data) return
    const totalPopulation = convertGraphElement(code, data.totalPopulation)
    const populationByYounger = convertGraphElement(code, data.populationByYounger)
    const populationByWorking = convertGraphElement(code, data.populationByWorking)
    const populationByOlder = convertGraphElement(code, data.populationByOlder)

    setPrefCodeList((pref) => [...pref, code])
    setPopulationCompositions((prev) => [
      [...prev[0], totalPopulation],
      [...prev[1], populationByYounger],
      [...prev[2], populationByWorking],
      [...prev[3], populationByOlder],
    ])
  }

  const convertGraphElement = (
    prefCode: PrefCode,
    population: PopulationCompositionDataList
  ): PopulationCompositionGraphElement => {
    const prefName = prefList.find((pref) => pref.prefCode === prefCode)!.prefName
    return { code: prefCode, label: prefName, data: population }
  }

  const deletePref = (code: PrefCode) => {
    setPrefCodeList((prev) => prev.filter((pref) => pref !== code))
    setPopulationCompositions((prev) => [
      prev[0].filter((pref) => pref.code !== code),
      prev[1].filter((pref) => pref.code !== code),
      prev[2].filter((pref) => pref.code !== code),
      prev[3].filter((pref) => pref.code !== code),
    ])
  }

  const changeComposition = (label: PopulationCompositionType) => {
    switch (label) {
      case ALL_POPULATION:
        setSelectedLabel(label)
        break
      case POPULATION_BY_YOUNG:
        setSelectedLabel(label)
        break
      case POPULATION_BY_WORKING_AGE:
        setSelectedLabel(label)
        break
      case POPULATION_BY_OLDER:
        setSelectedLabel(label)
        break
    }
  }

  const composition = () => {
    switch (selectedLabel) {
      case ALL_POPULATION:
        return totalPopulations
      case POPULATION_BY_YOUNG:
        return youngPopulations
      case POPULATION_BY_WORKING_AGE:
        return workingPopulations
      case POPULATION_BY_OLDER:
        return olderPopulations
      default:
        return totalPopulations
    }
  }

  return {
    state: {
      prefList,
      prefCodeList,
      composition: composition(),
      selectedLabel,
      totalPopulations,
      youngPopulations,
      workingPopulations,
      olderPopulations,
    },
    action: {
      checkPrefecture,
      changeComposition,
    },
  }
}
