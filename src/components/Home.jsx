import React from 'react';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    console.log(this.props.quizNames);
    let quizButtons = [];
    for (let color in this.props.quizNames) { 
      if (this.props.quizNames.hasOwnProperty(color)) {
        quizButtons.push(
          <div className="color-select" key={color}>
            <Link to={'/quiz/' + color}>{this.props.quizNames[color]}</Link>
          </div>
        );
      }
    }
    return (
      <div>
        {quizButtons}
      </div>
    );
  }
}