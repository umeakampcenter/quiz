import React from 'react';
import Quiz from './Quiz';
import quizQuestions from '../infrastructure/quizQuestions';


export default class Engine extends React.Component {
  render() {
    return (
      <Quiz name={quizQuestions.yellow.name} questions={quizQuestions.yellow.questions} />
    );
  }
}