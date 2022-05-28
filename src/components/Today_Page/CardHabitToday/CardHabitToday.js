import styled from 'styled-components';
// import
import checkIcon from '../../../assets/checkIcon.svg';
//import assets

import axios from 'axios';
import { useState } from 'react';
// import axios

import { BallTriangle } from 'react-loader-spinner';
//import loads

export default function CardHabitToday({
  id,
  name,
  done,
  currentSequence,
  highestSequence,
  config,
  keyRequestCardsToday,
  setKeyRequestCardsToday
}) {
  const URL_ChekedOn = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
  const URL_ChekedOff = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;

  const [loading, setLoading] = useState(false);

  function cardCheckedOff(event) {
    event.preventDefault();
    setLoading(!loading);
    const promise = axios.post(URL_ChekedOff, {}, config);
    promise.then(promise => {
      setKeyRequestCardsToday(!keyRequestCardsToday);
      setLoading(false);
    });
    promise.catch(err => console.log('o err é: ', err));
  }

  function cardCheckedOn(event) {
    event.preventDefault();
    setLoading(!loading);
    const promise = axios.post(URL_ChekedOn, {}, config);
    promise.then(promise => {
      setKeyRequestCardsToday(!keyRequestCardsToday);
      setLoading(false);
    });
    promise.catch(err => console.log('o err é: ', err));
  }

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
        <form onSubmit={done ? cardCheckedOff : cardCheckedOn}>
          <BigCheckBox type="submit" background={done ? '#8FC549' : '#ebebeb'}>
            {loading ? (
              <ContainerLoading>
                <BallTriangle color="white" height={40} width={40} />
              </ContainerLoading>
            ) : (
              <img src={checkIcon} alt="" />
            )}
          </BigCheckBox>
        </form>
      </SpanContainer>
    </CardHabitTodayClass>
  );
}

const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 20px;
`;

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

const BigCheckBox = styled.button`
  font-size: 69px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.background};
  border-radius: 5px;
  min-width: 69px;
  height: 69px;
  border: none;
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
