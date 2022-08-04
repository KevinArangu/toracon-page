import { MainHeader } from './styles';
import Container from "@/components/layout/Container";
import Image from "next/image";
import Link from "next/link";

const LINKS = [{ title: "Nosotros", route: "/nosotros" }, { title: "Eventos", route: "/eventos" }, { title: "Contáctanos", route: "/contacto" }, { title: "Blog", route: "/blog" }]

const Header = () => {
  return (
    <MainHeader>
      <Container className="flex py-2 w-full h-full">
        <div className="text-white">LOGO</div>
        <nav className="flex-1 flex">
          <ul className="flex-1 flex space-x-1">
            {LINKS.map(({ title, route }, index) => <li key={`nav-top-${index}`} className="relative uppercase px-2">
              <Link>
                <a className="absolute inset-0" href={route}></a>
              </Link>
              <span>{title}</span>
            </li>)}
          </ul>
        </nav>
      </Container>
    </MainHeader>
  )
}

export default Header