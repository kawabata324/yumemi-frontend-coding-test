import { CustomHook } from "@/types/customHook"
import { PrefCode, PrefCodeList, PrefList } from "@/types/pref"
import { useState } from "react"
import { usePrefectures } from "@/components/hooks/api/usePrefectures"
import { usePopulationComposition } from "@/components/hooks/api/usePopulationComposition"
import { PopulationCompositionGraphElements, PopulationCompositionDataList } from "@/types/populationComposition"

type State = {
  prefList: PrefList
  prefCodeList: PrefCodeList
  compositions: PopulationCompositionGraphElements
}

type Action = {
  checkPrefecture: (prefCode: PrefCode) => void
}

export const useViewModel: CustomHook<State, Action> = () => {
  const [prefCodeList, setPrefCodeList] = useState<PrefCodeList>([])
  const [totalPopulations, setTotalPopulations] = useState<PopulationCompositionGraphElements>([])
  const [youngPopulations, setYoungPopulations] = useState<PopulationCompositionGraphElements>([])
  const [workingPopulations, setWorkingPopulations] = useState<PopulationCompositionGraphElements>([])
  const [orderPopulations, setOrderPopulations] = useState<PopulationCompositionGraphElements>([])

  const {
    state: { prefList },
  } = usePrefectures()
  const {
    action: { fetchPopulationComposition },
  } = usePopulationComposition()

  const checkPrefecture = async (code: PrefCode) => {
    if (prefCodeList.includes(code)) {
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
      return
    }

    setPrefCodeList((pref) => [...pref, code])
    const data = await fetchPopulationComposition(code)

    if (data.totalPopulation.length === 0) return
    const totalPopulation = setPrefNameToPopulation(code, data.totalPopulation)
    const populationByYounger = setPrefNameToPopulation(code, data.populationByYounger)
    const populationByWorking = setPrefNameToPopulation(code, data.populationByWorking)
    const populationByOlder = setPrefNameToPopulation(code, data.populationByOlder)

    setTotalPopulations((prev) => [...prev, totalPopulation])
    setWorkingPopulations((prev) => [...prev, populationByWorking])
    setYoungPopulations((prev) => [...prev, populationByYounger])
    setOrderPopulations((prev) => [...prev, populationByOlder])
  }

  const setPrefNameToPopulation = (prefCode: PrefCode, population: PopulationCompositionDataList) => {
    const prefName = prefList.find((pref) => pref.prefCode === prefCode)!.prefName
    return { label: prefName, data: population }
  }

  return {
    state: { prefList, prefCodeList, compositions: totalPopulations },
    action: {
      checkPrefecture,
    },
  }
}
