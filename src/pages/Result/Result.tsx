import React, { useMemo, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// redux
import { RootState } from 'app/rootReducer';
import { addResult } from 'features/quiz/quizSlice';

// componenets
import PageWrapper from 'common/components/PageWrapper/PageWrapper';
import { ProgressBar } from 'common/components/Charts/Charts';
import Loader from 'common/components/Loader/Loader';

export default function Result() {
  const dispatch = useDispatch();

  const candidate = useSelector((state: RootState) => state.user.candidate);
  const totalQuestions = useSelector((state: RootState) => state.questions.totalQuestions);
  const correctAnswers = useSelector((state: RootState) => state.questions.correctAnswers);
  const answersRecord = useSelector((state: RootState) => state.questions.answers);
  const quizData = useSelector((state: RootState) => state.quiz.quiz);
  const resultData = useSelector((state: RootState) => state.quiz.result);

  const percentage = useMemo(() => Math.floor((correctAnswers / totalQuestions) * 100), [correctAnswers, totalQuestions]);

  const [color, setcolor] = useState('');

  useEffect(() => {
    dispatch(
      addResult({
        result: Math.floor((correctAnswers / totalQuestions) * 100),
        candidate: candidate.data.id,
        questions: quizData.data[0].questions.map((question: any) => question.id),
        answers: answersRecord,
      }),
    );
  }, []);

  useEffect(() => {
    const color = getColor(percentage);

    setcolor(color);
  }, [percentage]);

  const getColor = (percentage: number) => {
    if (percentage >= 100) {
      return '#7ddf64ff';
    } else if (percentage >= 75 && percentage < 100) {
      return '#FFC107';
    } else {
      return '#d05353ff';
    }
  };

  if (resultData.loading) return <Loader text='Saving your results...' />;

  return (
    <PageWrapper className='items-center content-center justify-center text-center'>
      <div>
        <h2>Hello {candidate.data.firstname} 👋</h2>
      </div>
      <div className='p-12 my-12 rounded-sm shadow-lg'>
        <h1 className='mb-10 text-2xl font-black'>Result</h1>
        <ProgressBar percentage={percentage} color={color} />
        <h1 className='mt-8 text-2xl text-gray-400'>
          <span className='text-4xl font-black'>{correctAnswers}</span> out of <span className='text-4xl font-black'>{totalQuestions}</span>
        </h1>
      </div>
      <h1 className='mb-5 text-4xl font-black'>Thank you for participating in the assesment. 🎉</h1>
    </PageWrapper>
  );
}
