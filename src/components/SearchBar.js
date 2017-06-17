import React, { Component } from 'react';
import { Container, Button, Input } from 'semantic-ui-react';

export default class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      query: ''
    };

    this.handleSearchFieldUpdate = this.handleSearchFieldUpdate.bind(this);
    this.handleSearchButtonPress = this.handleSearchButtonPress.bind(this);
  }

  handleSearchFieldUpdate(event) {
    this.setState({ query: event.target.value });
  }

  handleSearchButtonPress() {
    this.props.search(this.state.query);
  }

  render() {
    return (
      <Container fluid>
        <Input
          icon={{ name: 'search', circular: true, link: true }}
          placeholder='Search'
          onChange={this.handleSearchFieldUpdate}
          fluid />
        <Button primary onClick={this.handleSearchButtonPress}>
          Search
        </Button>
      </Container>
    );
  }
}
