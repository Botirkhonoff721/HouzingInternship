import React from "react";
import Button from "../Button/Button";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import {
  Wrapper,
  Container,
  Body,
  NavbarWrapper,
  NavbarBody,
  Link,
  Logo,
} from "./style";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Container>
        <NavbarWrapper>
          <Logo onClick={() => navigate("/home")}>
            <Logo.Icon />
            <Logo.Title>Houzing</Logo.Title>
          </Logo>
          <NavbarBody>
            {navbar.map(({ title, path, id }) => {
              return (
                <Link key={id} to={path}>
                  {title}
                </Link>
              );
            })}
          </NavbarBody>

          <Button type={"primary"} width={"120px"}>
            Login
          </Button>
        </NavbarWrapper>
      </Container>
      <Body>
        <Outlet />
      </Body>
    </Wrapper>
  );
};

export default Navbar;
