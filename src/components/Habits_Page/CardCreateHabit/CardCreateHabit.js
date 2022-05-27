import { useState, useContext } from 'react';
import styled from 'styled-components';
import ButtonsDays from './ButtonsDays';
import axios from 'axios';
import UserContext from '../../../contexts/UserContext';

export default function CardCreateHabit() {
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
    objNewHabitPost.name = inputNewHabit;
    objNewHabitPost.days = daysSelecteds.map(indexDay => indexDay - 1);
    setObjNewHabitPost({ ...objNewHabitPost });
    const body = objNewHabitPost;
    const promise = axios.post(URL, body, config);

    promise.then(response => console.log('enviado com sucesso: ', response.data));
    promise.catch(err => console.log('deu ruim!!', err));
  }

  return (
    <CardCreateHabitClass>
      <form onSubmit={submitData}>
        <input
          type="text"
          placeholder="nome do hábito"
          value={inputNewHabit}
          onChange={e => setInputNewHabit(e.target.value)}
        />
        <ButtonsDays daysSelecteds={daysSelecteds} setDaysSelecteds={setDaysSelecteds} />
        <Container>
          <p>Cancelar</p>
          <button type="submit">Salvar</button>
        </Container>
      </form>
    </CardCreateHabitClass>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 29px;
  button {
    font-family: 'Lexend Deca';
    border: none;
    width: 84px;
    height: 35px;
    background: #52b6ff;
    border-radius: 4.63636px;
    color: white;
  }
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
