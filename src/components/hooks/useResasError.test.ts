import toast from "react-hot-toast"
import { renderHook } from "@testing-library/react"
import { useResasError } from "@/components/hooks/useResasError"
import {
  resasResponse400Error,
  resasResponse403Error,
  resasResponse404Error,
  resasResponse429Error,
  resasResponse500Error,
} from "@/test/fixtures/resusResponseError"

jest.mock("react-hot-toast")
describe("useResasError", () => {
  describe("handleResponseError", () => {
    let toastErrorSpy: jest.SpyInstance
    let consoleErrorSpy: jest.SpyInstance
    const { result } = renderHook(() => useResasError())

    beforeEach(() => {
      jest.clearAllMocks()
      toastErrorSpy = jest.spyOn(toast, "error")
      consoleErrorSpy = jest.spyOn(console, "error").mockImplementation(() => {})
    })

    test("StatusCode「400」の時、LogとToastが表示されること", () => {
      result.current.action.handleResponseError(resasResponse400Error, "都道府県一覧の取得に失敗しました")
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "必要なパラメータが正しく設定されていません",
        "都道府県一覧の取得に失敗しました",
        "400"
      )
      expect(consoleErrorSpy).toHaveBeenCalledTimes(1)
      expect(toastErrorSpy).toHaveBeenCalledWith("予期せぬエラーが発生しました。開発者にお問い合わせください")
      expect(toastErrorSpy).toHaveBeenCalledTimes(1)
    })

    test("StatusCode「403」の時、LogとToastが表示されること", () => {
      result.current.action.handleResponseError(resasResponse403Error, "都道府県一覧の取得に失敗しました")
      expect(consoleErrorSpy).toHaveBeenCalledWith("APIキーが無効です", "都道府県一覧の取得に失敗しました", "403")
      expect(consoleErrorSpy).toHaveBeenCalledTimes(1)
      expect(toastErrorSpy).toHaveBeenCalledWith("予期せぬエラーが発生しました。開発者にお問い合わせください")
      expect(toastErrorSpy).toHaveBeenCalledTimes(1)
    })

    test("StatusCode「404」の時、LogとToastが表示されること", () => {
      result.current.action.handleResponseError(resasResponse404Error, "都道府県一覧の取得に失敗しました")
      expect(consoleErrorSpy).toHaveBeenCalledWith("指定のURLが存在しません", "都道府県一覧の取得に失敗しました", "404")
      expect(consoleErrorSpy).toHaveBeenCalledTimes(1)
      expect(toastErrorSpy).toHaveBeenCalledWith("予期せぬエラーが発生しました。開発者にお問い合わせください")
      expect(toastErrorSpy).toHaveBeenCalledTimes(1)
    })

    test("StatusCode「429」の時、LogとToastが表示されること", () => {
      result.current.action.handleResponseError(resasResponse429Error, "都道府県一覧の取得に失敗しました")
      expect(consoleErrorSpy).toHaveBeenCalledWith("リクエストが多すぎます", "都道府県一覧の取得に失敗しました", "429")
      expect(consoleErrorSpy).toHaveBeenCalledTimes(1)
      expect(toastErrorSpy).toHaveBeenCalledWith("ネットワークエラーが発生しました。Pageの更新をお願いします")
      expect(toastErrorSpy).toHaveBeenCalledTimes(1)
    })

    test("StatusCodeがその他でErrorになった時、LogとToastが表示されること", () => {
      result.current.action.handleResponseError(resasResponse500Error, "都道府県一覧の取得に失敗しました")
      expect(consoleErrorSpy).toHaveBeenCalledWith("ネットワークエラーです", "都道府県一覧の取得に失敗しました", "500")
      expect(consoleErrorSpy).toHaveBeenCalledTimes(1)
      expect(toastErrorSpy).toHaveBeenCalledWith("ネットワークエラーが発生しました。Pageの更新をお願いします")
      expect(toastErrorSpy).toHaveBeenCalledTimes(1)
    })
  })
})
