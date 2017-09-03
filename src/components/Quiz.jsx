import React from 'react';
import QuestionBox from './QuestionBox';

export default class Quiz extends React.Component {
  constructor() {
    super();
    this.state = {
      currentQuestion: 1
    };
  }  


  prev() {
    this.setState((prevState) => ({
      currentQuestion: prevState.currentQuestion - 1
    }));
  }

  next() {
    console.log(this.props.questions);
    this.setState((prevState) => ({
      currentQuestion: prevState.currentQuestion + 1
    }));
  }

  getCurrentQuestion() {
    return this.props.questions[this.state.currentQuestion-1];
  }

  isFirstQuestion() {
    return this.state.currentQuestion === 1;
  }

  isLastQuestion() {
    return this.state.currentQuestion >= this.props.questions.length;
  }

  render() {
    return (
      <div>
        <div className="quizName">
          {this.props.name}
        </div>
        <div className="carusel">
          <div className="prev">
            <button onClick={this.prev.bind(this)} disabled={this.isFirstQuestion()}>Prev</button>
          </div>
          <div>
            {this.state.currentQuestion}
            <QuestionBox question={this.getCurrentQuestion().question} answer={this.getCurrentQuestion().answer} />
          </div>
          <div className="next">
            <button onClick={this.next.bind(this)} disabled={this.isLastQuestion()}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}