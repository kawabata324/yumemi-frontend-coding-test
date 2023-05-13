import { renderHook } from "@testing-library/react"
import { usePopulationGraph } from "@/components/hooks/usePopulationGraph"
import { totalPopulationTestData } from "@/test/fixtures/totalPopulationTestData"

describe("usePopulationGraph", () => {
  test("minYearは配列の最小の値をとってくる", () => {
    const { result } = renderHook(() => usePopulationGraph(totalPopulationTestData))
    expect(result.current.state.minYear).toBe(1980)
  })
  test("maxYearは配列の最大の値をとってくる", () => {
    const { result } = renderHook(() => usePopulationGraph(totalPopulationTestData))
    expect(result.current.state.maxYear).toBe(2045)
  })
  test("maxPopulationは配列の最大の値をとってくる", () => {
    const { result } = renderHook(() => usePopulationGraph(totalPopulationTestData))
    expect(result.current.state.maxPopulation).toBe(12817)
  })
  test("generateRandomColorCodeはランダムなカラーコードを返す", () => {
    const { result } = renderHook(() => usePopulationGraph(totalPopulationTestData))
    expect(result.current.action.generateRandomColorCode()).toMatch(/#[0-9a-f]{6}/)
  })
})
