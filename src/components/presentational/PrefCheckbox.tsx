import "./prefCheckbox.css"
import { FC } from "react"

type Props = {
  // TODO: 一旦 number型にしておくが、本来は1~47が入ってくる想定なので実装時に検討する
  onChange: (prefCode: number) => void
  checked: boolean
  // TODO: ここも都道府県が入ってくる想定
  prefName: string
  prefCode: number
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
