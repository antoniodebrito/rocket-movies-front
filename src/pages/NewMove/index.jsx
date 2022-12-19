import { Container, Bookmarks, Footer } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { Genre } from "../../components/Genre";
import { Button } from "../../components/Button";


export function NewMove() {
  return (
    <Container>
      <Header />

      <main>
        <ButtonText title="Voltar"/>

        <h1>
          Novo filme
        </h1>

        <div>
          <Input placeholder="Título"/>
          <Input placeholder="Sua nota(de 0 a 5)" />
        </div>

        <Textarea placeholder="Observações"/>

        <Section title="Marcadores">
          <Bookmarks>
            <Genre
             placeholder="Ficção Científica"
            />
            <Genre
              placeholder="Novo marcador"
              isNew
            /> 
          </Bookmarks>
        </Section>

        <Footer>
            <Button title="Excluir filme"/>
            <Button title="Salvar alterações" />
        </Footer>
      </main>
    </Container>
  )
}

