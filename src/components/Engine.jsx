import React from 'react';
import Quiz from './Quiz';
import quizQuestions from '../infrastructure/quizQuestions';
import Result from './Result';


export default class Engine extends React.Component {
  constructor() {
    super();
    this.state = {
      currentResult: []
    };
  }

  presentResult(result) {
    this.setState({
      currentResult: result
    });
  }

  render() {
    return (
      <div>
        <Quiz 
            name={quizQuestions.yellow.name} 
            questions={quizQuestions.yellow.questions} 
            presentResult={this.presentResult.bind(this)}
        />
        <Result result={this.state.currentResult}/>
      </div>
    );
  }
}