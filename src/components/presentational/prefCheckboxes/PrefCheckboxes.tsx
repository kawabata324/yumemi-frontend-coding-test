import "./index.scss"
import { FC } from "react"
import { PrefCheckbox } from "@/components/presentational/prefCheckbox/PrefCheckbox"
import { PrefCode, PrefList } from "@/constants/pref"

type Props = {
  onChange: () => void
  checkedIdList: PrefCode[]
  prefList: PrefList
}
export const PrefCheckboxes: FC<Props> = ({ onChange, checkedIdList, prefList }) => (
  <div>
    <ul className="pref_checkboxes--pref_checkboxes">
      {prefList.map((pref) => (
        <li key={pref.prefCode}>
          <PrefCheckbox
            onChange={onChange}
            checkedIdList={checkedIdList}
            prefName={pref.prefName}
            prefCode={pref.prefCode}
          />
        </li>
      ))}
    </ul>
  </div>
)