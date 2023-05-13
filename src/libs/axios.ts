import axios from "axios"

const apiKey = process.env.NEXT_PUBLIC_RESAS_API_KEY
if (!apiKey && process.env.NODE_ENV !== "test") {
  throw new Error("REAS_API_KEY is not defined")
}
export const resasApi = axios.create({
  baseURL: "https://opendata.resas-portal.go.jp/api/v1",
  headers: {
    "Content-Type": "application/json",
    "X-API-KEY": apiKey,
  },
})
