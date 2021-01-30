import styled from 'styled-components';

const BackgroundImage = styled.div`
  flex: 1;
  background-image: url('/images/bg.png');
  height: 100vh;
  background-color: black;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  opacity: 0;
  animation: fadein ease-in-out .50s running forwards;
`;

export default BackgroundImage;
