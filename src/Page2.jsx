import React from "react";
import { connect } from "react-redux";
import { Button, Grid} from "semantic-ui-react";

class Page2 extends React.Component {
  render() {
    return (
      <Grid>
        <Button.Group fluid>
          <Button
            content="-"
            onClick={this.props.MinusButtonPressed}
            color="red"
          >
            -
          </Button>
          <Button.Or text={this.props.message} />
          <Button
            content="+"
            onClick={this.props.PlusButtonPressed}
            color="green"
            positive
          >
            +
          </Button>
        </Button.Group>
      </Grid>
    );
  }
}
const mapStatetoProps = (state) => {
  return {
    message: state.message,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    PlusButtonPressed: () => dispatch({ type: "Plus" }),
    MinusButtonPressed: () => dispatch({ type: "Minus" }),
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(Page2);
