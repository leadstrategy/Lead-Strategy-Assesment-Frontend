import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// utils
import { QuizRoute } from 'common/utils/routeHelper';

// redux
import { RootState } from 'app/rootReducer';
import { fetchQuiz } from 'features/quiz/quizSlice';

// componenets
import Header from 'common/components/Header/Header';
import Footer from 'common/components/Footer/Footer';
import Loader from 'common/components/Loader/Loader';

// pages
const Home = React.lazy(() => import('pages/Home/Home'));
const UserDetails = React.lazy(() => import('pages/UserDetails/UserDetails'));
const Quiz = React.lazy(() => import('pages/Quiz/Quiz'));
const Result = React.lazy(() => import('pages/Result/Result'));

// styles
import { RootConatiner } from './styles';

const Layout: React.FC = () => {
  const dispatch = useDispatch();

  const candidate = useSelector((state: RootState) => state.user.candidate);
  const quizData = useSelector((state: RootState) => state.quiz.quiz);

  useEffect(() => {
    dispatch(fetchQuiz());
  }, []);

  return (
    <RootConatiner className='min-h-screen bg-white dark:bg-black'>
      <Router>
        <Header />

        <Suspense fallback={<Loader />}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/user' exact component={UserDetails} />
            <QuizRoute path='/quiz' exact component={Quiz} isAuthenticated={quizData.data && candidate.data} />
            <QuizRoute path='/result' exact component={Result} isAuthenticated={quizData.data && candidate.data} />
          </Switch>
        </Suspense>

        <Footer />
      </Router>
    </RootConatiner>
  );
};

export default Layout;
