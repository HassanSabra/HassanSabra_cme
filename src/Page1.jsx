import React from "react";
import { Button, Grid, Input, List } from "semantic-ui-react";
import $ from "jquery";
import SearchResults from "./SearchResults";
import DetailedResult from "./DetailedResult";

const Page1 = () => {
  const [searchParam, setsearchParam] = React.useState();
  const [sresult, setresult] = React.useState();
  const [detailedResult, setdetailedResult] = React.useState();
  const [loading, setloading] = React.useState(false);

  const submitSearch = function (searchKey) {
    setloading(true);
    setdetailedResult(undefined);
    const settings = {
      async: true,

      url: `http://www.omdbapi.com/?apikey=6ddf3ec7&s=${searchKey}`,
      method: "GET",
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      if (response.Response === "True") {
        console.log(response);
        setresult(response.Search);
      } else if (response.Response === "False") {
        alert(response.Error);
      }
      setloading(false);
    });
  };

  const itemPressed = function (id) {
    const settings = {
      async: true,

      url: `http://www.omdbapi.com/?apikey=6ddf3ec7&i=${id}`,
      method: "GET",
    };

    $.ajax(settings).done(function (response) {
      console.log(response);
      if (response.Response === "True") setdetailedResult(response);
      else if (response.Response === "False") {
        alert(response.Error);
      }
    });
  };
  let resultListItems;

  if (sresult) {
    resultListItems = sresult.map((result, ind) => {
      return (
        <div key={ind}>
          <List.Item
            key={result.imdbID}
            onClick={(e) => itemPressed(result.imdbID)}
          >
            <SearchResults result={result} />
          </List.Item>
          <br></br>
        </div>
      );
    });
  }

  return (
    <Grid columns="two">
      <Grid.Column>
        <Input
          fluid
          placeholder="Search"
          onChange={(e) => {
            setsearchParam(e.target.value);
          }}
        />
      </Grid.Column>
      <Grid.Column>
        <Button
          positive
          floated="right"
          disabled={!searchParam}
          onClick={(e) => submitSearch(searchParam)}
          loading={loading}
        >
          Search
        </Button>
      </Grid.Column>
      <Grid.Column>
        <List>{sresult ? resultListItems : null}</List>
      </Grid.Column>
      <Grid.Column>
        {detailedResult ? <DetailedResult result={detailedResult} /> : null}
      </Grid.Column>
    </Grid>
  );
};

export default Page1;
