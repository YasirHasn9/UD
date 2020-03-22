import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const initialItem = {
  name: "",
  price: "",
  imageUrl: "",
  description: "",
  shipping: ""
};
function UpdateItem(props) {
  const [item, setItem] = useState(initialItem);
  useEffect(() => {
    const updatedItem = props.items.find(
      item => `${item.id}` === props.match.params.id
    );
    if (updatedItem) {
      setItem(updatedItem);
    }
  }, [props.items, props.match.params.id]);

  const handleChange = e => {
    e.persist();
    if (e.target.name === "price") {
      return parseInt(e.target.value, 10);
    }
    setItem({
      ...item,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:3333/items/${item.id}`, item)
      .then(res => props.setItems(res.data))
      .catch(err => console.log(err));
  };

  const H2 = styled.h2`
    color: #1c5d76;
  `;
  const Form = styled.form`
    width: 80%;
    margin: 30px auto;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 20px auto;
      width: 80%;
      background: #fff;
      label {
        width: 20%;
      }
      input,
      textarea {
        color: #333;
        font-size: 1rem;
        padding: 10px 20px;
        width: 80%;
        border: 1px solid #1c5d76;
      }
    }
  `;
  const Input = styled.input`
    border-radius: 10px;
  `;

  const Textarea = styled.textarea`
    height: 150px;
    border-radius: 20px;
  `;

  const Button = styled.button`
    background-color: #1c5d76;
    padding: 20px 20px;
    margin-top: 40px;
    width: 200px;
    margin: auto;
    color: #fff;
    font-size: 1.1rem;
    border-radius: 20px;
  `;
  return (
    <div
      style={{
        margin: "30px auto"
      }}
    >
      <H2>Update From</H2>
      <Form onSubmit={handleSubmit}>
        <div>
          <label>Item Name:</label>
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="name"
            value={item.name}
          />
        </div>

        <div>
          <label>Item Price:</label>
          <Input
            type="number"
            name="price"
            onChange={handleChange}
            placeholder="Price"
            value={item.price}
          />
        </div>
        <div>
          <label>Upload Image :</label>
          <Input
            type="string"
            name="imageUrl"
            onChange={handleChange}
            placeholder="Image"
            value={item.imageUrl}
          />
        </div>
        <div>
          <label>Description:</label>
          <Textarea
            type="string"
            name="description"
            onChange={handleChange}
            placeholder="Description"
            value={item.description}
          />
        </div>
        <div>
          <label>Shipping:</label>
          <Textarea
            type="string"
            name="shipping"
            onChange={handleChange}
            placeholder="Shipping"
            value={item.shipping}
          />
        </div>

        <div />

        <Button>Update</Button>
      </Form>
    </div>
  );
}

export default UpdateItem;
