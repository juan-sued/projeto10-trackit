import styled from 'styled-components';
// import css
import { useState } from 'react';
//import react
import Header from '../Header';
import Main from '../Main';
import TopMainBar from '../TopMainBar';
import CardCreateHabit from './CardCreateHabit/CardCreateHabit';
import TextNoHabits from './TextNoHabits';
import Footer from '../Footer';
//  import components

export default function HabitsPage() {
  const [daysSelecteds, setDaysSelecteds] = useState([]);
  const [showCardCreateHabit, setShowCardCreateHabit] = useState(false);
  function displayNoneToggle() {
    console.log('teveclick');
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
            <CardCreateHabit
              daysSelecteds={daysSelecteds}
              setDaysSelecteds={setDaysSelecteds}
            />
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
