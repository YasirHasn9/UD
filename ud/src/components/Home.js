import React from "react";
import styled from "styled-components";
function Home() {
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
    margin-top: -16px;
    width: 115px;
  `;
  /*
.shop-button.md-button {
  margin-top: -16px;
  width: 115px;
}
    */
  return (
    <HomeWrapper>
      <HomeImage
        src="https://www.uncommongoods.com/images/category/fun-fullwidth.jpg"
        alt="home-image"
      />
      <Button>Shop now!</Button>
    </HomeWrapper>
  );
}

export default Home;
