import { renderHook } from "@testing-library/react"

import { usePopulationGraphHelper } from "@/components/hooks/usePopulationGraphHelper"
import { totalPopulationFixture } from "@/test/fixtures/populationComposition/totalPopulationFixture"

describe("usePopulationGraph", () => {
  test("minYearは配列の最小の値をとってくる", () => {
    const { result } = renderHook(() => usePopulationGraphHelper(totalPopulationFixture))
    expect(result.current.state.minYear).toBe(1980)
  })
  test("maxYearは配列の最大の値をとってくる", () => {
    const { result } = renderHook(() => usePopulationGraphHelper(totalPopulationFixture))
    expect(result.current.state.maxYear).toBe(2045)
  })
  test("maxPopulationは配列の最大の値をとってくる", () => {
    const { result } = renderHook(() => usePopulationGraphHelper(totalPopulationFixture))
    expect(result.current.state.maxPopulation).toBe(12817)
  })
  test("generateRandomColorCodeはランダムなカラーコードを返す", () => {
    const { result } = renderHook(() => usePopulationGraphHelper(totalPopulationFixture))
    expect(result.current.action.generateRandomColorCode()).toMatch(/#[0-9a-f]{6}/)
  })
})
