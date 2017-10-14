import React from 'react';
import update from 'immutability-helper';

export default class Hint extends React.Component {
  wrap() {
    const words = this.props.answer.split(' ');
    return words.map((word, i) => {
      const wrappedLetters = word.split('').map((char, j) => {
        if (char === ' ') {
          return <div className="space" key={j}></div>;
        }
        if (!this.props.answerFilter[j]) {
          return <div className="letter" key={j}>&nbsp;</div>;
        }
        return <div className="letter" key={j}>{char}</div>;
      });
      return <div className="word" key={i}>{wrappedLetters}</div>;
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