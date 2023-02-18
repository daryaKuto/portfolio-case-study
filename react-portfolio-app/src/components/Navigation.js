import React, { useState } from 'react';
import styled from 'styled-components';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  width: 100%;
  background-color: #000;
  z-index: 100;
`;

const NavIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #000;
  position: fixed;
  top: 60px;
  right: ${({ open }) => (open ? '0' : '-100%')};
  transition: all 0.3s ease-in-out;
  z-index: 99;

  @media (min-width: 768px) {
    position: static;
    flex-direction: row;
    height: auto;
  }
`;

const NavLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }

  @media (min-width: 768px) {
    width: auto;
  }
`;

const BurgerMenu = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const Bar = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin-bottom: 5px;
  background-color: #fff;

  &:nth-child(2) {
    width: 20px;
  }
`;

const Nav = styled.div`
  display: none;
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #000;
  min-width: 160px;
  z-index: 1;

  ${BurgerMenu}:hover & {
    display: block;
  }
`;

const NavItem = styled.a`
  color: #fff;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavContainer>
        <BurgerMenu onClick={() => setOpen(!open)}>
          <Bar />
          <Bar />
           <Bar />
    </BurgerMenu>
    <NavLinks open={open}>
      <NavLink href="/">
        <FaHome />
      </NavLink>
      <NavLink href="/about">
        <FaUser />
      </NavLink>
      <NavLink href="/portfolio">
        <FaBriefcase />
      </NavLink>
      <NavLink href="/contact">
        <FaEnvelope />
      </NavLink>
    </NavLinks>
  </NavContainer>
  <Nav>
    <NavItem href="/">Home</NavItem>
    <NavItem href="/about">About</NavItem>
    <NavItem href="/portfolio">Portfolio</NavItem>
    <NavItem href="/contact">Contact</NavItem>
  </Nav>
</>
);
}

export default Navigation;

