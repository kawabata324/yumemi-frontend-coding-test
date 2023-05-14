import { FC } from "react"
import { Trend } from "@/components/presentational/Trend"
import { useViewModel } from "@/components/container/useViewModel"
import { ALL_POPULATION } from "@/constants/populationCompositionType"

export const INITIAL_STATE = {
  initSelectedLabel: ALL_POPULATION,
  initTotalPopulations: [],
  initYoungPopulations: [],
  initWorkingPopulations: [],
  initOlderPopulations: [],
  initPrefCodeList: [],
}
export const PopulationTrend: FC = () => {
  const {
    state: { prefList, prefCodeList, composition, selectedLabel },
    action: { checkPrefecture, changeComposition },
  } = useViewModel(INITIAL_STATE)
  return (
    <Trend
      prefList={prefList}
      checkedIdList={prefCodeList}
      onChangeCheckedList={checkPrefecture}
      populationComposition={composition}
      selectedLabel={selectedLabel}
      changeComposition={changeComposition}
    />
  )
}
