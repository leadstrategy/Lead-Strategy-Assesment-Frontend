import React, { useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// redux
import { RootState } from 'app/rootReducer';
import { setCurrentQuestion, setTotalQuestions, setAnswers, setCorrectAnswers } from 'features/questions/questionsSlice';

// assets
import { arrowIcon } from 'config/images';

// config
import { API_SERVER } from 'config/constants';

// componenets
import PageWrapper from 'common/components/PageWrapper/PageWrapper';
import { PrimaryButton } from 'common/components/Button/Button';
import AnswerList from './components/AnswerList';

export default function Quiz() {
  const history = useHistory();
  const dispatch = useDispatch();
  const quizData = useSelector((state: RootState) => state.quiz.quiz);
  const currentQuestion = useSelector((state: RootState) => state.questions.currentQuestion);
  const correctAnswers = useSelector((state: RootState) => state.questions.correctAnswers);

  const [selectedIndex, setSelectedIndex] = useState<any>(null);

  const activeQuestion = useMemo(() => (quizData.data ? quizData.data[0].questions[currentQuestion] : null), [
    quizData.data,
    currentQuestion,
  ]);

  useEffect(() => {
    if (quizData.data && quizData.data[0]) {
      dispatch(setTotalQuestions(quizData.data[0].questions.length));
    }
  }, [quizData.data]);

  const handleNextQuestion = (e: number) => {
    if (quizData.data[0].questions.length < e + 2) {
      recordAnswers();
      history.push('/result');
    } else {
      recordAnswers();
      dispatch(setCurrentQuestion(e + 1));
    }
  };

  const recordAnswers = () => {
    const answerRecord = {
      question: activeQuestion,
      answer: selectedIndex,
    };

    dispatch(setAnswers(answerRecord));
    if (selectedIndex?.isCorrect) dispatch(setCorrectAnswers(correctAnswers + 1));
  };

  if (activeQuestion)
    return (
      <PageWrapper className='content-center justify-center text-center'>
        <div className='flex flex-col gap-5'>
          <h2 className='text-4xl font-black'>{activeQuestion.questionText}</h2>
          {!!activeQuestion.questionHelper && (
            <img src={API_SERVER + activeQuestion.questionHelper.url} alt='imageHelper' className='object-contain w-full h-full' />
          )}
          <AnswerList answers={activeQuestion.answerOptions} onSelect={setSelectedIndex} selectedAnswer={selectedIndex} />
          <PrimaryButton
            // loading={candidate.loading}
            loadingText='Creating user...'
            className='self-center mt-10'
            onClick={() => handleNextQuestion(currentQuestion)}
          >
            {quizData.data[0].questions.length < currentQuestion + 2 ? 'Finish' : 'Next'}
            <img src={arrowIcon} alt='arrow' className='object-contain h-5 ml-4' />
          </PrimaryButton>
        </div>
      </PageWrapper>
    );

  return (
    <PageWrapper className='gap-16 md:flex-row md:content-center justify-evenly'>
      <div className='flex flex-col gap-5'>
        <h4 className='text-xl font-black'>Something went wrong! Please try again</h4>
      </div>
    </PageWrapper>
  );
}
