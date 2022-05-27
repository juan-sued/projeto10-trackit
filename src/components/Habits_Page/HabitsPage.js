import styled from 'styled-components';
// import css
import { useState } from 'react';
//import react
import Header from '../shared/Header';
import Main from '../shared/Main';
import TopMainBar from './TopMainBar';
import CardCreateHabit from './CardCreateHabit/CardCreateHabit';
import TextNoHabits from './TextNoHabits';
import Footer from '../shared/Footer';
//  import components

export default function HabitsPage() {
  //variável de estado que guarda o estado do cardCreateHabit
  const [showCardCreateHabit, setShowCardCreateHabit] = useState(false);

  //função que esconde ou mostra o cardCreateHabit
  function displayNoneToggle() {
    setShowCardCreateHabit(!showCardCreateHabit);
  }
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
            <CardCreateHabit displayNoneToggle={displayNoneToggle} />
          )}

          <TextNoHabits />
        </MainClass>
      </Main>
      <Footer />
    </>
  );
}

const MainClass = styled.main`
  margin-top: 69px;
  background-color: transparent;
`;
