import { FC } from "react"
import { BallTriangle } from "react-loader-spinner"

import { Overlay } from "@/components/presentational/Overlay"

export const LoadingWithOverlay: FC = () => (
  <Overlay>
    <BallTriangle
      ariaLabel="ball-triangle-loading"
      color="#4fa94d"
      height={200}
      radius={5}
      visible={true}
      width={200}
    />
  </Overlay>
)
