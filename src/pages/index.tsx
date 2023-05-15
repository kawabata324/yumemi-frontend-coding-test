import Head from "next/head"
import { createContext, useState } from "react"

import { PopulationTrend } from "@/components/container/PopulationTrend"
import { LoadingWithOverlay } from "@/components/presentational/LoadingWithOverlay"

type LoadingContextType = {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
}

export const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setIsLoading: () => {},
})

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      <Head>
        <title>Yumemi Front Coding Test</title>
      </Head>
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        {isLoading && <LoadingWithOverlay />}
        <PopulationTrend />
      </LoadingContext.Provider>
    </>
  )
}
