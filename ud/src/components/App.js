import React from "react";
import axios from "axios";
import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";

function App() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:3333/items")
      .then(res => setItems(res.data))
      .catch(err => console.log("error", err));
  }, []);

  console.log("This is items", items);
  //   first react read the app as whole and then update with the states if there is an update

  const AppDiv = styled.div`
    font-family: sans-serif;
    text-align: center;
    height: 100%;
    width: 100%;
  `;

  const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    border-bottom: 1px solid #efefef;
    margin-bottom: 32px;
  `;

  const H1 = styled.h1`
    color: #1c5d76;
  `;
  const NavLinks = styled.div`
    display: flex;
    justify-content: space-between;
    a {
      text-decoration: none;
      color: #1c5d76;
      font-weight: bold;
      margin-right: 8px;
      &:last-of-type {
        margin-right: 0;
      }
      &:active {
        border-bottom: 1px solid #1c5d76;
      }
    }
  `;

  return (
    <AppDiv>
      <Nav>
        <H1>Dustin's Trinkets</H1>
        <NavLinks>
          <NavLink exact to="/item-form">
            Add Item
          </NavLink>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/item-list">Shop</NavLink>
        </NavLinks>
      </Nav>

      <Route exact path="/" component={Home} />
    </AppDiv>
  );
}

export default App;
