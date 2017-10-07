import React from 'react';
import { Link } from 'react-router-dom';

export default class Result extends React.Component {
  getNumCorrectAnswers() {
    return this.props.result.reduce((sum, questionResult) => sum + questionResult, 0);
  }

  render() {
    return (
      <div>
        Du hade rätt på {this.getNumCorrectAnswers()} frågor av {this.props.result.length}
        <Link to={'/quiz/' + this.props.color}>Gör quizen igen</Link>
        <Link to="/">Välj en annan quiz</Link>
      </div>
    );
  }
}