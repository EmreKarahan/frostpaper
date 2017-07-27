// ./src/components/book/BookPage.js
import React from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/bookActions';

class BookList extends React.Component{
  constructor(props){    
    super(props);
    this.state = { books: { Accept:''}};
  }

 componentWillMount() {
    this.props.fetchBooks();
  }

  render(){
    // return JSX
    return(
      <div>
        {this.state.books.Accept}
      </div>
    )
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    // You can now say this.props.books
    books: state.books
  }
};

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
  // You can now say this.props.createBook
    fetchBooks: books => dispatch(bookActions.fetchBooks())
  }
};

// Use connect to put them together
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

