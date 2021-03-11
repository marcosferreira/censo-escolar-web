import React, { useEffect, useState } from 'react';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';

import { Container, CardPerson } from './styles';

export default function Home() {
  const [visibility, setVisibility] = useState('none');
  const [query, setQuery] = useState('');

  useEffect(() => {
    query ? setVisibility('block') : setVisibility('none')
    console.log(query);
  }, [query]);

  return (
    <Container>
      <h1>Procurar Cadastro</h1>

      <form>
        <fieldset>
          <input type="text" name="query" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Digite para pesquisar" required />
          <button>
            <AiOutlineSearch size={26} />
          </button>
        </fieldset>
      </form>

      <CardPerson visibility={visibility}>
        <AiOutlineUser size={48} />
      </CardPerson>

      <CardPerson visibility={visibility}>
        <AiOutlineUser size={48} />
      </CardPerson>
    </Container>
  );
}
