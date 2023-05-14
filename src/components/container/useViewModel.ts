import { CustomHook } from "@/types/customHook"
import { PrefCode, PrefCodeList, PrefList } from "@/types/pref"
import { useState } from "react"
import { usePrefectures } from "@/components/hooks/api/usePrefectures"
import { usePopulationComposition } from "@/components/hooks/api/usePopulationComposition"
import { PopulationCompositionGraphElements, PopulationCompositionDataList } from "@/types/populationComposition"
import {
  ALL_POPULATION,
  POPULATION_BY_OLDER,
  POPULATION_BY_WORKING_AGE,
  POPULATION_BY_YOUNG,
  PopulationCompositionType,
} from "@/constants/populationCompositionType"

type State = {
  prefList: PrefList
  prefCodeList: PrefCodeList
  composition: PopulationCompositionGraphElements
  selectedLabel: PopulationCompositionType
}

type Action = {
  checkPrefecture: (prefCode: PrefCode) => void
  changeComposition: (label: PopulationCompositionType) => void
}

export const useViewModel: CustomHook<State, Action> = ({
  initSelectedLabel,
  initTotalPopulations,
  initYoungPopulations,
  initWorkingPopulations,
  initOrderPopulations,
  initPrefCodeList,
}) => {
  const [prefCodeList, setPrefCodeList] = useState<PrefCodeList>(initPrefCodeList)
  const [selectedLabel, setSelectedLabel] = useState<PopulationCompositionType>(initSelectedLabel)
  const [totalPopulations, setTotalPopulations] = useState<PopulationCompositionGraphElements>(initTotalPopulations)
  const [youngPopulations, setYoungPopulations] = useState<PopulationCompositionGraphElements>(initYoungPopulations)
  const [workingPopulations, setWorkingPopulations] =
    useState<PopulationCompositionGraphElements>(initWorkingPopulations)
  const [orderPopulations, setOrderPopulations] = useState<PopulationCompositionGraphElements>(initOrderPopulations)
  const {
    state: { prefList },
  } = usePrefectures()
  const {
    action: { fetchPopulationComposition },
  } = usePopulationComposition()

  const checkPrefecture = async (code: PrefCode) => {
    if (prefCodeList.includes(code)) {
      deletePref(code)
      return
    }

    const data = await fetchPopulationComposition(code)

    if (data.totalPopulation.length === 0) return
    const totalPopulation = setPrefNameToPopulation(code, data.totalPopulation)
    const populationByYounger = setPrefNameToPopulation(code, data.populationByYounger)
    const populationByWorking = setPrefNameToPopulation(code, data.populationByWorking)
    const populationByOlder = setPrefNameToPopulation(code, data.populationByOlder)

    setPrefCodeList((pref) => [...pref, code])
    setTotalPopulations((prev) => [...prev, totalPopulation])
    setWorkingPopulations((prev) => [...prev, populationByWorking])
    setYoungPopulations((prev) => [...prev, populationByYounger])
    setOrderPopulations((prev) => [...prev, populationByOlder])
  }

  const setPrefNameToPopulation = (prefCode: PrefCode, population: PopulationCompositionDataList) => {
    const prefName = prefList.find((pref) => pref.prefCode === prefCode)!.prefName
    return { label: prefName, data: population }
  }

  const deletePref = (code: PrefCode) => {
    setPrefCodeList((prev) => prev.filter((pref) => pref !== code))
    setTotalPopulations((prev) =>
      prev.filter((pref) => pref.label !== prefList.find((pref) => pref.prefCode === code)!.prefName)
    )
    setYoungPopulations((prev) =>
      prev.filter((pref) => pref.label !== prefList.find((pref) => pref.prefCode === code)!.prefName)
    )
    setWorkingPopulations((prev) =>
      prev.filter((pref) => pref.label !== prefList.find((pref) => pref.prefCode === code)!.prefName)
    )
    setOrderPopulations((prev) =>
      prev.filter((pref) => pref.label !== prefList.find((pref) => pref.prefCode === code)!.prefName)
    )
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
      default:
        setSelectedLabel(ALL_POPULATION)
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
        return orderPopulations
      default:
        return totalPopulations
    }
  }

  return {
    state: { prefList, prefCodeList, composition: composition(), selectedLabel },
    action: {
      checkPrefecture,
      changeComposition,
    },
  }
}
