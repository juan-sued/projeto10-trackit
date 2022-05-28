import styled from 'styled-components';
import ButtonsDaysHistoric from './ButtonDaysHistoric';
import UserContext from '../../../contexts/UserContext';
import { useContext } from 'react';

export default function CardHabitHistoric({ habit, id, days }) {
  return (
    <CardHabitClass>
      <Container>
        <h3>{habit}</h3>
        <ContainerIcon>
          <ion-icon name="trash-outline"></ion-icon>
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
