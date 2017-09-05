import React from 'react';

export default class Hint extends React.Component {
  wrap(text) {
    return text.split('').map((char, i) => {
      if (char === ' ') {
        return <div className="space" key={i}></div>;
      }
      return <div className="letter" key={i}>{char}</div>;
    });
  }

  render() {
    return (
      <div className="hint">
        {this.wrap(this.props.answer)}
      </div>
    );
  }
}