import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BoookList extends Component {

    renderList() {
        return this.props.books.map(book => {
            return (
                <li 
                    key={book.title} 
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-md-4">
                {this.renderList()}
            </ul>
        )
    };
};

function mapStateToProps(state) {
    // Whatever returned here will show up as props inside BookList
    return {
        books: state.books
    };
}

// Anything returned from this function will end up as props on the
// BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBOok is called, the result should be passed
    // to all reducers
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BoookList);