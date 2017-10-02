import React from 'react';
import Hint from './Hint';

export default class QuestionBox extends React.Component {
  hasUsedAllHints() {
    return this.props.hintsUsed > 4;
  }

  render() {
    return (
      <div className="questionbox">
        <div className="question">
          {this.props.question.sv}
          {this.props.question.en}
        </div>
        <Hint answer={this.props.answer} hintsUsed={this.props.hintsUsed} answerFilter={this.props.answerFilter} />
        <div className="answer">
          <input type="text" onChange={this.props.answerChanged} value={this.props.userAnswer} />
        </div>
        <div className="hintbtn">
          <button onClick={this.props.useHint} disabled={this.hasUsedAllHints()}>Ledtråd</button>
        </div>
      </div>
    );
  }
} 