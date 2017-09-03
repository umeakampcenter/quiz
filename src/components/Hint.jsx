import React from 'react';

export default class Hint extends React.Component {
  render() {
    return (
      <div className="hint">
        {this.props.hintsUsed}
      </div>
    );
  }
}