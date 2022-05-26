import styled from 'styled-components';
import progress from '../../assets/progress.svg';
export default function Footer() {
  return (
    <FooterClass>
      <h2>Hábitos</h2>
      <ContainerProgressClass>
        <img src={progress} alt="" />
      </ContainerProgressClass>

      <h2>histórico</h2>
    </FooterClass>
  );
}

const ContainerProgressClass = styled.footer`
  position: relative;
  bottom: 16px;
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
