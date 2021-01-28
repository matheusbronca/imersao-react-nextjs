/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import PropTypes from 'prop-types';

const FooterWrapper = styled.footer`
  display: flex;
  width: 100%;
  max-width: 550px;
  margin: 0 auto 2rem auto;
  align-content: center;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Logo = ({ src, width, height }) => (
  <Image src={src} width={width} height={height} />
);

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

const Content = styled.p`
  color: ${({ theme }) => theme.colors.textConstrast};
`;

const Footer = ({ src, width, height, content }) => (
  <FooterWrapper>
    <Logo src={src} width={width} height={height} />
    <Content content={content}>{content}</Content>
  </FooterWrapper>
);

Footer.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  content: PropTypes.array.isRequired,
};

export default Footer;
