import React, { Component } from "react";
import { Card, Image, Popup } from "semantic-ui-react";

class DetailedResult extends Component {
  render() {
    return (
      <Popup
        trigger={
          <Card>
            <Image src={this.props.result.Poster} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{this.props.result.Title}</Card.Header>
              <Card.Meta>
                <span className="date">{this.props.result.Year}</span>
              </Card.Meta>
              <Card.Description>
                {this.props.result.Type.toUpperCase()}
                <br></br>
                {this.props.result.totalSeasons
                  ? this.props.result.totalSeasons.toUpperCase() + " Seasons"
                  : null}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <strong>{this.props.result.Plot}</strong>
            </Card.Content>
          </Card>
        }
        flowing
        hoverable
      >
        <h3>Rated: {this.props.result.Rated}</h3>
        <h3>Rating: {this.props.result.imdbRating}/10</h3>
      </Popup>
    );
  }
}

export default DetailedResult;
