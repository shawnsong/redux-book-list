import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            term: ''
        }

        this.onInputChange = this.onInputChange.bind(this);
    }


    onInputChange(value) {
        this.props.searchVideo(value);
        this.setState({term: value});
    }

    render() {
        return (
        <div className="search-bar">
            <input 
                value={this.state.term}
                onChange={event => this.onInputChange(event.target.value)} />
        </div>);
    }
}

export default SearchBar;