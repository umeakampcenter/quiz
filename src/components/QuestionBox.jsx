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
          <div className="sv">{this.props.question.sv}</div>
          <div className="en">{this.props.question.en}</div>
        </div>
        <Hint answer={this.props.answer} hintsUsed={this.props.hintsUsed} answerFilter={this.props.answerFilter} />
        <div className="answer">
          <input type="text" placeholder="Skriv ditt svar här..." onChange={this.props.answerChanged} value={this.props.userAnswer} />
        </div>
        <div className="hintbtn">
          <div className="tri-button" onClick={this.props.useHint} disabled={this.hasUsedAllHints()}>Ledtråd</div>
        </div>
      </div>
    );
  }
} 