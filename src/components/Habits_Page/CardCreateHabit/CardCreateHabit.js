import { useState, useContext } from 'react';
import styled from 'styled-components';
import ButtonsDays from './ButtonsDays';
import axios from 'axios';
import UserContext from '../../../contexts/UserContext';
import { ThreeDots } from 'react-loader-spinner';
export default function CardCreateHabit({ displayNoneToggle }) {
  //variável que guarda o valor do response de login
  const { objLoginResponse } = useContext(UserContext);
  //header com token
  const config = {
    headers: {
      Authorization: `Bearer ${objLoginResponse.token}`
    }
  };

  const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';

  const [inputNewHabit, setInputNewHabit] = useState('');
  const [daysSelecteds, setDaysSelecteds] = useState([]);
  const [objNewHabitPost, setObjNewHabitPost] = useState({
    name: '',
    days: []
  });
  //função que pega os dados de criação do cartão
  function submitData(event) {
    event.preventDefault();

    setLoading('loading');

    objNewHabitPost.name = inputNewHabit;
    objNewHabitPost.days = daysSelecteds.map(indexDay => indexDay - 1);
    setObjNewHabitPost({ ...objNewHabitPost });
    const body = objNewHabitPost;
    const promise = axios.post(URL, body, config);

    promise.then(response => {
      console.log('enviado com sucesso: ', response.data);
      displayNoneToggle();
    });
    promise.catch(err => {
      setLoading(err.response.status);
      console.log('deu ruim!!', err);
    });
    setInputNewHabit('');
  }

  const [loading, setLoading] = useState('');

  if (loading === 401 && inputNewHabit.length > 0) {
    setLoading('habilitado');
  }
  return (
    <CardCreateHabitClass>
      <form onSubmit={submitData}>
        <input
          type="text"
          placeholder="nome do hábito"
          value={inputNewHabit}
          onChange={e => setInputNewHabit(e.target.value)}
          disabled={loading === 'loading' ? 'disable' : ''}
        />
        <ButtonsDays daysSelecteds={daysSelecteds} setDaysSelecteds={setDaysSelecteds} />
        <Container>
          <p onClick={displayNoneToggle}>Cancelar</p>
          <ButtonSaveCard
            type="submit"
            disabled={loading === 401 || loading === 'loading' ? 'disable' : ''}
            backgroundcolor={
              loading === 401 ? '#d4d4d4' : loading === 'loading' ? '#86CCFF' : '#52B3FF'
            }
          >
            {loading === 'loading' ? (
              <ContainerLoading>
                <ThreeDots color="white" height={40} width={40} />
              </ContainerLoading>
            ) : loading === 401 ? (
              `Erro: ${loading}`
            ) : (
              'Salvar'
            )}
          </ButtonSaveCard>
        </Container>
      </form>
    </CardCreateHabitClass>
  );
}
const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 20px;
`;

const ButtonSaveCard = styled.button`
  font-family: 'Lexend Deca';
  border: none;
  width: 84px;
  height: 35px;
  background: ${props => props.backgroundcolor};
  border-radius: 4.63636px;
  color: white;
`;

const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 29px;

  p {
    color: #52b6ff;
    margin-right: 23px;
  }
`;

const CardCreateHabitClass = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 16px;
  border-radius: 5px;

  input {
    font-family: 'Lexend Deca';
    width: 303px;
    height: 45px;
    font-size: 19.976px;
    background: #ffffff;
    border: 1px solid #dbdbdb;
    border-radius: 5px;

    color: #666666;
    ::placeholder {
      color: #dbdbdb;
    }
  }
`;
