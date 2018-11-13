import _ from 'lodash';
import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';


export default class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
