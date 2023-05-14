import { FC } from "react"

import { PrefCode, PrefCodeList, PrefName } from "@/types/pref"

type Props = {
  onChange: (prefCode: PrefCode) => void
  checkedIdList: PrefCodeList
  prefName: PrefName
  prefCode: PrefCode
}

export const PrefCheckbox: FC<Props> = ({ onChange, checkedIdList, prefName, prefCode }) => {
  const checked = checkedIdList.includes(prefCode)
  const checkBoxId = `pref_check_box_${prefCode}`
  return (
    <label htmlFor={checkBoxId} className="pref_checkbox--label">
      <input
        id={checkBoxId}
        type="checkbox"
        onChange={() => onChange(prefCode)}
        checked={checked}
        className="pref_checkbox--input"
      />
      <p className="pref_checkbox--text">{prefName}</p>
    </label>
  )
}
