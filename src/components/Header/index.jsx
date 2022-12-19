import { Container } from "./styles";
import { Input } from "../Input";

export function Header() {
  return(
    <Container>
      <h1>RocketMovies</h1>

      <div className="input-area">
        <Input placeholder="Pesquisar pelo título"/>
      </div>

      <div>
        <div className="user-perfil">  
          <span>Antonio Brito</span>
          <strong>Sair</strong>
        </div>

        <img src="https://github.com/antoniodebrito.png" alt="" />
      </div>
    </Container>
  )
}