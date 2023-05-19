import { FC } from "react"

type Props = {
  onClick: () => void
  label: string
  selected: boolean
}

export const PrimaryButton: FC<Props> = ({ onClick, label, selected }) => {
  return (
    <button
      className={`elements_primary_button--button ${selected && "elements_primary_button--button-selected"}`}
      onClick={() => onClick()}
    >
      {label}
    </button>
  )
}
