import toast from "react-hot-toast"

import { CustomHook } from "@/types/customHook"
import { ResasResponseError } from "@/types/resas"

type State = {}

type Action = {
  handleResponseError: (error: ResasResponseError, detail: string) => void
}
export const useResasError: CustomHook<State, Action> = () => {
  const handleResponseError = (error: ResasResponseError, detail: string) => {
    switch (error.statusCode) {
      case "400":
        console.error("必要なパラメータが正しく設定されていません", detail, error.statusCode)
        toast.error("予期せぬエラーが発生しました。開発者にお問い合わせください")
        break
      case "403":
        console.error("APIキーが無効です", detail, error.statusCode)
        toast.error("予期せぬエラーが発生しました。開発者にお問い合わせください")
        break
      case "404":
        console.error("指定のURLが存在しません", detail, error.statusCode)
        toast.error("予期せぬエラーが発生しました。開発者にお問い合わせください")
        break
      case "429":
        console.error("リクエストが多すぎます", detail, error.statusCode)
        toast.error("ネットワークエラーが発生しました。Pageの更新をお願いします")
        break
      default:
        console.error("ネットワークエラーです", detail, error.statusCode)
        toast.error("ネットワークエラーが発生しました。Pageの更新をお願いします")
        break
    }
  }

  return {
    state: {},
    action: { handleResponseError },
  }
}
