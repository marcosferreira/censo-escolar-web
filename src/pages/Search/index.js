import React, { useEffect, useState } from 'react';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';

import { Container, PanelResult, CardPerson, CardBody } from './styles';

function Search() {
  const [visibility, setVisibility] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    query ? setVisibility(true) : setVisibility(false);
    console.log(query);
  }, [query]);

  return (
    <Container visibility={visibility ? '-150px' : '0'}>
      <h1>Procurar Cadastro</h1>

      <form>
        <fieldset>
          <input
            type="text"
            name="query"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Digite para pesquisar"
            required
          />
          <button>
            <AiOutlineSearch size={26} />
          </button>
        </fieldset>
      </form>

      <PanelResult visibility={visibility ? 'block' : 'none'}>
        <CardPerson>
          <AiOutlineUser size={60} />
          <CardBody>
            <p>
              <b>NOME</b>: MARIA JOSE DA SILVA
            </p>
            <p>
              <b>ENDEREÇO</b>: SÍTIO COZINHA
            </p>
          </CardBody>
        </CardPerson>

        <CardPerson>
          <AiOutlineUser size={60} />
        </CardPerson>
      </PanelResult>
    </Container>
  );
}

export default Search;
