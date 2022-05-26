import styled from 'styled-components';

export default function TextNoHabits() {
  return (
    <TextNoHabitsClass>
      Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar!!
    </TextNoHabitsClass>
  );
}
const TextNoHabitsClass = styled.p`
  margin-top: 28px;
  font-size: 17.976px;
  line-height: 22px;
  width: 338px;
`;
