import React from 'react';

export default class Hint extends React.Component {
  wrap(text) {
    return text.split('').map(t => {
      if (t === ' ') {
        return <div className="space"></div>;
      }
      return <div className="letter">{t}</div>;
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