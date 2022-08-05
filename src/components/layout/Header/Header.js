import Linked from "@/components/common/Linked"
import Container from "@/components/layout/Container"
import Image from "next/image"
import { MainHeader } from "./styles"
import {MenuIcon} from "@heroicons/react/solid"

const LINKS = [
  { title: "Nosotros", route: "/nosotros" },
  { title: "Eventos", route: "/eventos" },
  { title: "Blog", route: "/blog" },
]

const Header = () => {
  return (
    <MainHeader>
      <Container className="flex items-center justify-between w-full h-full py-2">
        <Linked href="/" className="h-full w-12 shrink-0 uppercase relative text-white">
          <Image
            src="/iso.svg"
            layout="fill"
            width={100}
            height={100}
          />
        </Linked>

        <nav className="hidden md:flex px-3">
          <ul className="flex flex-1 items-center space-x-1">
            {LINKS.map(({ title, route }, index) => (
              <li key={`nav-top-${index}`} className="relative px-2 uppercase text-sm font-medium">
                <Linked href={route} className="absolute inset-0"></Linked>
                <span>{title}</span>
              </li>
            ))}
          </ul>
        </nav>

        <Linked href="/contacto" className="px-2 uppercase text-sm font-medium hidden md:block">
          contáctanos
        </Linked>

        <MenuIcon className="w-6 h-6 md:hidden" />
      </Container>
    </MainHeader>
  )
}

export default Header
