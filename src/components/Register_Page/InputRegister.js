import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function InputsRegister() {
  const navigate = useNavigate();

  const [inputEmail, setInputEmail] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputImage, setInputImage] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [objNewRegister, setObjNewRegister] = useState({
    email: '',
    name: '',
    image: '',
    password: ''
  });

  const URL = 'http://localhost:5000/sign-up';

  const [stateButton, setStateButton] = useState('habilitado');

  function newRegister(event) {
    event.preventDefault();
    setStateButton('loading');
    // ===
    objNewRegister.email = inputEmail;
    objNewRegister.name = inputName;
    objNewRegister.image = inputImage;
    objNewRegister.password = inputPassword;
    // ===

    setObjNewRegister({ ...objNewRegister });

    const promise = axios.post(URL, objNewRegister);
    console.log(objNewRegister);
    promise.then(() => {
      navigate('../', { replace: true });
    });
    promise.catch(err => {
      console.log(err);
      setStateButton('err');
    });
    setInputEmail('');
    setInputName('');
    setInputImage('');
    setInputPassword('');
  }

  if (stateButton === 'err' && inputEmail.length > 0) {
    setStateButton('habilitado');
  }

  return (
    <ContainerFormClass>
      <form onSubmit={newRegister}>
        <InputClass
          placeholder="email"
          type="email"
          value={inputEmail}
          onChange={e => setInputEmail(e.target.value)}
          required
        />
        <InputClass
          placeholder="name"
          type="text"
          value={inputName}
          onChange={e => setInputName(e.target.value)}
          required
        />
        <InputClass
          placeholder="Url da foto"
          type="url"
          value={inputImage}
          onChange={e => setInputImage(e.target.value)}
          required
        />
        <InputClass
          placeholder="password"
          type="text"
          value={inputPassword}
          onChange={e => setInputPassword(e.target.value)}
          required
        />

        <RegisterButton
          backgroundcolor={
            stateButton === 'err'
              ? '#d4d4d4'
              : stateButton === 'loading'
              ? '#86CCFF'
              : '#52B3FF'
          }
          type="submit"
        >
          {stateButton === 'err' ? (
            'Usuário já cadastrado!'
          ) : stateButton === 'loading' ? (
            <ContainerLoading>
              <ThreeDots color="white" height={40} width={40} />
            </ContainerLoading>
          ) : (
            'Cadastrar'
          )}
        </RegisterButton>
      </form>
    </ContainerFormClass>
  );
}

const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 20px;
`;

const RegisterButton = styled.button`
  width: 303px;
  height: 45px;
  background: ${props => props.backgroundcolor};
  border-radius: 4.63636px;
  border: none;
  font-size: 20.976px;
  color: white;
  font-family: 'Lexend Deca', sans-serif;
  :hover {
    cursor: pointer;
  }
`;

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
    height: 280px;
  }
`;

const InputClass = styled.input`
  font-size: 18px;
  font-style: italic;
  width: 303px;
  height: 45px;
  background: #ffffff;
  border: 1px solid #d4d4d4;
  font-family: 'Lexend Deca', sans-serif;
  border-radius: 5px;
  padding-left: 10px;

  color: #dbdbdb;
  ::placeholder {
    color: #dbdbdb;
  }
`;
