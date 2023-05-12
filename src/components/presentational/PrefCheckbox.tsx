import "./prefCheckbox.css"
import { FC } from "react"
import { PrefCode, PrefName } from "@/constants/pref"

type Props = {
  onChange: (prefCode: PrefCode) => void
  checked: boolean
  prefName: PrefName
  prefCode: PrefCode
}

export const PrefCheckbox: FC<Props> = ({ onChange, checked, prefName, prefCode }) => (
  <label htmlFor="pref_check_box" className="pref_checkbox--label">
    <input
      id="pref_check_box"
      type="checkbox"
      onChange={() => onChange(prefCode)}
      checked={checked}
      className="pref_checkbox--input"
    />
    <p className="pref_checkbox--text">{prefName}</p>
  </label>
)
