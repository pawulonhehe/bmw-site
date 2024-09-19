import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background: #697565;
    width: 250px;
    height: 80px;
    text-align: center;
    color: white;
    border-radius: 5px;
    border: none;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 24px;

`
const MainContainer = styled.div`
    width: 100%;
    height: 100px;
    text-align center;
    background: #3C3D37;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`;

function Header() {
  return (
    <MainContainer>
    <Button>Przycisk</Button>
    <Button>Przycisk</Button>
    <Button>Przycisk</Button>
    <Button>Przycisk</Button>
    <Button>Przycisk</Button>
    </MainContainer>
  );
}

export default Header;
