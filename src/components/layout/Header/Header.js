import { MainHeader } from './styles';
import Container from "@/components/layout/Container";
import Image from "next/image"

const Header = () => {
  return (
    <MainHeader>
      <Container className="flex py-2 w-full h-full">
        <div className="text-white">LOGO</div>
        <div className="flex-1"></div>
      </Container>
    </MainHeader>
  )
}

export default Header