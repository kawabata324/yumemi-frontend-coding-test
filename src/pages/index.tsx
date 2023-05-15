import Head from "next/head"

import { PopulationTrend } from "@/components/container/PopulationTrend"
import { LoadingContext, useLoading } from "@/components/hooks/useLoading"
import { LoadingWithOverlay } from "@/components/presentational/LoadingWithOverlay"

export default function Home() {
  const { isLoading, setIsLoading } = useLoading()
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
