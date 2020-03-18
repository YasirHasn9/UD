import React from "react";

function ItemShipping(props) {
  console.log("this is ", props);
  return (
    <div>
      <h1>{props.item.shipping}</h1>
    </div>
  );
}

export default ItemShipping;
