import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { useContext } from 'react';
import PercentContext from '../../contexts/PercentContext';

export default function Footer() {
  const { percent } = useContext(PercentContext);
  return (
    <FooterClass>
      <Link style={{ textDecoration: 'none' }} to="/habitos">
        <h2>Hábitos</h2>
      </Link>
      <Link style={{ textDecoration: 'none' }} to="/hoje">
        <ContainerProgressClass>
          <CircularProgressbar
            value={percent}
            background={true}
            backgroundPadding={6}
            styles={buildStyles({
              textColor: 'white',
              backgroundColor: '#52b6ff',
              pathColor: 'white',
              trailColor: '#52b6ff',
              strokeLinecap: 'round',
              pathTransitionDuration: 0.4
            })}
          />
          <h2>Hoje</h2>
        </ContainerProgressClass>
      </Link>

      <h2>histórico</h2>
    </FooterClass>
  );
}

const ContainerProgressClass = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  bottom: 30px;

  h2 {
    position: relative;
    bottom: 60px;
    left: 33px;
    color: white;
  }
`;

const FooterClass = styled.footer`
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
