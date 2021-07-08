import React from "react";
import styled, { css } from "styled-components";
import tw from "twin.macro";
import { slide as Menu } from "react-burger-menu";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../constant/responsive";
import menuStyles from "./menuStyles";
import { Link } from "react-router-dom";

const ListContainer = styled.ul`
  ${tw`
        flex
        list-none
    `}
`;

const Text = styled.p`
 ${tw`transform transition duration-200 hover:text-yellow-500 active:text-black`};
`
const NavItem = styled.li`
  ${tw`
        text-xs
        md:text-base
        text-black
        font-medium
        md:mr-5
        cursor-pointer
        transition
        duration-300
        ease-in-out
        hover:text-gray-700
    `}
  ${({ menu }) =>
    menu &&
    css`
      ${tw`
      text-white
      text-xl
      mb-3
      focus:text-white
    `};
    `};
`;

export function NavItems() {
  const isMobile = useMediaQuery({ maxWidth: SCREENS.md });

  if (isMobile)
    return (
      <Menu right styles={menuStyles}>
        <ListContainer>
          <NavItem menu>
            <Link to={`/`}>
              <p>Home</p>
            </Link>
          </NavItem>
          <NavItem menu>
            <Link to={`/lost`}>
              <p>Service</p>
            </Link>
          </NavItem>
          <NavItem menu>
            <Link to={`/lost`}>
              <p>Report</p>
            </Link>
          </NavItem>
          <NavItem menu>
            <Link to={`/lost`}>
              <p>Contact Us</p>
            </Link>
          </NavItem>
        </ListContainer>
      </Menu>
    );

  return (
    <ListContainer>
      <NavItem>
        <Link to={`/`}>
          <Text>Home</Text>
        </Link>
      </NavItem>
      <NavItem>
        <Link to={`/lost`}>
          <Text>Service</Text>
        </Link>
      </NavItem>
      <NavItem>
        <Link to={`/lost`}>
          <Text>Report</Text>
        </Link>
      </NavItem>
      <NavItem>
        <Link to={`/lost`}>
          <Text>Contact Us</Text>
        </Link>
      </NavItem>
    </ListContainer>
  );
}
