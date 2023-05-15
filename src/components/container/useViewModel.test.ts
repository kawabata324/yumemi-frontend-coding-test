import { act, renderHook } from "@testing-library/react"
import useSWR from "swr"

import { useViewModel } from "@/components/container/useViewModel"
import { resasApi } from "@/libs/axios"
import { olderPopulationFixture } from "@/test/fixtures/populationComposition/olderPopulationFixture"
import { populationCompositionApiFixture } from "@/test/fixtures/populationComposition/populationCompositionApiFixture"
import { totalPopulationFixture } from "@/test/fixtures/populationComposition/totalPopulationFixture"
import { workingPopulationFixture } from "@/test/fixtures/populationComposition/workingPopulationFixture"
import { youngPopulationFixture } from "@/test/fixtures/populationComposition/youngPopulationFixture"
import { prefectureApiFixture } from "@/test/fixtures/prefectureApiFixture"
import { resasResponse403Error } from "@/test/fixtures/resusResponseErrorFixture"

jest.mock("swr")
describe("useViewModel", () => {
  beforeEach(() => {
    const mockUseSWR = useSWR as jest.MockedFunction<typeof useSWR>
    mockUseSWR.mockReturnValue({
      data: prefectureApiFixture,
      error: undefined,
      mutate: jest.fn(),
      isValidating: false,
      isLoading: false,
    })
  })
  describe("changeComposition", () => {
    test("総人口を選んだ場合、総人口のデータが返ってくること", () => {
      const initialState = {
        initTotalPopulations: totalPopulationFixture,
        initSelectedLabel: "年少人口",
      }
      const { result } = renderHook(() => useViewModel(initialState))
      expect(result.current.state.selectedLabel).toBe("年少人口")
      act(() => result.current.action.changeComposition("総人口"))
      expect(result.current.state.selectedLabel).toBe("総人口")
      expect(result.current.state.composition).toEqual(totalPopulationFixture)
    })
    test("年少人口を選んだ場合、年少人口のデータが返ってくること", () => {
      const initialState = {
        initYoungPopulations: youngPopulationFixture,
        initSelectedLabel: "総人口",
      }
      const { result } = renderHook(() => useViewModel(initialState))
      expect(result.current.state.selectedLabel).toBe("総人口")
      act(() => result.current.action.changeComposition("年少人口"))
      expect(result.current.state.selectedLabel).toBe("年少人口")
      expect(result.current.state.composition).toEqual(youngPopulationFixture)
    })
    test("労働人口を選んだ場合、労働人口のデータが返ってくること", () => {
      const initialState = {
        initWorkingPopulations: workingPopulationFixture,
        initSelectedLabel: "総人口",
      }
      const { result } = renderHook(() => useViewModel(initialState))
      expect(result.current.state.selectedLabel).toBe("総人口")
      act(() => result.current.action.changeComposition("労働人口"))
      expect(result.current.state.selectedLabel).toBe("労働人口")
      expect(result.current.state.composition).toEqual(workingPopulationFixture)
    })
    test("老年人口を選んだ場合、老年人口のデータが返ってくること", () => {
      const initialState = {
        initOlderPopulations: olderPopulationFixture,
        initSelectedLabel: "総人口",
      }
      const { result } = renderHook(() => useViewModel(initialState))
      expect(result.current.state.selectedLabel).toBe("総人口")
      act(() => result.current.action.changeComposition("老年人口"))
      expect(result.current.state.selectedLabel).toBe("老年人口")
      expect(result.current.state.composition).toEqual(olderPopulationFixture)
    })

    test("存在しないラベルが万が一入った場合、総人口のデータが返ってくること", () => {
      const initialState = {
        initTotalPopulations: totalPopulationFixture,
        initSelectedLabel: "存在しないラベル",
      }
      const { result } = renderHook(() => useViewModel(initialState))
      expect(result.current.state.selectedLabel).toBe("存在しないラベル")
      expect(result.current.state.composition).toEqual(totalPopulationFixture)
    })
  })
  describe("checkPrefecture", () => {
    test("既に選択していた場合, 選択が解除されデータもなくなること", async () => {
      const initialState = {
        initPrefCodeList: [1],
        initTotalPopulations: totalPopulationFixture,
        initWorkingPopulations: workingPopulationFixture,
        initYoungPopulations: youngPopulationFixture,
        initOlderPopulations: olderPopulationFixture,
      }
      const { result } = renderHook(() => useViewModel(initialState))
      expect(result.current.state.prefCodeList).toEqual([1])
      await act(async () => await result.current.action.checkPrefecture(1, "北海道"))
      expect(result.current.state.prefCodeList).toEqual([])
    })
    test("選択していなかった場合, 選択されデータも追加されること", async () => {
      jest.spyOn(resasApi, "get").mockResolvedValue({
        data: populationCompositionApiFixture,
      })
      const initialState = {
        initPrefCodeList: [],
        initTotalPopulations: [],
        initWorkingPopulations: [],
        initYoungPopulations: [],
        initOlderPopulations: [],
      }
      const { result } = renderHook(() => useViewModel(initialState))
      expect(result.current.state.prefCodeList).toEqual([])
      await act(async () => await result.current.action.checkPrefecture(1, "北海道"))
      expect(result.current.state.prefCodeList).toEqual([1])
      expect(result.current.state.totalPopulations).not.toEqual([])
      expect(result.current.state.workingPopulations).not.toEqual([])
      expect(result.current.state.youngPopulations).not.toEqual([])
      expect(result.current.state.olderPopulations).not.toEqual([])
    })
    test("異常系: API Errorなどでデータが取れなかった場合", () => {
      jest.spyOn(resasApi, "get").mockResolvedValue({
        data: resasResponse403Error,
      })
      const initialState = {
        initPrefCodeList: [],
        initTotalPopulations: [],
        initWorkingPopulations: [],
        initYoungPopulations: [],
        initOlderPopulations: [],
      }
      jest.spyOn(console, "error").mockImplementation(() => {})

      const { result } = renderHook(() => useViewModel(initialState))
      act(() => result.current.action.checkPrefecture(1, "北海道"))
      expect(result.current.state.prefCodeList).toEqual([])
      expect(result.current.state.totalPopulations).toEqual([])
      expect(result.current.state.workingPopulations).toEqual([])
      expect(result.current.state.youngPopulations).toEqual([])
      expect(result.current.state.olderPopulations).toEqual([])
    })
  })
})
