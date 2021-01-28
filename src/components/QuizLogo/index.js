/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';

const QuizLogo = ({ src, width, height }) => (
  <Image
    src={src}
    width={width}
    height={height}
    objectFit="cover"
    objectPosition="center"
  />
);

QuizLogo.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

const LogoWrapper = styled.div`
  margin-top: -7rem;
  margin-bottom: -11rem;
  z-index: 2;
  pointer-events: none;

  @media screen and (max-width: 500px) {
    margin-top: -6rem;
    margin-bottom: -8rem;
  }
`;
const Logo = (props) => (
  <LogoWrapper>
    <QuizLogo {...props} />
  </LogoWrapper>
);

export default Logo;
