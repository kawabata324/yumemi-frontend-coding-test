import { createContext, useState } from "react"

type LoadingContextType = {
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
}

export const LoadingContext = createContext<LoadingContextType>({
  isLoading: false,
  setIsLoading: () => {},
})
export const useLoadingHelper = () => {
  const [isLoading, setIsLoading] = useState(false)
  return { isLoading, setIsLoading }
}
