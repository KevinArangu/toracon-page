import { MainContainer } from "./styles"

const Container = ({children, ...props}) => {
  return (
    <MainContainer {...props}>{children}</MainContainer>
  )
}

export default Container;