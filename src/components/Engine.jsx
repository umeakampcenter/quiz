import React from 'react';
import Quiz from './Quiz';
import quizQuestions from '../infrastructure/quizQuestions';
import Result from './Result';


export default class Engine extends React.Component {
  render() {
    return (
      <div>
        <Quiz name={quizQuestions.yellow.name} questions={quizQuestions.yellow.questions} />
        <Result/>
      </div>
    );
  }
}