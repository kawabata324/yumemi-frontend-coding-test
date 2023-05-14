import { CustomHook } from "@/types/customHook"
import { PrefList } from "@/types/pref"
import useSWR from "swr"
import { fetcher } from "@/libs/swr"
import { PrefecturesResponse200, ResasResponseError } from "@/types/resas"
import { useResasError } from "@/components/hooks/api/useResasError"

type State = {
  prefList: PrefList
}

type Action = {}

export const usePrefectures: CustomHook<State, Action> = () => {
  const { data, error } = useSWR<PrefecturesResponse200 | ResasResponseError>("/prefectures", fetcher)
  const {
    action: { handleResponseError },
  } = useResasError()

  if (error) {
    console.error(error, "都道府県一覧の取得に失敗しました")
  }

  if (!data) {
    return {
      state: {
        prefList: [],
      },
      action: {},
    }
  }

  if ("statusCode" in data) {
    handleResponseError(data, "都道府県一覧の取得に失敗しました")
  }

  const prefList = "result" in data ? data.result : []
  return {
    state: {
      prefList,
    },
    action: {},
  }
}
