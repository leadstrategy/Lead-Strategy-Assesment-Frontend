import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// redux
import { RootState } from 'app/rootReducer';

// components
import CountDown from 'common/components/CountDown/CountDown';

// assets
import { logoBlack } from 'config/images';

const Header: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const quizData = useSelector((state: RootState) => state.quiz.quiz);
  const currentQuestion = useSelector((state: RootState) => state.questions.currentQuestion);
  const totalQuestions = useSelector((state: RootState) => state.questions.totalQuestions);

  return (
    <header className='flex flex-row justify-between min-w-full p-5 bg-white dark:bg-black'>
      <img src={logoBlack} alt='logo' className='object-contain h-18' />
      {location.pathname === '/quiz' && quizData.data && (
        <div className='flex flex-col items-end'>
          <p>
            Question <span className='text-xl font-bold'>{currentQuestion + 1}</span> of{' '}
            <span className='text-xl font-bold'>{totalQuestions}</span>
          </p>
          <p className='mt-2'>
            Time remaining
            <span className='ml-2 text-2xl font-bold text-red-500'>
              <CountDown
                hours={0}
                minutes={quizData.data ? quizData.data[0].time : 0}
                seconds={0}
                callBack={() => history.push('/result')}
              />
            </span>
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;
