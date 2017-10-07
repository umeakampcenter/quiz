import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    let quizButtons = [];
    for (let color in this.props.quizNames) { 
      if (this.props.quizNames.hasOwnProperty(color)) {
        quizButtons.push(
          <div className="color-select" key={color}>
            <img src={'belt-' + color} alt="" className="beltimg"/>
            <div className="quiz-name">{this.props.quizNames[color]}</div>
            <Link to={'/quiz/' + color}></Link>
          </div>
        );
      }
    }
    return (
      <div>
        <h1>Jujutsu - Quiz</h1>
        {quizButtons}
      </div>
    );
  }
}