/* eslint-disable react/prop-types */
import React from 'react';
import Img from 'next/image';

import db from '../db.json';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizContainer from '../src/components/QuizContainer';
import BackgroundImage from '../src/components/BackgroundImage';
import Widget from '../src/components/Widget';
import LoadingWidget from '../src/components/LoadingWidget';
import Button from '../src/components/Button';
import Logo from '../src/components/QuizLogo';
import Footer from '../src/components/Footer';

const QuestionWidget = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
}) => {
  const questionId = `question__${questionIndex}`;

  return (
    <Widget>
      <Widget.Header>
        <h1>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h1>
      </Widget.Header>
      <Widget.Content>
        <Img
          src={`/images/question-${questionIndex + 1}.jpg`}
          height="350"
          width="620"
          objectFit="cover"
          objectPosition="center"
        />
        <h4 style={{ margin: '1rem 0rem' }}>{question.title}</h4>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            return (
              <Widget.Topic as="label" htmlFor={alternativeId}>
                <input
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  style={{ display: 'none' }}
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          <Button type="submit">Confirmar</Button>
        </form>
      </Widget.Content>
    </Widget>
  );
};

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  const handleSubmitQuiz = () => {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      setCurrentQuestion(nextQuestion);
    } else {
      setScreenState(screenStates.RESULT);
    }
  };

  return (
    <BackgroundImage>
      <GitHubCorner />
      <QuizContainer>
        <Logo src="/images/logo.png" width={400} height={400} />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (
          <div>Você acertou X Questões, Parabéns!</div>
        )}
        <Footer
          src="/images/alura-logo.svg"
          width={75}
          height={35}
          content={[
            'Orgulhosamente criado durante a imersão ',
            <a
              href="https://www.alura.com.br/"
              target="__blank"
              style={{ color: 'white' }}
            >
              React da Alura
            </a>,
          ]}
        />
      </QuizContainer>
    </BackgroundImage>
  );
}
