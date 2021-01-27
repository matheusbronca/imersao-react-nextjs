import styled from 'styled-components';
import Image from 'next/image';

const QuizLogo = (props) => {
  return (
    <Image
      src={props.src}
      width={props.width}
      height={props.height}
      objectFit="cover"
      objectPosition="center"
    />
  );
};

const LogoWrapper = styled.div`
  margin-top: -7rem;
  margin-bottom: -11rem;
  z-index: 2;
  pointer-events: none;
`;
const Logo = (props) => {
  return (
    <LogoWrapper>
      <QuizLogo {...props}></QuizLogo>
    </LogoWrapper>
  );
};

export default Logo;
