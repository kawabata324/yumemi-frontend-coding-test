import { renderHook } from "@testing-library/react"

import { useLoadingHelper } from "@/components/hooks/helper/useLoadingHelper"

describe("useLoading", () => {
  test("初期値としてfalseが設定されていること", () => {
    const { result } = renderHook(() => useLoadingHelper())
    expect(result.current.isLoading).toBe(false)
  })
})
