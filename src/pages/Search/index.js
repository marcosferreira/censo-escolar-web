import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <h1>Procurar Cadastro</h1>

      <form>
        <fieldset>
          <input type="text" name="search" placeholder="Digite para pesquisar" required />
          <button><AiOutlineSearch size={26} /></button>
        </fieldset>
      </form>
    </Container>
  );
}
