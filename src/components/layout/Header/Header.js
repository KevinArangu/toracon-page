import { MainHeader } from './styles';
import Container from "@/components/layout/Container";
import Image from "next/image"

const Header = () => {
  return (
    <MainHeader>
      <Container className="flex py-2 w-full">
        <div className="max-w-[12rem]">
          <img src="iso.svg" fill="responsive" width={150} height={150} className="fill-white" />
        </div>
        <div className="flex-1"></div>
      </Container>
    </MainHeader>
  )
}

export default Header