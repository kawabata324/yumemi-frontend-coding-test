import Head from "next/head"
import { PopulationTrend } from "@/components/container/PopulationTrend"

export default function Home() {
  return (
    <>
      <Head>
        <title>Yumemi Front Coding Test</title>
      </Head>
      <PopulationTrend />
    </>
  )
}
