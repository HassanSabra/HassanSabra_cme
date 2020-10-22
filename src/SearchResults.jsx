import React, { Component } from "react";
import { Card,  Image } from "semantic-ui-react";

class SearchResults extends Component {
  render() {
    return (
      <Card>
        <Image src={this.props.result.Poster} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.props.result.Title}</Card.Header>
          <Card.Meta>
            <span className="date">{this.props.result.Year}</span>
          </Card.Meta>
          <Card.Description>
            {this.props.result.Type.toUpperCase()}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default SearchResults;
