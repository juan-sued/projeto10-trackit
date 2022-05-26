import { Link } from 'react-router-dom';
//import react

import styled from 'styled-components';
//import css

import Main from '../shared/Main';
import InputsLogin from './InputsLogin';
//import components

import logo from '../../assets/logo.svg';
// import assets

export default function LoginPage() {
  return (
    <Main>
      <MainClass>
        <LogoLogin src={logo} alt="Essa é a Logo" />
        <InputsLogin />
        <Link to="/cadastro">
          <ButtonUnderlined>Não tem uma conta? Cadastre-se!</ButtonUnderlined>
        </Link>
      </MainClass>
    </Main>
  );
}
const MainClass = styled.main`
  background-color: white;
  height: 900px;
`;

const LogoLogin = styled.img`
  width: 180px;
  margin-top: 150px;
`;

const ButtonUnderlined = styled.button`
  margin-top: 18px;
  background-color: transparent;
  border: none;
  text-decoration: underline;
  color: #52b6ff;
`;
