import styled from 'styled-components';

const BackgroundImage = styled.div`
  flex: 1;
  background-image: url('/images/bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  position: relative;
`;

export default BackgroundImage;