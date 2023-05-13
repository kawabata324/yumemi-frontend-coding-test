import { FC } from "react"
import { Trend } from "@/components/presentational/Trend"
import { useViewModel } from "@/components/container/useViewModel"

export const PopulationTrend: FC = () => {
  const {
    state: { prefList, prefCodeList },
    action: { checkPrefecture },
  } = useViewModel()

  return <Trend prefList={prefList} checkedIdList={prefCodeList} onChangeCheckedList={checkPrefecture} />
}
