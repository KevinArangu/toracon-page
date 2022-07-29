import MainLayout from "@/components/layout/MainLayout"
import { AppContextProvider } from "@/context/AppContext"
import "@/styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AppContextProvider>
  )
}

export default MyApp
