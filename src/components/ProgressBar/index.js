import styled from 'styled-components';

const ProgressBar = styled.div`
  width: ${({ progress, totalQuestions }) => `${(progress + 1) * (100 / totalQuestions )}%`};
  height: 3px;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: width .2s ease-out;
  position: fixed;
  z-index: 10;
`;

export default ProgressBar;
