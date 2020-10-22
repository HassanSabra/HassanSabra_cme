import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
function NavBar() {
  return (
    <Menu fixed="top" inverted>
    <Container>
      
      <Menu.Item name="Page1" as={NavLink} to="/page1" />
      <Menu.Item name="Page2" as={NavLink} to="/page2" />      
    </Container>
  </Menu>
 
  );
}
export default NavBar;
