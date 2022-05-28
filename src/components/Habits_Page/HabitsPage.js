import styled from 'styled-components';
// import css

import UserContext from '../../contexts/UserContext';
import { useState, useEffect, useContext } from 'react';
//import react

import Header from '../shared/Header';
import Main from '../shared/Main';
import TopMainBar from './TopMainBar';
import CardCreateHabit from './CardCreateHabit/CardCreateHabit';
import CardHabitHistoric from './CardHabitHistoric/CardHabitHistoric';
import TextNoHabits from './TextNoHabits';
import Footer from '../shared/Footer';
//  import components

import { ThreeDots } from 'react-loader-spinner';
//import loading

import axios from 'axios';
//import axios

export default function HabitsPage() {
  //variável de estado que guarda o estado do cardCreateHabit
  const [showCardCreateHabit, setShowCardCreateHabit] = useState(false);

  //função que esconde ou mostra o cardCreateHabit
  function displayNoneToggle() {
    setShowCardCreateHabit(!showCardCreateHabit);
  }

  //variável de estado que guarda o response do login
  const { objLoginResponse } = useContext(UserContext);

  //url de get dos cardsHabitHistoric
  const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits';

  // variável de estado que guarda os objetos de cards historics
  const [objHistoricCardsHabit, setObjHistoricCardsHabit] = useState(null);

  // headerToken
  const config = {
    headers: {
      Authorization: `Bearer ${objLoginResponse.token}`
    }
  };
  //variável de estado que atualiza a lista de cards
  const [keyRequest, setKeyRequest] = useState(false);
  // atualiza a lista de cardsHabits
  useEffect(() => {
    const promise = axios.get(URL, config);
    promise.then(promise => {
      setObjHistoricCardsHabit(promise.data);
    });
    promise.catch(err => console.log(err));
  }, [keyRequest]);

  return (
    <>
      <Header />
      <Main>
        <MainClass>
          <TopMainBar
            displayNoneToggle={displayNoneToggle}
            showCardCreateHabit={showCardCreateHabit}
          />
          {!showCardCreateHabit ? (
            ''
          ) : (
            <CardCreateHabit
              displayNoneToggle={displayNoneToggle}
              setKeyRequest={setKeyRequest}
              keyRequest={keyRequest}
            />
          )}
          {objHistoricCardsHabit === null ? (
            <ContainerLoading>
              <ThreeDots color="#52b6ff" height={40} width={40} />
            </ContainerLoading>
          ) : (
            objHistoricCardsHabit.map((cardHabit, index) => (
              <CardHabitHistoric
                key={index}
                habit={cardHabit.name}
                id={cardHabit.id}
                days={cardHabit.days}
                token={objLoginResponse.token}
                setKeyRequest={setKeyRequest}
                keyRequest={keyRequest}
              />
            ))
          )}
          {objHistoricCardsHabit !== null && objHistoricCardsHabit.length > 0 ? (
            ''
          ) : (
            <TextNoHabits />
          )}
        </MainClass>
      </Main>
      <Footer />
    </>
  );
}
const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 20px;
`;
const MainClass = styled.main`
  margin-top: 69px;
  background-color: transparent;
  margin-bottom: 100px;
`;
