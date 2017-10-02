import React from 'react';
import update from 'immutability-helper';

export default class Hint extends React.Component {
  wrap() {
    return this.props.answer.split('').map((char, i) => {
      if (char === ' ') {
        return <div className="space" key={i}></div>;
      }
      if (!this.props.answerFilter[i]) {
        return <div className="letter" key={i}>&nbsp;</div>;
      }
      return <div className="letter" key={i}>{char}</div>;
    });
  }

  render() {
    return (
      <div className="hint">
        {this.wrap()}
      </div>
    );
  }
}