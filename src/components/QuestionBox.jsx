import React from 'react';

export default class QuestionBox extends React.Component {
  render() {
    return (
      <div className="questionbox">
        <div className="question">
          {this.props.question}
        </div>
        <div className="answer">
          {this.props.answer}
          <input type="text"/>
        </div>
        <div className="hint">
          <button>Ledtråd</button>
        </div>
      </div>
    );
  }
} 