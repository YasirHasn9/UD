import React from "react";
import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import ItemDescription from "./ItemDescription";
import ItemShipping from "./ItemShipping"

function Item(props) {
  let item = props.items.find(item => `${item.id}` === props.match.params.id);

  if (!props.match.params.id || !item) {
    return <p>Loading ...</p>;
  }

  const ItemWrapper = styled.div`
    max-width: 900px;
    margin: 0 auto;
  `;

  const ItemHeader = styled.div`
    display: flex;
  `;
  const ImageWrapper = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-start;
  `;

  const ItemTitleWrapper = styled.div`
    width: 50%;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
  `;

  const ItemSubNav = styled.nav`
    border-bottom: 1px solid #a1d5d4;
    justify-content: center;
    background: blue;
  `;
  return (
    <ItemWrapper>
      <ItemHeader>
        <ImageWrapper>
          <img src={item.imageUrl} alt={item.name} />
        </ImageWrapper>
        <ItemTitleWrapper>
          <h2>{item.name}</h2>
          <h4>${item.price}</h4>
        </ItemTitleWrapper>

        </ItemHeader>
        <ItemSubNav>
          <NavLink exact to={`/item-list/${item.id}`}>
            The story
          </NavLink>
          <NavLink exact to={`/item-list/${item.id}/shipping`}>
            Shipping
          </NavLink>
        </ItemSubNav>
        <Route
          exact
          path="/item-list/:id"
          render={props => <ItemDescription {...props} item={item} />}
        />
        <Route
        path="/item-list/:id/shipping"
        render={props => <ItemShipping {...props} item={item} />}
      />
    </ItemWrapper>
  );
}

export default Item;
