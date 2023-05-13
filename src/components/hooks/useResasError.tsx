import { ResasResponseError } from "@/types/resas"
import { CustomHook } from "@/types/customHook"

type State = {}

type Action = {
  handleResponseError: (error: ResasResponseError, detail: string) => void
}
export const useResasError: CustomHook<State, Action> = () => {
  const handleResponseError = (error: ResasResponseError, detail: string) => {
    switch (error.statusCode) {
      case "400":
        console.error("必要なパラメータが正しく設定されていません", detail, error.statusCode)
        // TODO: 復旧不可能なので管理者に連絡してもらう
        break
      case "403":
        console.error("APIキーが無効です", detail, error.statusCode)
        // TODO: 復旧不可能なので管理者に連絡してもらう
        break
      case "404":
        console.error("指定のURLが存在しません", detail, error.statusCode)
        // TODO: 復旧不可能なので管理者に連絡してもらう
        break
      case "429":
        console.error("リクエストが多すぎます", detail, error.statusCode)
        // TODO: リトライをうながす
        break
      default:
        console.error("ネットワークエラーです", detail, error.statusCode)
        // TODO: リトライをうながす
        break
    }
  }

  return {
    state: {},
    action: { handleResponseError },
  }
}
