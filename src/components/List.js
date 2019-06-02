import React, { Component } from 'react';
import '../App.css';

class List extends Component {
  render() {
    const {
      title,
      description
    } = this.props;

    return (
      <div className="List">
        <div className="List-description">{description}</div>
      </div>
    );
  }
}

export default List;
