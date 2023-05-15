import Head from "next/head"

import { PopulationTrend } from "@/components/container/PopulationTrend"
import { LoadingContext, useLoadingHelper } from "@/components/hooks/helper/useLoadingHelper"
import { LoadingWithOverlay } from "@/components/presentational/LoadingWithOverlay"

export default function Home() {
  const { isLoading, setIsLoading } = useLoadingHelper()
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
