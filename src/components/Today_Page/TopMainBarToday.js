import styled from 'styled-components';

export default function TopMainBarToday() {
  return (
    <TopMainBarTodayClass>
      <h1>Segunda, 17/05</h1>
      <p>Nenhum hábito concluído</p>
    </TopMainBarTodayClass>
  );
}
const TopMainBarTodayClass = styled.div`
  width: 100%;
  padding: 10px;

  p {
    font-size: 18px;
    line-height: 22px;
    color: #bababa;
  }
`;
