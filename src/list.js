import React, { Component } from 'react';
import './css/app.css';
import Film from './film';

class List extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Film</th>
            <th>Added by</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            { this.props.films.map( film => <Film film={film} key={film.id} user={this.props.user} app={this.props.app}/>) }
        </tbody>
      </table>
    );
  }
}

export default List;
