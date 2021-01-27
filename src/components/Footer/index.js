import styled from 'styled-components';
import Image from 'next/image';

const FooterWrapper = styled.footer`
  display: flex;
  position: absolute;
  width: 100%;
  max-width: 550px;
  margin: auto;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  bottom: 0%;
  margin-bottom: 1.5rem;
`;

const Logo = (props) => <Image {...props} />;

const Content = styled.p`
  color: ${({ theme }) => theme.colors.textConstrast};
`;

const Footer = (props) => {
  return (
    <FooterWrapper>
      <Logo {...props}></Logo>
      <Content {...props}>{props.content}</Content>
    </FooterWrapper>
  );
};

export default Footer;
