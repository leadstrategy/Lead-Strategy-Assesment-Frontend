import React, { useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// redux
import { RootState } from 'app/rootReducer';

// assets
import { arrowIcon } from 'config/images';

// componenets
import { PrimaryButton } from 'common/components/Button/Button';
import PageWrapper from 'common/components/PageWrapper/PageWrapper';
import Loader from 'common/components/Loader/Loader';

export default function Home() {
  const history = useHistory();

  const quizData = useSelector((state: RootState) => state.quiz.quiz);

  const myQuiz = useMemo(() => (quizData.data ? quizData.data[0] : null), [quizData.data]);

  if (quizData.loading) return <Loader text='Preparing your assesment...' />;

  if (myQuiz) {
    return (
      <PageWrapper className='gap-16 md:flex-row md:items-center justify-evenly'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-6xl font-black'>{myQuiz.title}</h1>
          <p className='text-lg'>{myQuiz.time} Minutes</p>
          <PrimaryButton className='mt-10 w-80' onClick={() => history.push('/user')}>
            Get Started
            <img src={arrowIcon} alt='arrow' className='object-contain h-5 ml-4' />
          </PrimaryButton>
        </div>
        <div className='flex flex-col gap-5'>
          <h4 className='text-xl font-black'>Instructions</h4>
          <ul className='text-lg list-disc list-inside '>
            {myQuiz.instructions.map((item: any) => (
              <li key={item.id}>{item.data}</li>
            ))}
          </ul>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper className='gap-16 md:flex-row md:content-center justify-evenly'>
      <div className='flex flex-col gap-5'>
        <h4 className='text-xl font-black'>Something went wrong! Please try again</h4>
      </div>
    </PageWrapper>
  );
}
