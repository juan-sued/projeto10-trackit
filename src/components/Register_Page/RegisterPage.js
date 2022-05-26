import styled from 'styled-components';

import Main from '../Main';
import logo from '../../assets/logo.svg';
import InputsRegister from './InputRegister';
export default function Register() {
  return (
    <Main>
      <MainClass>
        <LogoRegister src={logo} alt="Essa é a Logo" />
        <InputsRegister />

        <ButtonUnderlined>Já tem uma conta? Faça login!</ButtonUnderlined>
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
