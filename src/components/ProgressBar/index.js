import styled from 'styled-components';

const ProgressBar = styled.div`
  width: ${({ progress, totalQuestions }) => `${(progress + 1) * (100 / totalQuestions )}%`};
  height: 5px;
  filter: brightness(145%) contrast(150%) hue-rotate(-5deg);
  background-color: ${({ theme }) => theme.colors.primary};
  transition: width .2s ease-out;
  position: fixed;
  z-index: 10;
`;

export default ProgressBar;
