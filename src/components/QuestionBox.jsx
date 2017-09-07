import React from 'react';
import Hint from './Hint';

export default class QuestionBox extends React.Component {
  render() {
    return (
      <div className="questionbox">
        <div className="question">
          {this.props.question.sv}
          {this.props.question.en}
        </div>
        <Hint answer={this.props.answer} hintsUsed={this.props.hintsUsed}/>
        <div className="answer">
          <input type="text" onChange={this.props.answerChanged} value={this.props.userAnswer} />
        </div>
        <div className="hintbtn">
          <button onClick={this.props.useHint}>Ledtråd</button>
        </div>
      </div>
    );
  }
} 