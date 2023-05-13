import { CustomHook } from "@/types/customHook"
import { PrefCode, PrefCodeList, PrefList } from "@/types/pref"
import { useState } from "react"
import { usePrefectures } from "@/components/hooks/api/usePrefectures"

type State = {
  prefList: PrefList
  prefCodeList: PrefCodeList
}

type Action = {
  checkPrefecture: (prefCode: PrefCode) => void
}

export const useViewModel: CustomHook<State, Action> = () => {
  const [prefCodeList, setPrefCodeList] = useState<PrefCodeList>([])
  const {
    state: { prefList },
  } = usePrefectures()

  const checkPrefecture = (code: PrefCode) => {
    setPrefCodeList((pref) => [...pref, code])
    // TODO: ここで人口構成のAPIを叩く
  }
  return {
    state: { prefList, prefCodeList },
    action: {
      checkPrefecture,
    },
  }
}
