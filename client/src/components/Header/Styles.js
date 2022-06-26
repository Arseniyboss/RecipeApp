import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

export const HeaderContainer = styled.div`
  background: orange;
  color: white;
  padding: 22px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1;
`;

export const NavItem = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 1.6rem;
  transition: 0.4s all ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  gap: 1.2rem;

  @media screen and (max-width: 350px) {
    gap: 0.7rem;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Avatar = styled.div`
  --size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--size);
  width: var(--size);
  background: lightgrey;
  border-radius: 50%;
  margin: 0;
  padding: 0;
  text-transform: capitalize;
  cursor: pointer;
`;

export const Dropdown = styled.div`
  position: absolute;
  background: white;
  color: #586380;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  font-weight: bold;
  margin-top: 2.5rem;
  border-radius: 10px;
  overflow: hidden;
`;

export const DropdownLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
`;

export const DropdownText = styled.p`
  padding: 0.3rem 0.6rem;
  cursor: pointer;

  &:hover {
    background: lightgrey;
    color: #303545;
  }
`;

export const Envelope = styled(FaEnvelope)`
  font-size: 1.8rem;
  margin-left: 5px;
`;
