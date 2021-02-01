/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Widget from '../Widget';
import Button from '../Button';

function ResultWidget({ results, isExternal }) {
  const router = useRouter();
  const getTotalPoints = results.reduce(
    (actualSum, actualAnswer) =>
      actualAnswer === true ? actualSum + 100 : actualSum,
    0
  );

  const getResultImage = (totalPoints) => {
    let resultImage;
    const points = {
      LOW: '/images/low_points.gif',
      MEDIUM: '/images/medium_points.gif',
      HIGH: '/images/high_points.gif',
      TOP: '/images/top_points.gif',
    };

    if (totalPoints <= 20) {
      resultImage = points.LOW;
    } else if (totalPoints >= 21 && totalPoints <= 49) {
      resultImage = points.MEDIUM;
    } else if (totalPoints >= 50 && totalPoints <= 79) {
      resultImage = points.HIGH;
    } else {
      resultImage = points.TOP;
    }

    return resultImage;
  };

  const getResultDescription = (totalPoints) => {
    let description = '';

    if (totalPoints <= 20) {
      description =
        'Hmm..., parece que você é pior que o Dandelion quando o assunto são Bruxos!';
    } else if (totalPoints >= 21 && totalPoints <= 49) {
      description =
        'Talvez com um Axii vindo diretamente de Geralt você teria se saído melhor!';
    } else if (totalPoints >= 50 && totalPoints <= 79) {
      description =
        'Parabéns, você domina bem o bestiário, conhece a cultura dos Bruxos e com alguma sorte passaria vivo pelo processo de mutação.';
    } else {
      description =
        'Parabéns!! Você conhece a alquimia como ninguém, domina os sinais, compreende as mutações' +
        ', conhece cada criatura do bestiário e ainda domina a arte do amor. Você é um próprio Bruxo meu camarada!';
    }
    return description;
  };

  if (isExternal) {
    return (
      <Widget>
        <Widget.Header>
          <h1>Resultado</h1>
        </Widget.Header>
        <Widget.Content>
          <div>
            <p
              style={{
                opacity: '0',
                animation: 'fadein ease-in-out .35s .15s running forwards',
              }}
            >
              {getResultDescription(getTotalPoints / 10)}
            </p>
            <Image
              src={getResultImage(getTotalPoints / 10)}
              width={500}
              height={400}
              objectFit="cover"
              objectPosition="center"
              style={{
                opacity: '0',
                animation: 'fadein ease-in-out .35s .30s running forwards',
              }}
            />
            <br />
            <br />
          </div>
          <div
            style={{
              opacity: '0',
              animation: 'fadein ease-in-out .35s .55s running forwards',
            }}
          >
            <h3
              style={{
                fontSize: '1.175rem',
                textAlign: 'center',
                width: '100%',
                margin: 'auto',
                fontWeight: 'normal',
              }}
            >
              <span style={{ textTransform: 'capitalize' }}>
                {router.query.name}
              </span>
              {', '}
              você acertou <b>{getTotalPoints / 100}</b> pergunta(s), e
              conseguiu um placar de:
            </h3>
            <div
              style={{
                width: '50%',
                margin: '1.5rem auto',
                borderRadius: '5px',
              }}
            >
              <div
                style={{
                  fontFamily: 'arial',
                  fontSize: '4rem',
                  padding: '1rem 0 .5rem 0',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}
              >
                {' '}
                {getTotalPoints}{' '}
              </div>
            </div>
            <div
              style={{
                fontSize: '1.25rem',
                textAlign: 'center',
                padding: '0rem 1rem 1rem 1rem',
              }}
            >
              ORENS
            </div>
          </div>
          <ul
            style={{
              columnCount: '2',
              listStyle: 'none',
              margin: 'auto',
              padding: 0,
            }}
          >
            {results.map((answer, index) => (
              <ResultWidget.Question
                key={`result__ ${results}`}
                answer={answer}
              >
                {index + 1} -{answer === true ? ' Acertou!' : ' Errou!'}
              </ResultWidget.Question>
            ))}
          </ul>
          <br />
          <Button href="/">
            <Link href="/" style={{ width: '100%', height: '100%' }}>
              Jogar Novamente
            </Link>
          </Button>
        </Widget.Content>
      </Widget>
    );
  }
  return (
    <Widget>
      <Widget.Header>
        <h1>Resultado</h1>
      </Widget.Header>
      <Widget.Content>
        <div
          style={{
            opacity: '0',
            animation: 'fadein ease-in-out .35s .55s running forwards',
          }}
        >
          <h3
            style={{
              fontSize: '1.175rem',
              textAlign: 'center',
              width: '100%',
              margin: 'auto',
              fontWeight: 'normal',
            }}
          >
            Parabéns{' '}
            <span style={{ textTransform: 'capitalize' }}>
              {router.query.name}
            </span>
            , você acertou <b>{getTotalPoints / 100}</b> pergunta(s), e
            conseguiu um placar de:
          </h3>
          <div
            style={{
              width: '50%',
              margin: '1.5rem auto',
              borderRadius: '5px',
            }}
          >
            <div
              style={{
                fontFamily: 'arial',
                fontSize: '4rem',
                padding: '1rem 0 .5rem 0',
                textAlign: 'center',
                fontWeight: 'bold',
              }}
            >
              {' '}
              {getTotalPoints}{' '}
            </div>
          </div>
          <div
            style={{
              fontSize: '1.25rem',
              textAlign: 'center',
              padding: '0rem 1rem 1rem 1rem',
            }}
          >
            PONTOS
          </div>
        </div>
        <ul
          style={{
            columnCount: '2',
            columnFill: 'auto',
            listStyle: 'none',
            margin: 'auto',
            padding: 0,
          }}
        >
          {results.map((answer, index) => (
            <ResultWidget.Question key={`result__ ${results}`} answer={answer}>
              {index + 1} -{answer === true ? ' Acertou!' : ' Errou!'}
            </ResultWidget.Question>
          ))}
        </ul>
        <br />
        <Button href="/">
          <Link href="/" style={{ width: '100%', height: '100%' }}>
            Jogar Novamente
          </Link>
        </Button>
      </Widget.Content>
    </Widget>
  );
}

ResultWidget.Question = styled.li`
  font-size: 0.8rem;
  padding: 0.15rem;
  background-color: ${({ answer, theme }) =>
    answer === true ? theme.colors.success : theme.colors.wrong};
  box-shadow: inset 0px 0px 0px 1px
    ${({ answer }) => (answer === true ? 'springgreen' : 'gray')};
  color: ${({ theme }) => theme.colors.constrastText};
  margin-bottom: 0.5rem;
  border-radius: 3px;
  opacity: 0;
  text-indent: 10px;
  animation: fadein ease-in-out 0.35s 0.75s running forwards;
`;

export default ResultWidget;
