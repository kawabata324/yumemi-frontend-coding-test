import Head from "next/head"

import { PopulationTrend } from "@/components/container/PopulationTrend"
import { LoadingContext, useLoadingHelper } from "@/components/hooks/helper/useLoadingHelper"
import { LoadingWithOverlay } from "@/components/presentational/LoadingWithOverlay"
import { BaseLayout } from "@/layouts/BaseLayout"

export default function Home() {
  const { isLoading, setIsLoading } = useLoadingHelper()
  return (
    <>
      <Head>
        <title>Yumemi Front Coding Test</title>
      </Head>
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        {isLoading && <LoadingWithOverlay />}
        <BaseLayout>
          <PopulationTrend />
        </BaseLayout>
      </LoadingContext.Provider>
    </>
  )
}
