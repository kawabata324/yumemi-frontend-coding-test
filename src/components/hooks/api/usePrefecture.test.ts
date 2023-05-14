import useSWR from "swr"
import { prefectureApiFixture } from "@/test/fixtures/prefectureApiFixture"
import { renderHook } from "@testing-library/react"
import { usePrefectures } from "@/components/hooks/api/usePrefectures"
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

  test("異常系: Errorがあった時データが空になること", () => {
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

  test("異常系: undefinedの時データが空になること", () => {
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
})
