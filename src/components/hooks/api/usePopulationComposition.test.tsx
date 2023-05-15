import { renderHook } from "@testing-library/react"

import { usePopulationComposition } from "@/components/hooks/api/usePopulationComposition"
import { resasApi } from "@/libs/axios"
import {
  populationByOlderApiFixture,
  populationByWorkingAgeApiFixture,
  populationByYoungerApiFixture,
  populationCompositionApiFixture,
  totalPopulationApiFixture,
} from "@/test/fixtures/populationComposition/populationCompositionApiFixture"
import { resasResponse403Error } from "@/test/fixtures/resusResponseErrorFixture"

describe("usePopulationComposition", () => {
  describe("fetchPopulationComposition", () => {
    afterEach(() => {
      jest.clearAllMocks()
    })

    test("正常系: データが取得できること", async () => {
      jest.spyOn(resasApi, "get").mockResolvedValue({
        data: populationCompositionApiFixture,
      })

      const { result } = renderHook(() => usePopulationComposition())
      const res = await result.current.action.fetchPopulationComposition(13)
      expect(res).toMatchObject({
        totalPopulation: totalPopulationApiFixture.data,
        populationByYounger: populationByYoungerApiFixture.data,
        populationByWorking: populationByWorkingAgeApiFixture.data,
        populationByOlder: populationByOlderApiFixture.data,
      })
    })
    test("異常系: データが取得できないこと", async () => {
      jest.spyOn(resasApi, "get").mockResolvedValue({
        data: resasResponse403Error,
      })
      jest.spyOn(console, "error").mockImplementation(() => {})

      const { result } = renderHook(() => usePopulationComposition())
      const res = await result.current.action.fetchPopulationComposition(13)
      expect(res).toMatchObject({
        totalPopulation: [],
        populationByYounger: [],
        populationByWorking: [],
        populationByOlder: [],
      })
    })
    test("返ってきた値が予期しない場合、データが取得できないこと", async () => {
      jest.spyOn(resasApi, "get").mockRejectedValueOnce("NetWork Error")
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {})

      const { result } = renderHook(() => usePopulationComposition())
      const res = await result.current.action.fetchPopulationComposition(13)
      expect(consoleErrorSpy).toHaveBeenCalledWith("NetWork Error", "都道府県の人口構成の取得に失敗しました")
      expect(res).toBeUndefined()
    })
  })
})
