import { FC } from "react"

import { PrefCheckbox } from "@/components/presentational/PrefCheckbox"
import { PrefCode, PrefCodeList, PrefList } from "@/types/pref"

type Props = {
  onChangeCheckedList: (prefCode: PrefCode) => void
  checkedIdList: PrefCodeList
  prefList: PrefList
}
export const PrefCheckboxes: FC<Props> = ({ onChangeCheckedList, checkedIdList, prefList }) => (
  <div>
    <h2 className="pref_checkboxes--title">都道府県</h2>
    <ul className="pref_checkboxes--pref_checkboxes">
      {prefList.map((pref) => (
        <li key={pref.prefCode}>
          <PrefCheckbox
            checkedIdList={checkedIdList}
            onChange={onChangeCheckedList}
            prefCode={pref.prefCode}
            prefName={pref.prefName}
          />
        </li>
      ))}
    </ul>
  </div>
)
