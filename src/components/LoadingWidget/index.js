import React from 'react';
import styled from 'styled-components';
import Widget from '../Widget';

const LoadingStyled = styled.div`
  width: 100px;
  height: 100px;
  background-image: url('/images/loading.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  animation: loop 1s linear infinite running;
  margin: 3rem auto;

  @keyframes loop {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function LoadingWidget() {
  return (
    <Widget>
      <Widget.Header>
        <h1>Carregando...</h1>
      </Widget.Header>
      <LoadingStyled />
    </Widget>
  );
}

export default LoadingWidget;
