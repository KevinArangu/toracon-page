import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { Main } from "./styles"
import Container from "@/components/layout/Container";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <Main $as={Container}>{children}</Main>
      <Footer />
    </>
  )
}

export default MainLayout
