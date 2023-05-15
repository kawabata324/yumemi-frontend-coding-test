import { FC } from "react"

import { PrimaryButton } from "@/components/presentational/elements/PrimaryButton"
import { PopulationCompositionGraph } from "@/components/presentational/PopulationCompositionGraph"
import { PrefCheckboxes } from "@/components/presentational/PrefCheckboxes"
import { PopulationCompositionType, populationCompositionTypes } from "@/constants/populationCompositionType"
import { PopulationCompositionGraphElements } from "@/types/populationComposition"
import { PrefCode, PrefCodeList, PrefList, PrefName } from "@/types/pref"

type Props = {
  prefList: PrefList
  checkedIdList: PrefCodeList
  onChangeCheckedList: (prefCode: PrefCode, prefName: PrefName) => void
  populationComposition: PopulationCompositionGraphElements
  selectedLabel: PopulationCompositionType
  onChangeComposition: (label: PopulationCompositionType) => void
}

export const Trend: FC<Props> = ({
  prefList,
  checkedIdList,
  onChangeCheckedList,
  populationComposition,
  selectedLabel,
  onChangeComposition,
}) => (
  <div className="trend--container">
    <h2 className="trend_sub--title">都道府県</h2>
    <PrefCheckboxes checkedIdList={checkedIdList} onChangeCheckedList={onChangeCheckedList} prefList={prefList} />
    {populationComposition.length === 0 ? (
      <p>県名を選択してください</p>
    ) : (
      <>
        <h2 className="trend_sub--title">人口構成</h2>
        <div className="trend--button-group">
          {populationCompositionTypes.map((label) => (
            <PrimaryButton
              key={label}
              label={label}
              onClick={() => onChangeComposition(label)}
              selected={selectedLabel === label}
            />
          ))}
        </div>
        <PopulationCompositionGraph elements={populationComposition} />
      </>
    )}
  </div>
)
