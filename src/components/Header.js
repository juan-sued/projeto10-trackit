import styled from 'styled-components';
// import styleds

import logoEscrita from '../assets/logoEscrita.svg';
import jorelProfile from '../assets/jorelProfile.jpeg';
//import assets
export default function Header() {
  return (
    <HeaderClass>
      <LogoSript src={logoEscrita} alt="logoEscita" />
      <ProfileImage src={jorelProfile} alt="logoEscita" />
    </HeaderClass>
  );
}
const LogoSript = styled.img``;

const ProfileImage = styled.img`
  width: 51px;
  height: 51px;
  left: 306px;
  top: 9px;
  border-radius: 98.5px;
`;

const HeaderClass = styled.header`
  position: fixed;
  left: 0px;
  top: 0px;

  width: 100%;
  height: 70px;
  padding: 0 18px 0 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
