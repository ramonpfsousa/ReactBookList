import _ from 'lodash';
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import SearchBar from './search_bar.js';
import VideoList from './video_list';
import VideoDetail from './video_detail.js';

const API_KEY = "AIzaSyCCo8f4n4FXOYn-CCjmXCKYvG5zLk9E5Zo";



export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('surfboards')
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term}, videos => {
      this.setState({ 
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}
