import styled from 'styled-components';
import dayjs from 'dayjs';
export default function TopMainBarToday() {
  function getDay() {
    const daysWeek = [
      'Domingo',
      'Segunda',
      'Terça',
      'Quarta',
      'Quinta',
      'Sexta',
      'Sábado'
    ];

    return `${daysWeek[dayjs().day()]}, ${dayjs().format('DD/MM')}`;
  }

  return (
    <TopMainBarTodayClass>
      <h1>{getDay()}</h1>
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
