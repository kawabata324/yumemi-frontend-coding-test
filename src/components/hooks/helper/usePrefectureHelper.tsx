import { useState } from "react"

import { CustomHook } from "@/types/customHook"
import { PrefList } from "@/types/pref"

type State = {
  tabIndex: number
  dividePrefLists: PrefList[]
}

type Action = {
  selectTab: (tabIndex: number) => void
}

export const usePrefectureHelper: CustomHook<State, Action> = (prefList: PrefList) => {
  const [tabIndex, setTabIndex] = useState(1)
  const selectTab = (tabIndex: number) => {
    setTabIndex(tabIndex)
  }

  const allPrefList = prefList
  const HOKKAIDO_AND_TOHOKU_PrefList: PrefList = prefList.filter((pref) => pref.prefCode <= 7)
  const KANTO_PrefList: PrefList = prefList.filter((pref) => pref.prefCode >= 8 && pref.prefCode <= 14)
  const TYUBU_PrefList: PrefList = prefList.filter((pref) => pref.prefCode >= 15 && pref.prefCode <= 23)
  const KINKI_PrefList: PrefList = prefList.filter((pref) => pref.prefCode >= 24 && pref.prefCode <= 30)
  const TYUUGOKU_PrefList: PrefList = prefList.filter((pref) => pref.prefCode >= 31 && pref.prefCode <= 35)
  const SHIKOKU_PrefList: PrefList = prefList.filter((pref) => pref.prefCode >= 36 && pref.prefCode <= 39)
  const KYUSYU_AND_OKINAWA_PrefList: PrefList = prefList.filter((pref) => pref.prefCode >= 40 && pref.prefCode <= 47)
  return {
    state: {
      tabIndex,
      dividePrefLists: [
        allPrefList,
        HOKKAIDO_AND_TOHOKU_PrefList,
        KANTO_PrefList,
        TYUBU_PrefList,
        KINKI_PrefList,
        TYUUGOKU_PrefList,
        SHIKOKU_PrefList,
        KYUSYU_AND_OKINAWA_PrefList,
      ],
    },
    action: {
      selectTab,
    },
  }
}
