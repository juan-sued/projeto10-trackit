import styled from 'styled-components';
import ButtonsDays from './ButtonsDays';

export default function CardCreateHabit({ daysSelecteds, setDaysSelecteds }) {
  return (
    <CardCreateHabitClass>
      <input type="text" placeholder="nome do hábito" />
      <ButtonsDays daysSelecteds={daysSelecteds} setDaysSelecteds={setDaysSelecteds} />
      <Container>
        <p>Cancelar</p>
        <button>Salvar</button>
      </Container>
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

    color: red;
  }
`;
