import React from "react";
import { Route, NavLink } from "react-router-dom";
import styled from "styled-components";
import ItemDescription from "./ItemDescription";
import ItemShipping from "./ItemShipping";

import axios from "axios";

function Item(props) {
  const [showShipping, setShowShipping] = React.useState(false);
  const [showStory, setShowStory] = React.useState(false);

  const showShippingDetails = e => {
    e.preventDefault();
    setShowShipping(true);
    setShowStory(false);
  };

  const showStoryDetails = e => {
    e.preventDefault();
    setShowStory(true);
    setShowShipping(false);
  };

  let item = props.items.find(item => `${item.id}` === props.match.params.id);

  const deleteItem = e => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3333/items/${item.id}`)
      .then(res => {
        console.log(res);
        props.setItems(res.data);
        props.history.push("/item-list");
      })
      .catch(err => console.log(err));
  };
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
    button {
      color: #a5a5a5;
      padding: 10px 20px;
      margin: 0 20px;
      border-radius: 10px;
      font-size: 1rem;
      background: #a1d5d4;
      color: #fff;
    }
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
        <button onClick={showStoryDetails}>the story</button>
        <button onClick={showShippingDetails}>shipping</button>
      </ItemSubNav>

      {showShipping && <p>{item.shipping}</p>}
      {showStory && <p>{item.description}</p>}

      {showStory ? (
        <div>
          <button onClick={deleteItem}>Delete</button>
          <button onClick={() => props.history.push(`/update-item/${item.id}`)}>
            Edit
          </button>
        </div>
      ) : null}
    </ItemWrapper>
  );
}

export default Item;
