import styled from 'styled-components';

//função que componentiza um buttonDay
function ButtonDayHistoric({ day, index, daysObj }) {
  return (
    <ButtonDayClass
      backgroundColor={!daysObj.includes(index) ? '#FFFFFF' : ' #dbdbdb'}
      colorFont={!daysObj.includes(index) ? '#dbdbdb' : ' #FFFFFF'}
      disabled
    >
      {day}
    </ButtonDayClass>
  );
}

//
//função que renderiza os buttons days

export default function ButtonsDaysHistoric({ daysObj }) {
  const daysWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', ' S'];

  return (
    <ButtonsDaysClass>
      {daysWeek.map((day, index) => (
        <ButtonDayHistoric key={index} index={index} day={day} daysObj={daysObj} />
      ))}
    </ButtonsDaysClass>
  );
}

const ButtonsDaysClass = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 10px;
`;
const ButtonDayClass = styled.button`
  width: 30px;
  height: 30px;
  color: ${props => props.colorFont};
  background: ${props => props.backgroundColor};
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  margin-right: 4px;
  font-family: 'Lexend Deca';
  font-size: 19.976px;
  line-height: 25px;
`;
