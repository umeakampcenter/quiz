import React from 'react';
import QuestionBox from './QuestionBox';
import update from 'immutability-helper';

export default class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      hintsUsedList: new Array(props.questions.length).fill(0),
      answerList: new Array(props.questions.length).fill('')
    };
  }  

  prev() {
    this.setState((prevState) => ({
      currentQuestion: prevState.currentQuestion - 1
    }));
  }

  next() {
    this.setState((prevState) => ({
      currentQuestion: prevState.currentQuestion + 1
    }));
  }

  getCurrentQuestion() {
    return this.props.questions[this.state.currentQuestion];
  }

  isFirstQuestion() {
    return this.state.currentQuestion === 0;
  }

  isLastQuestion() {
    return this.state.currentQuestion >= this.props.questions.length - 1;
  }

  useHint() {
    this.setState((prevState) => {
      const updatedHintsUsed = prevState.hintsUsedList;
      updatedHintsUsed[prevState.currentQuestion]++;
      return {      
        hintsUsed: updatedHintsUsed
      };
    });
  }

  answerChanged(e) {
    this.setState(update(this.state, {
      answerList: {
        [this.state.currentQuestion]: {$set: e.target.value}
      }
    }));
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
            <QuestionBox 
                question={this.getCurrentQuestion().question} 
                answer={this.getCurrentQuestion().answer} 
                hintsUsed={this.state.hintsUsedList[this.state.currentQuestion]} 
                useHint={this.useHint.bind(this)} 
                answerChanged={this.answerChanged.bind(this)}
            />
          </div>
          <div className="next">
            <button onClick={this.next.bind(this)} disabled={this.isLastQuestion()}>Next</button>
          </div>
        </div>
      </div>
    );
  }
}