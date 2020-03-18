import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ListItems(props) {
  const routeToItem = (e, item) => {
    e.preventDefault();
    props.history.push(`/item-list/${item.id}`);
  };
  const ItemsListWrapper = styled.div`
    margin-top: 36px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  `;

  const ItemCard = styled.div`
    width: 250px;
    margin: 0 10px 32px;
    cursor: pointer;
    p {
      margin: 0 0 4px;
      text-align: left;
      color: #595959;
    }
  `;
  const ItemListImg = styled.img`
    width: 100%;
    border: 1px solid lightgray;
  `;
  return (
    <ItemsListWrapper>
      {props.items.map(item => {
        return (
          <ItemCard key={item.id} onClick={e => routeToItem(e, item)}>
            <ItemListImg src={item.imageUrl} alt={item.name} />
            <p>{item.name}</p>
            <p>{item.price}</p>
          </ItemCard>
        );
      })}
    </ItemsListWrapper>
  );
}

export default ListItems;
