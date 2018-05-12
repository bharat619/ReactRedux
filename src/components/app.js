import React, { Component } from 'react';
import BookList from '../containers/book-list'
import BookDeatils from '../containers/book-detail'
export default class App extends Component {
  render() {
    return (
      <div>
        <BookList/>
        <BookDeatils/>
      </div>
    );
  }
}
