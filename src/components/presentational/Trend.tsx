import { PrefCheckboxes } from "@/components/presentational/PrefCheckboxes"
import { PrefCode, PrefCodeList, PrefList } from "@/types/pref"
import { FC } from "react"
import { PopulationCompositionGraph } from "@/components/presentational/PopulationCompositionGraph"
import { PopulationCompositionGraphElements } from "@/types/populationComposition"
import { PrimaryButton } from "@/components/presentational/elements/PrimaryButton"
import {
  ALL_POPULATION,
  POPULATION_BY_OLDER,
  POPULATION_BY_WORKING_AGE,
  POPULATION_BY_YOUNG,
  PopulationCompositionType,
} from "@/constants/populationCompositionType"

type Props = {
  prefList: PrefList
  checkedIdList: PrefCodeList
  onChangeCheckedList: (prefCode: PrefCode) => void
  populationComposition: PopulationCompositionGraphElements
  selectedLabel: PopulationCompositionType
  changeComposition: (label: PopulationCompositionType) => void
}

export const Trend: FC<Props> = ({
  prefList,
  checkedIdList,
  onChangeCheckedList,
  populationComposition,
  selectedLabel,
  changeComposition,
}) => (
  <div className="trend--container">
    <PrefCheckboxes onChangeCheckedList={onChangeCheckedList} checkedIdList={checkedIdList} prefList={prefList} />
    {populationComposition.length === 0 ? (
      <p>県名を選択してください</p>
    ) : (
      <>
        <div className="trend--button-group">
          <PrimaryButton
            onClick={() => changeComposition(ALL_POPULATION)}
            label={ALL_POPULATION}
            selected={selectedLabel === ALL_POPULATION}
          />
          <PrimaryButton
            onClick={() => changeComposition(POPULATION_BY_YOUNG)}
            label={POPULATION_BY_YOUNG}
            selected={selectedLabel === POPULATION_BY_YOUNG}
          />
          <PrimaryButton
            onClick={() => changeComposition(POPULATION_BY_WORKING_AGE)}
            label={POPULATION_BY_WORKING_AGE}
            selected={selectedLabel === POPULATION_BY_WORKING_AGE}
          />
          <PrimaryButton
            onClick={() => changeComposition(POPULATION_BY_OLDER)}
            label={POPULATION_BY_OLDER}
            selected={selectedLabel === POPULATION_BY_OLDER}
          />
        </div>
        <PopulationCompositionGraph elements={populationComposition} />
      </>
    )}
  </div>
)
