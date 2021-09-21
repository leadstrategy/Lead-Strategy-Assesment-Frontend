import React from 'react';

// styles
import { AnswerWrapper } from './styles';

interface AnswerListProps {
  answers: any;
  selectedAnswer: any;
  onSelect: (e: any) => void;
}

export default function AnswerList({ answers, onSelect, selectedAnswer }: AnswerListProps) {
  return (
    <div className='flex flex-col items-center gap-6 mt-10 mb-10'>
      {answers.map((answer: any) => (
        <AnswerWrapper
          key={answer.id}
          onClick={() => onSelect(answer)}
          className={`px-10 py-3 text-lg bg-gray-300 cursor-pointer md:px-20 rounded-xl hover:text-white hover:bg-gray-500 ${
            selectedAnswer ? (selectedAnswer.id === answer.id ? 'active' : '') : ''
          }`}
        >
          {answer.answerText}
        </AnswerWrapper>
      ))}
    </div>
  );
}
