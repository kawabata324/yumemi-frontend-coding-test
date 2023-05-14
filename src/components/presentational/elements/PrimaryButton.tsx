import { FC } from "react"

type Props = {
  onClick: () => void
  label: string
  selected: boolean
}

export const PrimaryButton: FC<Props> = ({ onClick, label, selected }) => {
  return (
    <button
      onClick={() => onClick()}
      className={`elements_primary_button--button ${selected && "elements_primary_button--button-selected"}`}
    >
      {label}
    </button>
  )
}
