import React from "react";
import styled from "styled-components";
import ChatLogo from "../../aseets/chat.png";
import tw from "twin.macro";
import { Link } from "react-router-dom";


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
    <Link to={`/`}>
      <LogoContainer>
        <Image>
          <img src={ChatLogo} alt="car_logo" />
        </Image>
        <LogoText>Comment Management</LogoText>
      </LogoContainer>
    </Link>
  );
}
