import styled from 'styled-components';

const BackgroundImage = styled.div`
  flex: 1;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  height: 100vh;
  background-color: black;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  opacity: 0;
  animation: fadein ease-in-out 0.5s running forwards;

  &:after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, .75) 0%,
      rgba(255, 255, 255, 0) 25%
    );
    pointer-events: none;
    z-index: -1;
  }
`;

export default BackgroundImage;
