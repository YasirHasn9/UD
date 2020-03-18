import React from "react";

function ItemDescription(props) {
  console.log("this is the ptops from ItemDescription ", props);
  return <div>{props.item.description}</div>;
}

export default ItemDescription;
