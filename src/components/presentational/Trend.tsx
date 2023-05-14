import { PrefCheckboxes } from "@/components/presentational/PrefCheckboxes"
import { PrefCode, PrefCodeList, PrefList } from "@/types/pref"
import { FC } from "react"
import { PopulationCompositionGraph } from "@/components/presentational/PopulationCompositionGraph"
import { PopulationCompositionGraphElements } from "@/types/populationComposition"

type Props = {
  prefList: PrefList
  checkedIdList: PrefCodeList
  onChangeCheckedList: (prefCode: PrefCode) => void
  populationComposition: PopulationCompositionGraphElements
}

export const Trend: FC<Props> = ({ prefList, checkedIdList, onChangeCheckedList, populationComposition }) => (
  <div className="trend--container">
    <PrefCheckboxes onChangeCheckedList={onChangeCheckedList} checkedIdList={checkedIdList} prefList={prefList} />
    {populationComposition.length === 0 ? (
      <p>要素がゼロ</p>
    ) : (
      <PopulationCompositionGraph elements={populationComposition} />
    )}
  </div>
)
