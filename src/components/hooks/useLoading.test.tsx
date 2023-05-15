import { renderHook } from "@testing-library/react"

import { useLoading } from "@/components/hooks/useLoading"

describe("useLoading", () => {
  test("初期値としてfalseが設定されていること", () => {
    const { result } = renderHook(() => useLoading())
    expect(result.current.isLoading).toBe(false)
  })
})
