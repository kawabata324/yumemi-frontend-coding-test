import { FC } from "react"

import { PrefCode, PrefCodeList, PrefName } from "@/types/pref"

type Props = {
  onChange: (prefCode: PrefCode, prefName: PrefName) => void
  checkedIdList: PrefCodeList
  prefName: PrefName
  prefCode: PrefCode
}

export const PrefCheckbox: FC<Props> = ({ onChange, checkedIdList, prefName, prefCode }) => {
  const checked = checkedIdList.includes(prefCode)
  const checkBoxId = `pref_check_box_${prefCode}`
  return (
    <label className="pref_checkbox--label" htmlFor={checkBoxId}>
      <input
        checked={checked}
        className="pref_checkbox--input"
        id={checkBoxId}
        onChange={() => onChange(prefCode, prefName)}
        type="checkbox"
      />
      <p className="pref_checkbox--text">{prefName}</p>
    </label>
  )
}
