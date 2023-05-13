import { CustomHook } from "@/types/customHook"
import { PrefList } from "@/types/pref"
import useSWR from "swr"
import { fetcher } from "@/libs/swr"
import { PrefecturesResponse200 } from "@/types/resas"

type State = {
  prefList: PrefList
}

type Action = {}

export const usePrefectures: CustomHook<State, Action> = () => {
  const { data, error } = useSWR<PrefecturesResponse200, Error>("/prefectures", fetcher)

  // TODO: エラーハンドリングする
  return {
    state: {
      prefList: data ? data.result : [],
    },
    action: {},
  }
}
