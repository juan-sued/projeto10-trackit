import styled from 'styled-components';
// import
import checkIcon from '../../../assets/checkIcon.svg';
//import assets

export default function CardHabitToday({
  id,
  name,
  done,
  currentSequence,
  highestSequence
}) {
  return (
    <CardHabitTodayClass>
      <SpanContainer>
        <Container>
          <h3>{name}</h3>
          <div>
            <p>Sequência atual: {currentSequence} dias</p>
            <p>Seu recorde: {highestSequence} dias</p>
          </div>
        </Container>
        <BigCheckBox background={done ? '#8FC549' : '#ebebeb'}>
          <img src={checkIcon} alt="" />
        </BigCheckBox>
      </SpanContainer>
    </CardHabitTodayClass>
  );
}

const CardHabitTodayClass = styled.div`
  background-color: white;
  padding: 13px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 94px;
  width: 340px;
  margin-bottom: 10px;
`;

const BigCheckBox = styled.div`
  font-size: 69px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.background};
  border-radius: 5px;
  min-width: 69px;
  height: 69px;
`;

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;

  height: 100%;
  h3 {
    font-size: 20px;
    color: #666666;
    margin-bottom: 7px;
  }

  p {
    font-size: 13px;
  }
`;
const SpanContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
`;
