/* eslint-disable react/prop-types */
import React from 'react';

import ProgressBar from '../../components/ProgressBar';
import QuizContainer from '../../components/QuizContainer';
import AlternativesForm from '../../components/AlternativesForm';
import BackgroundImage from '../../components/BackgroundImage';
import Widget from '../../components/Widget';
import LoadingWidget from '../../components/LoadingWidget';
import Button from '../../components/Button';
import Footer from '../../components/Footer';
import ResultWidget from '../../components/ResultWidget';
import db from '../../../db.json';

const QuestionWidget = ({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
  title,
  isExternal,
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
      <div>{title}</div>
      <Widget.Header>
        <h1>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h1>
      </Widget.Header>
      <Widget.Content>
        <div style={{ width: '100%', height: '350px', objectFit: 'cover' }}>
          <img
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            src={question.image}
            alt="Imagem da pergunta"
          />
        </div>
        {/* <Img
          src={question.image || `/images/question-${questionIndex + 1}.jpg`}
          height="350"
          width="620"
          objectFit="cover"
          objectPosition="center"
        /> */}
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

export default function QuizPage({
  externalQuestions,
  externalBg,
  externalTitle,
  isExternal,
}) {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const totalQuestions = externalQuestions.length;
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const bg = externalBg;

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
    <BackgroundImage backgroundImage={bg}>
      <ProgressBar progress={questionIndex} totalQuestions={totalQuestions} />
      <QuizContainer>
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            title={externalTitle}
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            addResult={addResult}
            onSubmit={handleSubmitQuiz}
          />
        )}

        {screenState === screenStates.LOADING && <LoadingWidget />}

        {screenState === screenStates.RESULT && (
          <ResultWidget results={results} isExternal={isExternal} />
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
