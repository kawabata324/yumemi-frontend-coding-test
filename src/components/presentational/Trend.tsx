import { FC } from "react"

import { PrimaryButton } from "@/components/presentational/elements/PrimaryButton"
import { PopulationCompositionGraph } from "@/components/presentational/PopulationCompositionGraph"
import { PrefCheckboxes } from "@/components/presentational/PrefCheckboxes"
import {
  TOTAL_POPULATION,
  POPULATION_BY_OLDER,
  POPULATION_BY_WORKING,
  POPULATION_BY_YOUNG,
  PopulationCompositionType,
} from "@/constants/populationCompositionType"
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
          <PrimaryButton
            label={TOTAL_POPULATION}
            onClick={() => onChangeComposition(TOTAL_POPULATION)}
            selected={selectedLabel === TOTAL_POPULATION}
          />
          <PrimaryButton
            label={POPULATION_BY_YOUNG}
            onClick={() => onChangeComposition(POPULATION_BY_YOUNG)}
            selected={selectedLabel === POPULATION_BY_YOUNG}
          />
          <PrimaryButton
            label={POPULATION_BY_WORKING}
            onClick={() => onChangeComposition(POPULATION_BY_WORKING)}
            selected={selectedLabel === POPULATION_BY_WORKING}
          />
          <PrimaryButton
            label={POPULATION_BY_OLDER}
            onClick={() => onChangeComposition(POPULATION_BY_OLDER)}
            selected={selectedLabel === POPULATION_BY_OLDER}
          />
        </div>
        <PopulationCompositionGraph elements={populationComposition} />
      </>
    )}
  </div>
)
