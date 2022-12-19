import { BackgroundImg, Container, Form } from "./styles";
import { FiLock, FiMail, FiUser } from "react-icons/fi";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


export function SignUp() {
  return(
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>
          Aplicação para acompanhar tudo que assistir.
        </p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input 
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha"
          type="text"
          icon={FiLock}
        />

        <Button title="Entrar"/>

        <a href="#">Voltar para o login</a>
      </Form>

      <BackgroundImg />
    </Container>
  )
}