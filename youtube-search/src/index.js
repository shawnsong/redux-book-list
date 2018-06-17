import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSerach from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';


const API_KEY = 'AIzaSyC3TZ6d3pKea0X31l4U3u2u_OlW6vxHvds';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }

        this.searchVideo('');

        this.searchVideo = this.searchVideo.bind(this);
        this.onVideoSelect = this.onVideoSelect.bind(this);
    }

    searchVideo(term) {
        YTSerach({key: API_KEY, term}, videos => {
            this.setState({videos, selectedVideo: videos[0]});
        });
    }

    onVideoSelect(selectedVideo) {
        this.setState({selectedVideo});
    }

    render() {
        const searchVideo = _.debounce(term => this.searchVideo(term), 300);

        return (
            <div>
                <SearchBar searchVideo={searchVideo} />
                <div className="row">
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));