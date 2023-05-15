import { FC, PropsWithChildren } from "react"

export const Overlay: FC<PropsWithChildren> = ({ children }) => <div className="overlay--container">{children}</div>
