import { FC } from "react"

import { PrimaryButton } from "@/components/presentational/elements/PrimaryButton"
import { PopulationCompositionGraph } from "@/components/presentational/PopulationCompositionGraph"
import { PrefCheckboxes } from "@/components/presentational/PrefCheckboxes"
import {
  ALL_POPULATION,
  POPULATION_BY_OLDER,
  POPULATION_BY_WORKING_AGE,
  POPULATION_BY_YOUNG,
  PopulationCompositionType,
} from "@/constants/populationCompositionType"
import { PopulationCompositionGraphElements } from "@/types/populationComposition"
import { PrefCode, PrefCodeList, PrefList } from "@/types/pref"

type Props = {
  prefList: PrefList
  checkedIdList: PrefCodeList
  onChangeCheckedList: (prefCode: PrefCode) => void
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
    <PrefCheckboxes checkedIdList={checkedIdList} onChangeCheckedList={onChangeCheckedList} prefList={prefList} />
    {populationComposition.length === 0 ? (
      <p>県名を選択してください</p>
    ) : (
      <>
        <div className="trend--button-group">
          <PrimaryButton
            label={ALL_POPULATION}
            onClick={() => onChangeComposition(ALL_POPULATION)}
            selected={selectedLabel === ALL_POPULATION}
          />
          <PrimaryButton
            label={POPULATION_BY_YOUNG}
            onClick={() => onChangeComposition(POPULATION_BY_YOUNG)}
            selected={selectedLabel === POPULATION_BY_YOUNG}
          />
          <PrimaryButton
            label={POPULATION_BY_WORKING_AGE}
            onClick={() => onChangeComposition(POPULATION_BY_WORKING_AGE)}
            selected={selectedLabel === POPULATION_BY_WORKING_AGE}
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
