import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

import Sidebar from '../Sidebar';

import { Container } from './styles';
import logo from '../../assets/logo.png';

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log(showSidebar);
  }

  return (
    <React.Fragment>
      {location.pathname !== '/' && location.pathname !== '/signup' ? (
        <Container>
          <img src={logo} alt="logo" />

          <button onClick={handleShowSidebar} >
            <AiOutlineMenu size={26} />
          </button>

          <Sidebar show={showSidebar} />
        </Container>
      ) : null}
    </React.Fragment>
  );
}
