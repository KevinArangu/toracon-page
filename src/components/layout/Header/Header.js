import { MainHeader } from './styles';
import Container from "@/components/layout/Container";

const Header = () => {
  return (
    <MainHeader>
      <Container>
        <span className="text-xl text-white">Toracon</span>
      </Container>
    </MainHeader>
  )
}

export default Header