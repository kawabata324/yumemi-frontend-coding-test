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
      prefList={prefList}
      checkedIdList={prefCodeList}
      onChangeCheckedList={checkPrefecture}
      populationComposition={composition}
      selectedLabel={selectedLabel}
      changeComposition={changeComposition}
    />
  )
}
