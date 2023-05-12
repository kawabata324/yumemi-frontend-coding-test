import { FC } from "react"

type Props = {
  // TODO: 一旦 number型にしておくが、本来は1~47が入ってくる想定なので実装時に検討する
  onChange: (prefCode: number) => void
  // TODO: ここも都道府県が入ってくる想定
  prefName: string
  prefCode: number
}

export const PrefCheckbox: FC<Props> = ({ onChange, prefName, prefCode }) => (
  <label htmlFor="pref_check_box">
    <input id="pref_check_box" type="checkbox" onChange={() => onChange(prefCode)} />
    {prefName}
  </label>
)
