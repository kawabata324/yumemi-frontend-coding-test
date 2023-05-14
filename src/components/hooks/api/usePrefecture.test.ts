import { renderHook } from "@testing-library/react"
import useSWR from "swr"

import { usePrefectures } from "@/components/hooks/api/usePrefectures"
import { prefectureApiFixture } from "@/test/fixtures/prefectureApiFixture"
import { resasResponse403Error } from "@/test/fixtures/resusResponseErrorFixture"

jest.mock("swr")
describe("usePrefectures", () => {
  test("正常系: データが取得できること", () => {
    const mockUseSWR = useSWR as jest.MockedFunction<typeof useSWR>
    mockUseSWR.mockReturnValue({
      data: prefectureApiFixture,
      error: undefined,
      mutate: jest.fn(),
      isValidating: false,
      isLoading: false,
    })

    const { result } = renderHook(() => usePrefectures())
    expect(result.current.state.prefList).toEqual(prefectureApiFixture.result)
  })

  test("異常系: ResasErrorがあった時データが空になること", () => {
    const mockUseSWR = useSWR as jest.MockedFunction<typeof useSWR>
    mockUseSWR.mockReturnValue({
      data: resasResponse403Error,
      error: undefined,
      mutate: jest.fn(),
      isValidating: false,
      isLoading: false,
    })
    jest.spyOn(console, "error").mockImplementation(() => {})

    const { result } = renderHook(() => usePrefectures())
    expect(result.current.state.prefList).toEqual([])
  })

  test("正常系: swrがデータ取得中の時、データが空になること", () => {
    const mockUseSWR = useSWR as jest.MockedFunction<typeof useSWR>
    mockUseSWR.mockReturnValue({
      data: undefined,
      error: undefined,
      mutate: jest.fn(),
      isValidating: false,
      isLoading: false,
    })
    jest.spyOn(console, "error").mockImplementation(() => {})

    const { result } = renderHook(() => usePrefectures())
    expect(result.current.state.prefList).toEqual([])
  })

  test("異常系: swrがエラーの時、データが空になること", () => {
    const mockUseSWR = useSWR as jest.MockedFunction<typeof useSWR>
    mockUseSWR.mockReturnValue({
      data: undefined,
      error: "Network Error",
      mutate: jest.fn(),
      isValidating: false,
      isLoading: false,
    })
    const mockConsole = jest.spyOn(console, "error").mockImplementation(() => {})

    const { result } = renderHook(() => usePrefectures())
    expect(result.current.state.prefList).toEqual([])
    expect(mockConsole).toHaveBeenCalledWith("Network Error", "都道府県一覧の取得に失敗しました")
  })
})
