import logo from '../../assets/logo.svg';
import styled from 'styled-components';
import Main from '../Main';
import InputsLogin from './InputsLogin';

export default function LoginPage() {
  return (
    <Main>
      <MainClass>
        <LogoLogin src={logo} alt="Essa é a Logo" />
        <InputsLogin />
        <ButtonUnderlined>Não tem uma conta? Cadastre-se!</ButtonUnderlined>
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
