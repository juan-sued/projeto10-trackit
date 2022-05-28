import styled from 'styled-components';
import ButtonsDaysHistoric from './ButtonDaysHistoric';
import axios from 'axios';
export default function CardHabitHistoric({ habit, id, days, token }) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };

  const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;

  function deleteCard() {
    const confirm = prompt(
      'Excluir hábito?                                    (vai ter um pop-up bonito aqui um dia, confia'
    );
    if (confirm === null || confirm === '') {
      return;
    } else if (confirm[0].toLocaleLowerCase() === 's') {
      const promise = axios.delete(URL, config);
      promise.then(promise => console.log('card excluído', promise.data));
      promise.catch(err => console.log(err));
    } else {
      return;
    }
  }

  return (
    <CardHabitClass>
      <Container>
        <h3>{habit}</h3>
        <ContainerIcon>
          <ion-icon name="trash-outline" onClick={deleteCard}></ion-icon>
        </ContainerIcon>
      </Container>
      <ButtonsDaysHistoric daysObj={days} />
    </CardHabitClass>
  );
}

const ContainerIcon = styled.div`
  position: relative;
  bottom: 5px;
  left: 4px;
  ion-icon {
    color: #666666;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    color: #666666;
  }
`;

const CardHabitClass = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 340px;
  min-height: 91px;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
`;
