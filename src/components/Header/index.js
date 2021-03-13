import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose, AiOutlineArrowLeft } from 'react-icons/ai';

import Sidebar from '../Sidebar';

import { Container, HeaderGroupButton } from './styles';
import logo from '../../assets/logo.png';

const useOutside = (ref, setIsMenuOpen) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setTimeout(() => setIsMenuOpen(false), 200);
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setIsMenuOpen]);
};

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);
  const wrapperRef = useRef(null);
  const location = useLocation();
  const history = useHistory();

  useOutside(wrapperRef, setShowSidebar);

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <React.Fragment>
      {location.pathname !== '/' && location.pathname !== '/signup' ? (
        <Container>
          <img src={logo} alt="logo" />

          <HeaderGroupButton>
            {location.pathname !== '/home' ? (
              <button onClick={() => history.goBack()}>
                <AiOutlineArrowLeft size={26} />
              </button>
            ) : null}

            <button ref={wrapperRef} onClick={handleShowSidebar}>
              {showSidebar ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
            </button>
          </HeaderGroupButton>

          <Sidebar show={showSidebar} />
        </Container>
      ) : null}
    </React.Fragment>
  );
}
