import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    let quizButtons = [];
    for (let color in this.props.quizNames) { 
      if (this.props.quizNames.hasOwnProperty(color)) {
        quizButtons.push(
          <div className="color-select" key={color}>
            <img src={'belt-' + color} alt="" class="beltimg"/>
            <Link to={'/quiz/' + color}>{this.props.quizNames[color]}</Link>
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