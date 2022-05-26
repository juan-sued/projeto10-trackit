import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function InputsLogin() {
  return (
    <ContainerFormClass>
      <form>
        <InputClass placeholder="batata" type="text" />
        <InputClass placeholder="batata" type="text" />
        <Link to={`/cadastro`}>
          <button>Entrar</button>
        </Link>
      </form>
    </ContainerFormClass>
  );
}

const ContainerFormClass = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 155px;
  }
  button {
    width: 303px;
    height: 45px;
    background: #52b6ff;
    border-radius: 4.63636px;
    border: none;
    font-size: 20.976px;
    color: white;
    font-family: 'Lexend Deca', sans-serif;
  }
`;

const InputClass = styled.input`
  font-size: 18px;
  font-style: italic;
  width: 303px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
`;
