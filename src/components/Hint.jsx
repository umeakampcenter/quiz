import React from 'react';
import update from 'immutability-helper';

export default class Hint extends React.Component {
  getHintWords() {
    const words = this.props.answer.split(' ');
    let totalLetterCount = 0;
    return words.map((word, i) => {
      if (i > 0) {
        totalLetterCount++; // Count spaces
      }
      const wrappedLetters = word.split('').map((char, j) => {
        if (!this.props.answerFilter[totalLetterCount++]) {
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
        {this.getHintWords()}
      </div>
    );
  }
}