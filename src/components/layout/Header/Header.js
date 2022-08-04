import Container from "@/components/layout/Container"
import Link from "next/link"
import { MainHeader } from "./styles"

const LINKS = [
  { title: "Nosotros", route: "/nosotros" },
  { title: "Eventos", route: "/eventos" },
  { title: "Blog", route: "/blog" },
]

const Header = () => {
  return (
    <MainHeader>
      <Container className="flex justify-between w-full h-full py-2">
        <Link href="/">
          <a className="w-24 uppercase">logo</a>
        </Link>

        <nav className="flex px-3">
          <ul className="flex flex-1 space-x-1">
            {LINKS.map(({ title, route }, index) => (
              <li key={`nav-top-${index}`} className="relative px-2 uppercase">
                <Link href={route}>
                  <a className="absolute inset-0"></a>
                </Link>
                <span>{title}</span>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/contacto">
          <a className="uppercase">contáctanos</a>
        </Link>
      </Container>
    </MainHeader>
  )
}

export default Header