import { MainHeader } from './styles';
import Container from "@/components/layout/Container";
import Image from "next/image"

const Header = () => {
  return (
      <Container $as={MainHeader}>
        <div className="max-w-[12rem]">
          <Image src="iso.svg" fill="responsive" width={150} height={150} className="fill-white"  />
        </div>
        <div className="flex-1"></div>
      </Container>
  )
}

export default Header