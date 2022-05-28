import styled from 'styled-components';

export default function TopMainBar({ displayNoneToggle, showCardCreateHabit }) {
  return (
    <Container>
      <h1>Meus hábitos</h1>
      <button onClick={displayNoneToggle}>{!showCardCreateHabit ? '+' : '-'}</button>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px 0 18px;
  width: 100%;
  min-height: 85px;

  button {
    height: 35px;
    width: 40px;
    background-color: #52b6ff;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 26.976px;
    :hover {
      cursor: pointer;
    }
  }
`;
