import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import quizQuestions from '../infrastructure/quizQuestions';
import Result from './Result';
import Quiz from './Quiz';
import Home from './Home';

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      currentResult: []
    };
  }

  presentResult(result) {
    this.setState({
      currentResult: result
    });
  }

  renderResult(props) {
    return(
      <Result result={this.state.currentResult} color={props.match.params.color} />
    );
  }

  getQuizNames() {
    let quizNames = {};
    for (let quizKey in quizQuestions) { 
      if (quizQuestions.hasOwnProperty(quizKey)) {
        quizNames[quizKey] = quizQuestions[quizKey].name;
      }
    }
    return quizNames;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>   
          <Route path="/quiz/:color/result" render={this.renderResult.bind(this)}/>      
          <Route path="/quiz/:color" render={props => 
            <Quiz 
              name={quizQuestions[props.match.params.color].name} 
              questions={quizQuestions[props.match.params.color].questions} 
              presentResult={this.presentResult.bind(this)}
            />
          }/>
          <Route path="/" render={() => <Home quizNames={this.getQuizNames()} />} />
        </Switch>
      </BrowserRouter>
    );
  }

}
