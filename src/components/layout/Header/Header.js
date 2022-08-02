import { MainHeader } from './styles';
import Container from "@/components/layout/Container";

const Header = () => {
  return (
    <MainHeader $as={Container}>
      <span className="text-xl text-white">Toracon</span>
    </MainHeader>
  )
}

export default Header