import { MainHeader } from './styles';
import Container from "@/components/layout/Container";
import Image from "next/image"

const Header = () => {
  return (
    <MainHeader>
      <Container className="flex py-2 w-full">
        <div className="h-full">
          <img src="iso.svg" fill="responsive" className="fill-white" />
        </div>
        <div className="flex-1"></div>
      </Container>
    </MainHeader>
  )
}

export default Header