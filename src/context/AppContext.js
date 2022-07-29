import { createContext, useContext } from "react"

export const AppContext = createContext()

export const AppContextProvider = ({ children, ...props }) => {
  const value = {}
  return (
    <AppContext.Provider value={value} {...props}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) throw new Error("useApp must be used with AppContextProvider")
  return context
}
