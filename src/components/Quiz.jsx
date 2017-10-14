import React from 'react';
import QuestionBox from './QuestionBox';
import update from 'immutability-helper';
import {withRouter} from 'react-router-dom';

class QuizInternal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      hintsUsedList: new Array(props.questions.length).fill(0),
      answerFilterList: props.questions.map((question, i) => question.answer.split('').map((char, i) => char === ' ')),
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
      let currentAnswerFilter = prevState.answerFilterList[prevState.currentQuestion];
      let numberOfLettersToHint = this.getNumberOfLettersToHint(this.props.questions[prevState.currentQuestion].answer, currentAnswerFilter);
      
      while (numberOfLettersToHint > 0) {
        const index = Math.floor(Math.random() * currentAnswerFilter.length);
        if (currentAnswerFilter[index]) {
          continue;
        }
        currentAnswerFilter[index] = true;
        numberOfLettersToHint--;
      }

      return update(prevState, {
          hintsUsedList: {
            [prevState.currentQuestion]: {$set: prevState.hintsUsedList[prevState.currentQuestion] + 1}
          },
          answerFilterList: {
            [prevState.currentQuestion]: {$set: currentAnswerFilter}
          }
      });
    });
  }

  getNumberOfLettersToHint(answer, currentAnswerFilter) {
    const answerChars = answer.split('');
    const numberOfLetters = answerChars.reduce((sum, char) => sum + (char !== ' ' ? 1 : 0), 0);
    const numberOfLettersGiven = answerChars.reduce((sum, char, i) => sum + (char !== ' ' && currentAnswerFilter[i] ? 1 : 0), 0);
    return Math.min(Math.ceil(numberOfLetters / 5), numberOfLetters - numberOfLettersGiven);
  }

  answerChanged(e) {
    this.setState(update(this.state, {
      answerList: {
        [this.state.currentQuestion]: {$set: e.target.value}
      }
    }));
  }

  calculateResult() {
    let result = [];
    for (let i = 0; i < this.props.questions.length; i++) {
      result[i] = this.props.questions[i].answer === this.state.answerList[i];   
    }
    
    this.props.presentResult(result);
    this.props.history.push("/quiz/" + this.props.match.params.color + "/result");
  }

  render() {
    return (
      <div>
        <div className="quizName">
          <h1>{this.props.name}</h1>
        </div>
        <div className="carusel">
          <div className="prev">
            <div onClick={this.prev.bind(this)} className={this.isFirstQuestion() ? 'hide' : ''}></div>
          </div>
          <div className="questionwrap">
            <div className="number">{this.state.currentQuestion+1}.</div>
            <QuestionBox 
                question={this.getCurrentQuestion().question} 
                answer={this.getCurrentQuestion().answer} 
                hintsUsed={this.state.hintsUsedList[this.state.currentQuestion]} 
                answerFilter={this.state.answerFilterList[this.state.currentQuestion]}
                useHint={this.useHint.bind(this)} 
                answerChanged={this.answerChanged.bind(this)}
                userAnswer={this.state.answerList[this.state.currentQuestion]}
            />
            <button onClick={this.calculateResult.bind(this)} className={'result-btn ' + (this.isLastQuestion() ? '' : 'hide')}>Rätta</button>
          </div>
          <div className="next">
            <div onClick={this.next.bind(this)} className={this.isLastQuestion() ? 'hide' : ''}></div>            
          </div>
        </div>
      </div>
    );
  }
}

const Quiz = withRouter(QuizInternal);
export default Quiz;