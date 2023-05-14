import { FC } from "react"

import { useViewModel } from "@/components/container/useViewModel"
import { Trend } from "@/components/presentational/Trend"
export const PopulationTrend: FC = () => {
  const {
    state: { prefList, prefCodeList, composition, selectedLabel },
    action: { checkPrefecture, changeComposition },
  } = useViewModel()
  return (
    <Trend
      changeComposition={changeComposition}
      checkedIdList={prefCodeList}
      onChangeCheckedList={checkPrefecture}
      populationComposition={composition}
      prefList={prefList}
      selectedLabel={selectedLabel}
    />
  )
}
