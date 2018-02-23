import React from 'react';
import Hint from './Hint';

export default class QuestionBox extends React.Component {
  constructor(props) {
    super(props);
    this.useHint = this.useHint.bind(this);
    this.isAllHintsUsed = this.isAllHintsUsed.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  useHint() {
    if (!this.isAllHintsUsed()) {
      this.props.useHint();
    }
  }

  isAllHintsUsed() {
    return this.props.answerFilter.find(isLetterShown => isLetterShown === false) === undefined;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleEnter();
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
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Skriv ditt svar här..." onChange={this.props.answerChanged} value={this.props.userAnswer} />
          </form>
        </div>
        <div className="hintbtn">
          <div className={'tri-button ' + (this.isAllHintsUsed() ? 'disabled' : '')} onClick={this.useHint}>Ledtråd</div>
        </div>
      </div>
    );
  }
} 