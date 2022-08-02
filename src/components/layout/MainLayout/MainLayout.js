import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const MainLayout = ({ children }) => {

  return <>
  <Header></Header>
  <main>{children}</main>
  <Footer></Footer>
  </>
}

export default MainLayout
