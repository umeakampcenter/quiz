import React from 'react';
import { Link } from 'react-router-dom';

export default class Result extends React.Component {
  getNumCorrectAnswers() {
    return this.props.result.reduce((sum, questionResult) => sum + questionResult, 0);
  }

  render() {
    return (
      <div>
        <div className="quizName">
          <h1>{this.props.name}</h1>
        </div>
        <div className="carusel">
          <div className="questionwrap">
            <div className="resultbox">
              <h2>Resultat</h2>
              <div className="result-text">Du hade rätt på {this.getNumCorrectAnswers()} frågor av {this.props.result.length}</div>
              <Link to={'/quiz/' + this.props.color} className="link-btn">Gör quizen igen</Link>
              <Link to="/" className="link-btn">Välj en annan quiz</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}