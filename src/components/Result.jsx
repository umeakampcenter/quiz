import React from 'react';

export default class Result extends React.Component {

  getNumCorrectAnswers() {
    return this.props.result.reduce((sum, questionResult) => sum + questionResult, 0);
  }

  render() {
    return (
      <div>
        Du hade rätt på {this.getNumCorrectAnswers()} frågor av {this.props.result.length}
      </div>
    );
  }
}