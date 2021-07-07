import React from "react";
import styled from "styled-components";
import CarLogoImg from "../../aseets/car-logo.png";
import tw from "twin.macro";

const LogoContainer = styled.div`
  ${tw`
    flex
    items-center
    ml-5
    lg:ml-0
    `}
`;

const LogoText = styled.div`
  ${tw`
    text-base
    md:text-2xl
    font-bold
    text-black
    m-1
    `}
`;

const Image = styled.div`
  width: auto ${tw`
    h-6
    md:h-9
    `} img {
    width: auto;
    height: 100%;
  }
`;

export function Logo() {
  return (
    <LogoContainer>
      <Image>
        <img src={CarLogoImg} alt="car_logo" />
      </Image>
      <LogoText>Comment Management</LogoText>
    </LogoContainer>
  );
}
