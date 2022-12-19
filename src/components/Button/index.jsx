import { Container } from "./styles";

export function Button({title, icon: Icon}) {
  return(
    <Container>
      {Icon && <Icon />}
      {title}
    </Container>
  )
}