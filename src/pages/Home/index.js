import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import {
  HiOutlineClipboardList,
  HiOutlineDocumentReport,
} from "react-icons/hi";
import { FiUsers } from "react-icons/fi";

import { Container } from "./styles";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <Link>
        <p>
          <AiOutlineSearch size={40} />
        </p>
        <p>Procurar Cadastro</p>
      </Link>

      <Link>
        <p>
          <HiOutlineClipboardList size={40} />
        </p>
        <p>Iniciar Questionário</p>
      </Link>

      <Link>
        <p>
          <HiOutlineDocumentReport size={40} />
        </p>
        <p>Visualizar Relatório</p>
      </Link>

      <Link>
        <p>
          <FiUsers size={40} />
        </p>
        <p>Gerenciar Usuários</p>
      </Link>
    </Container>
  );
}
