import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Logo } from "./logo";
import { NavItems } from "./navItems";

const NavBarContainer = styled.div`
  min-height: 68px;
  ${tw`
    shadow-md
    bg-white
    w-full
    // max-w-full
    flex
    flex-row
    items-center
    lg:pl-12
    lg:pr-12
    justify-between
    m-0
  `}
`;

const LogoContainer = styled.div``;

export const NavBar = () => {
  return (
    <NavBarContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavItems />
    </NavBarContainer>
  );
};
