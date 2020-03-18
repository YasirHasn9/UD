import React from "react";
import styled from "styled-components";
function Home(props) {
  const routeShop = e => {
    e.preventDefault();
    props.history.push("/item-list");
  };
  const HomeWrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  `;

  const HomeImage = styled.img`
    width: 90%;
    min-width: 1000px;
  `;

  const Button = styled.button`
    margin-top: -39px;
    width: 215px;
    height: 40px;
    border-radius: 25px;
    transition: all 0.3s;
    font-size: 1.2rem;
    &:hover {
      background: yellow;
      color: #1c5d76;
      border: 2px solid #1c5d76;
    }
  `;
  return (
    <HomeWrapper>
      <HomeImage
        src="https://www.uncommongoods.com/images/category/fun-fullwidth.jpg"
        alt="home-image"
      />
      <Button onClick={routeShop}>Shop now!</Button>
    </HomeWrapper>
  );
}

export default Home;
