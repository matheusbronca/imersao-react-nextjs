import styled from 'styled-components';

const QuizContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 800px;
  padding-top: 2rem;
  margin: auto 0%;
  
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
    zoom: .85;
  }
`;

export default QuizContainer;
