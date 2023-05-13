import { CustomHook } from "@/types/customHook"
import { PrefList } from "@/types/pref"
import useSWR from "swr"
import { fetcher } from "@/libs/swr"
import { PrefecturesResponse200, ResasResponseError } from "@/types/resas"
import { useResasError } from "@/components/hooks/useResasError"

type State = {
  prefList: PrefList
}

type Action = {}

export const usePrefectures: CustomHook<State, Action> = () => {
  const { data } = useSWR<PrefecturesResponse200 | ResasResponseError>("/prefecturess", fetcher)
  const {
    action: { handleResponseError },
  } = useResasError()

  if (data && "statusCode" in data) {
    handleResponseError(data, "都道府県一覧の取得に失敗しました")
  }
  const prefList = data && "result" in data ? data.result : []
  return {
    state: {
      prefList,
    },
    action: {},
  }
}
