import styled from 'styled-components';
import progress from '../../assets/progress.svg';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <FooterClass>
      <Link style={{ textDecoration: 'none' }} to="/habitos">
        <h2>Hábitos</h2>
      </Link>
      <Link style={{ textDecoration: 'none' }} to="/hoje">
        <ContainerProgressClass>
          <img src={progress} alt="" />
          <h2>Hoje</h2>
        </ContainerProgressClass>
      </Link>

      <h2>histórico</h2>
    </FooterClass>
  );
}

const ContainerProgressClass = styled.footer`
  position: relative;
  bottom: 16px;
  h2 {
    position: relative;
    bottom: 54px;
    left: 28px;
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
