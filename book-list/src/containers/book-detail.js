import React, { Component } from 'react';
import { connect } from 'react-redux';
 

class BookDetail extends Component {

    render() {
        return (
            <div className="col-md-4">
                <h3>{this.props.selectedBook.title}</h3>
                <div>Book Details</div>
            </div>
        )
    }
}

function mapPropsToState(state) {
    return {selectedBook: state.activeBook}
}

export default connect(mapPropsToState)(BookDetail);