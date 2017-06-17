import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import YTSearch from 'youtube-api-search';
import { Container } from 'semantic-ui-react';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const YT_API_KEY = process.env.YT_API_KEY;

class App extends Component {
  constructor() {
    super();

    this.state = {
      videos: []
    };

    this.search = this.search.bind(this);
  }

  search(term) {
    YTSearch({key: YT_API_KEY, term}, (videos) => {
      console.log(videos);
      this.setState({ videos });
    });
  }

  render() {
    return (
      <Container fluid>
        <SearchBar search={this.search} />
        <VideoList videos={this.state.videos} />
      </Container>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('react-entry'));
