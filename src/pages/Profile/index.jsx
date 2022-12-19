import { Container, Form, Avatar } from "./styles";

import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";


export function Profile() {
  return(
    <Container>
      <header>
        <ButtonText title="Voltar"/>
      </header>

      <Form>

        <Avatar>
          <img src="https://github.com/antoniodebrito.png" alt="Foto do usuário" />

          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input 
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="email"
          icon={FiMail}
        />

        <Input
          placeholder="Senha Atual"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Salvar" />
      </Form>
    </Container>
  )
}