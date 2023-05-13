import { PrefCheckboxes } from "@/components/presentational/PrefCheckboxes"
import { PrefCode, PrefCodeList, PrefList } from "@/types/pref"
import { FC } from "react"
import { PopulationCompositionGraph } from "@/components/presentational/PopulationCompositionGraph"
import { totalPopulationTestData } from "@/test/fixtures/totalPopulationTestData"

type Props = {
  prefList: PrefList
  checkedIdList: PrefCodeList
  onChangeCheckedList: (prefCode: PrefCode) => void
}

export const Trend: FC<Props> = ({ prefList, checkedIdList, onChangeCheckedList }) => (
  <div className="trend--container">
    <PrefCheckboxes onChangeCheckedList={onChangeCheckedList} checkedIdList={checkedIdList} prefList={prefList} />
    <PopulationCompositionGraph elements={totalPopulationTestData} />
  </div>
)
