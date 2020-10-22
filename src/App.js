import React, { Fragment } from "react";
import Page2 from "./Page2";
import Page1 from "./Page1";
import { Route} from "react-router-dom";
import NavBar from "./NavBar";
import { Container } from "semantic-ui-react";
function App() {
  return (
    <Fragment>
      <Container style={{ marginTop: "5em" }}>
        <NavBar />
        <Route exact path="/Page1" component={Page1} />
        <Route exact path="/Page2" component={Page2} />
      </Container>
    </Fragment>
  );
}

export default App;
