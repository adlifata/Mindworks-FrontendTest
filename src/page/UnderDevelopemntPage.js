import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
// import { DevelopmentImg } from "../aseets/development.png";
import DevelopmentImg from "../aseets/development.png";

const MainContainer = styled.div`
  ${tw`mt-36 lg:mt-1 flex flex-col`};
`;

const Header = styled.h1`
  ${tw`font-bold text-xl mt-5 lg:text-3xl `};
`;

function UnderDevelopemntPage() {
  return (
    <MainContainer>
      <div>
        <img className="mx-auto" src={DevelopmentImg} alt="development_img" />
      </div>
      <Header>This page is under development</Header>
    </MainContainer>
  );
}

export default UnderDevelopemntPage;
