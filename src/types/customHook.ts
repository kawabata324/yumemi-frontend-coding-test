export type CustomHook<T extends { [key: string]: any }, S extends { [key: string]: Function }> = (args?: any) => {
  state: T
  action: S
}
