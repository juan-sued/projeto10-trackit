import styled from 'styled-components';
import { useState } from 'react';

//função que componentiza um buttonDay
function ButtonDay({ day, incrementDaySelected, index }) {
  const [ButtonDaySelected, setButtonDaySelected] = useState(false);
  function buttonClicked(index) {
    incrementDaySelected(index + 1);

    setButtonDaySelected(!ButtonDaySelected);
  }
  return (
    <ButtonDayClass
      backgroundColor={!ButtonDaySelected ? '#FFFFFF' : ' #dbdbdb'}
      colorFont={!ButtonDaySelected ? '#dbdbdb' : ' #FFFFFF'}
      onClick={() => buttonClicked(index)}
      type="button"
    >
      {day}
    </ButtonDayClass>
  );
}

//
//função que renderiza os buttons days

export default function ButtonsDays({ daysSelecteds, setDaysSelecteds }) {
  const daysWeek = ['D', 'S', 'T', 'Q', 'Q', 'S', ' S'];

  function incrementDaySelected(indexDaySelected) {
    if (daysSelecteds.find(day => day === indexDaySelected)) {
      const daysSelectedsFilter = daysSelecteds.filter(day => day !== indexDaySelected);
      setDaysSelecteds(daysSelectedsFilter);
    } else {
      setDaysSelecteds([...daysSelecteds, indexDaySelected]);
    }
  }

  return (
    <ButtonsDaysClass>
      {daysWeek.map((day, index) => (
        <ButtonDay
          key={index}
          index={index}
          day={day}
          incrementDaySelected={incrementDaySelected}
        />
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
