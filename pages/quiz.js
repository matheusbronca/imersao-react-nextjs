/* eslint-disable react/prop-types */
import React from 'react';
import Img from 'next/image';

import db from '../db.json';
import QuizContainer from '../src/components/QuizContainer';
import AlternativesForm from '../src/components/AlternativesForm';
import BackgroundImage from '../src/components/BackgroundImage';
import Widget from '../src/components/Widget';
import LoadingWidget from '../src/components/LoadingWidget';
import Button from '../src/components/Button';
import Logo from '../src/components/QuizLogo';
import Footer from '../src/components/Footer';
import ResultWidget from '../src/components/ResultWidget';
import BackLinkArrow from '../src/components/BackLinkArrow';
import ProgressBar from '../src/components/ProgressBar';

const QuestionWidget = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) => {
  const questionId = `question__${questionIndex}`;
  const [selectedAlternative, setSelectedAlternative] = React.useState(
    undefined
  );
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <BackLinkArrow href="/" />
          <h1>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h1>
        </div>
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
        <AlternativesForm
          onSubmit={(e) => {
            e.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 0.75 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                htmlFor={alternativeId}
                key={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                  checked={false}
                  style={{ display: 'none' }}
                />
                {alternative}
              </Widget.Topic>
            );
          })}
          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
        </AlternativesForm>
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
  const [results, setResults] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const totalQuestions = db.questions.length;
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function addResult(result) {
    setResults([...results, result]);
  }

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
    <BackgroundImage backgroundImage="/images/bg.jpg">
      <ProgressBar progress={questionIndex} totalQuestions={totalQuestions} />
      <QuizContainer>
        <Logo src={db.bg || '/images/logo.png'} width={400} height={400} />
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            addResult={addResult}
            onSubmit={handleSubmitQuiz}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (
          <ResultWidget results={results} isExternal={false} />
        )}
        <Footer
          src="/images/alura-logo.svg"
          width={75}
          height={35}
          content={[
            'Orgulhosamente criado durante a imersão ',
            <a
              key="alura-link"
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
