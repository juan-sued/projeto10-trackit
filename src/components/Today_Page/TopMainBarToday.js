import styled from 'styled-components';
import dayjs from 'dayjs';
export default function TopMainBarToday({ arrCardsHabitToday }) {
  let percent = 0;
  if (arrCardsHabitToday !== null) {
    const listCardsDone = arrCardsHabitToday.filter(habit => habit.done === true);
    percent = (listCardsDone.length * 100) / arrCardsHabitToday.length;
  }
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
      {percent > 0 ? (
        <Percent> {percent.toFixed(0)}% dos hábitos concluídos </Percent>
      ) : (
        <p>Nenhum hábito concluído</p>
      )}
    </TopMainBarTodayClass>
  );
}

const Percent = styled.p`
  font-size: 18px;
  line-height: 22px;
  color: #bababa;
  color: #8fc549;
`;

const TopMainBarTodayClass = styled.div`
  width: 100%;
  padding: 10px;
  margin-bottom: 28px;

  p {
    font-size: 18px;
    line-height: 22px;
    color: #bababa;
  }
`;
