import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"

const MainLayout = ({ children }) => {

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 pt-10">{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
