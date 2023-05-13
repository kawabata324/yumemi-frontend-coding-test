import { PrefList } from "@/types/pref"

export type ResasResponseStatus200<T> = {
  message: null
  result: T
}

export type PrefecturesResponse200 = ResasResponseStatus200<PrefList>

export type ResasResponseError = {
  statusCode: string
  message?: string
  description?: string
}
