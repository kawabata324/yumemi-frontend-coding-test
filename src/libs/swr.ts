import { resasApi } from "@/libs/axios"

export const fetcher = (url: string) => resasApi.get(url).then((res) => res.data)
