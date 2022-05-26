import styled from 'styled-components';
// import css

import { Link } from 'react-router-dom';
//import react

import Main from '../shared/Main';
import logo from '../../assets/logo.svg';
import InputsRegister from './InputRegister';
// import components

export default function Register() {
  return (
    <Main>
      <MainClass>
        <LogoRegister src={logo} alt="Essa é a Logo" />
        <InputsRegister />
        <Link to="/">
          <ButtonUnderlined>Já tem uma conta? Faça login!</ButtonUnderlined>
        </Link>
      </MainClass>
    </Main>
  );
}

const MainClass = styled.main`
  background-color: white;
  height: 900px;
`;

const LogoRegister = styled.img`
  width: 180px;
  margin-top: 120px;
`;

const ButtonUnderlined = styled.button`
  margin-top: 18px;
  background-color: transparent;
  border: none;
  text-decoration: underline;
  color: #52b6ff;
`;
