import styled from 'styled-components';
// import

import { useState, useEffect, useContext } from 'react';
//import react

import UserContext from '../../contexts/UserContext';

import axios from 'axios';
//import axios

import { ThreeDots } from 'react-loader-spinner';
//import loads

import Footer from '../shared/Footer';
import Header from '../shared/Header';
import Main from '../shared/Main';
import CardHabitToday from './CardHabitToday/CardHabitToday';
import TopMainBarToday from './TopMainBarToday';
// imports component

export function TodayPage() {
  // variável de estado que guarda os objetos de cards historics
  const { objLoginResponse } = useContext(UserContext);

  // headerToken
  const config = {
    headers: {
      Authorization: `Bearer ${objLoginResponse.token}`
    }
  };

  const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';

  const [arrCardsHabitToday, setArrCardsHabitToday] = useState(null);
  const [keyRequestCardsToday, setKeyRequestCardsToday] = useState(false);

  useEffect(() => {
    const promise = axios.get(URL, config);

    promise.then(promise => {
      setArrCardsHabitToday(promise.data);
    });
    promise.catch(err => console.log(err));
  }, [keyRequestCardsToday]);

  return (
    <>
      <Header />
      <Main>
        <MainClass>
          <TopMainBarToday />

          {arrCardsHabitToday === null ? (
            <ContainerLoading>
              <ThreeDots color="#52b6ff" height={40} width={40} />
            </ContainerLoading>
          ) : (
            arrCardsHabitToday.map((CardToday, index) => (
              <CardHabitToday
                key={index}
                id={CardToday.id}
                name={CardToday.name}
                done={CardToday.done}
                currentSequence={CardToday.currentSequence}
                highestSequence={CardToday.highestSequence}
                config={config}
                keyRequestCardsToday={keyRequestCardsToday}
                setKeyRequestCardsToday={setKeyRequestCardsToday}
              />
            ))
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
  margin-top: 80px;
  background-color: transparent;
  margin-bottom: 100px;
`;
