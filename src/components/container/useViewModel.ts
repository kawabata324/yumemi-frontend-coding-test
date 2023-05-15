import { useContext, useState } from "react"

import { usePopulationComposition } from "@/components/hooks/api/usePopulationComposition"
import { usePrefectures } from "@/components/hooks/api/usePrefectures"
import { LoadingContext } from "@/components/hooks/useLoading"
import {
  TOTAL_POPULATION,
  POPULATION_BY_OLDER,
  POPULATION_BY_WORKING,
  POPULATION_BY_YOUNG,
  PopulationCompositionType,
} from "@/constants/populationCompositionType"
import { CustomHook } from "@/types/customHook"
import {
  PopulationCompositionGraphElements,
  PopulationCompositionDataList,
  PopulationCompositionGraphElement,
} from "@/types/populationComposition"
import { PrefCode, PrefCodeList, PrefList, PrefName } from "@/types/pref"

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
  checkPrefecture: (prefCode: PrefCode, prefName: PrefName) => void
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
    initSelectedLabel: TOTAL_POPULATION,
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
  const { setIsLoading } = useContext(LoadingContext)

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

  const checkPrefecture = async (code: PrefCode, name: PrefName) => {
    setIsLoading(true)
    if (prefCodeList.includes(code)) {
      deletePref(code)
      setIsLoading(false)
      return
    }

    const data = await fetchPopulationComposition(code)

    if (data?.totalPopulation.length === 0 || !data) {
      setIsLoading(false)
      return
    }
    const totalPopulation = convertGraphElement(code, name, data.totalPopulation)
    const populationByYounger = convertGraphElement(code, name, data.populationByYounger)
    const populationByWorking = convertGraphElement(code, name, data.populationByWorking)
    const populationByOlder = convertGraphElement(code, name, data.populationByOlder)

    setPrefCodeList((pref) => [...pref, code])
    setPopulationCompositions((prev) => [
      [...prev[0], totalPopulation],
      [...prev[1], populationByYounger],
      [...prev[2], populationByWorking],
      [...prev[3], populationByOlder],
    ])
    setIsLoading(false)
  }

  const convertGraphElement = (
    prefCode: PrefCode,
    prefName: PrefName,
    population: PopulationCompositionDataList
  ): PopulationCompositionGraphElement => {
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
      case TOTAL_POPULATION:
        setSelectedLabel(label)
        break
      case POPULATION_BY_YOUNG:
        setSelectedLabel(label)
        break
      case POPULATION_BY_WORKING:
        setSelectedLabel(label)
        break
      case POPULATION_BY_OLDER:
        setSelectedLabel(label)
        break
    }
  }

  const composition = () => {
    switch (selectedLabel) {
      case TOTAL_POPULATION:
        return totalPopulations
      case POPULATION_BY_YOUNG:
        return youngPopulations
      case POPULATION_BY_WORKING:
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
