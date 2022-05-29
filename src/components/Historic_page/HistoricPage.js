import Footer from '../shared/Footer';
import Header from '../shared/Header';
import Main from '../shared/Main';

import styled from 'styled-components';
export default function HistoricPage() {
  return (
    <>
      <Header />
      <Main>
        <MainClass>
          <TopMainBarHistoric>
            <h1>Histórico</h1>
          </TopMainBarHistoric>

          <Container>
            <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>
          </Container>
        </MainClass>
      </Main>

      <Footer />
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: start;
  padding-left: 17px;

  margin-top: 17px;
  width: 100%;
`;

const TopMainBarHistoric = styled.div`
  display: flex;
  justify-content: start;
  padding-left: 17px;

  width: 100%;
`;
const MainClass = styled.main`
  margin-top: 80px;
  background-color: transparent;
  margin-bottom: 100px;
`;
