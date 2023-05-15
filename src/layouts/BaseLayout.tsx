import { FC, PropsWithChildren } from "react"

import { Footer } from "@/components/presentational/elements/Footer"
import { Header } from "@/components/presentational/elements/Header"

export const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="base_layout--container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
