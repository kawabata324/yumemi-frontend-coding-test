import { FC } from "react"

import { usePopulationTrend } from "@/components/container/usePopulationTrend"
import { Trend } from "@/components/presentational/Trend"

export const PopulationTrend: FC = () => {
  const {
    state: { prefList, prefCodeList, composition, selectedLabel },
    action: { checkPrefecture, changeComposition },
  } = usePopulationTrend()

  return (
    <Trend
      checkedIdList={prefCodeList}
      onChangeCheckedList={checkPrefecture}
      onChangeComposition={changeComposition}
      populationComposition={composition}
      prefList={prefList}
      selectedLabel={selectedLabel}
    />
  )
}
