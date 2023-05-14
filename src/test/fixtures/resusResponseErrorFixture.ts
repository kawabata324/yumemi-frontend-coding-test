import { ResasResponseError } from "@/types/resas"

export const resasResponse400Error: ResasResponseError = {
  statusCode: "400",
}

export const resasResponse403Error: ResasResponseError = {
  statusCode: "403",
  message: "Forbidden.",
  description: "",
}

export const resasResponse404Error: ResasResponseError = {
  statusCode: "404",
  message: "404. That's an error.",
  description: "The requested URL /404 was not found on this server.",
}

export const resasResponse429Error: ResasResponseError = {
  statusCode: "429",
}
export const resasResponse500Error: ResasResponseError = {
  statusCode: "500",
}
