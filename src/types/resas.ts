import { PrefList } from "@/types/pref"

export type ResasReponseStatus200<T> = {
  message: null
  result: T
}

export type PrefecturesResponse200 = ResasReponseStatus200<PrefList>
