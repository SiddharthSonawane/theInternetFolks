import styled from "styled-components";

export const Nav = styled.div`
  position: fixed;
  width: 100%;
  height: 15%;
  z-index: 1;
  height: 12vh;
  @media screen and (min-width: 768px) {
    display: flex;
    width: 100%;
    height: auto;
  }
`;

export const NavLogo = styled.div`
  width: 20%;
  margin: 0;
  @media screen and (min-width: 768px) {
    width: 20%;
    height: 100%;
    margin: 2% 0 1% 1%;
  }
`;

export const Logo = styled.div`
  color: #fff;
  cursor: pointer;
  position: fixed;
  top: 30px;
  left: 40px;
  width: 100%;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 10%;
    height: auto;
    margin: 0;
    padding: 0;
  }
`;

export const HamburgerMenu = styled.div`
  display: flex;
  position: absolute;
  top: 10px;
  right: 0;
  transform: translate(-100%, 50%);
  font-size: 1.8rem;
  cursor: pointer;

  @media screen and (min-width: 1000px) {
    display: none;
    color: black;
  }
`;

export const NavMenu = styled.div`
  display: ${(props) => (props.display ? "block" : "none")};
  margin: 1%;
  padding: 3%;
  width: 100%;
  height: auto;
  position: absolute;
  top: 80px;
  left: ${({ click }) => (click ? 0 : "-100")};
  opacity: 1;
  overflow: hidden;
  z-index: -1;
  background-color: #232127;
  border-radius: 10px;
  @media screen and (min-width: 1000px) {
    display: flex;
    flex-wrap: no-wrap;
    list-style: none;
    text-align: center;
    width: 90%;
    height: auto;
    padding: 0;
    position: relative;
    top: 0;
  }
`;

export const NavItem = styled.li`
  display: block;
  height: 50vh;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    width: 30%;
    height: auto;
    margin-right: 15%;
  }
`;

export const NavLink = styled.a`
  font-size: 1.5rem;
  color: #bfbfbf;
  text-align: center;
  text-decoration: none;
  padding: 2rem;
  width: 100;
  display: block;
  cursor: pointer;
  &:hover {
    color: #3b3054;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    text-decoration: none;
    padding: 2rem 4%;
    width: 100%;
    height: auto;

    &:hover {
      color: #3b3054;
    }
  }
`;

export const NavButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    width: 50%;
    height: auto;
    font-family: "Poppins", sans-serif;
  }
`;

const Button = styled.button`
  border: none;
  font-size: 1.5rem;
  width: 100%;
  height: 30%;
  margin: 1%;
  padding: 3%;
  border-radius: 1.5rem;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    border-radius: 1.5rem;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 700;
    width: 10px;
    height: 50px;
    padding: 0;
    text-decoration: none;
  }
`;

export const Login = styled(Button)`
  flex-grow: 1;
  background-color: #fff;
  color: #232127;
  border: 2px #2acfcf solid;
  transition: border 1sec;
  &:hover {
    color: #fff;
    background-color: #232127;
    border: 2px #2acfcf solid;
  }
`;

export const SignUp = styled(Button)`
  flex-grow: 1;
  background: #2acfcf;
  color: #fff;
  border: 2px #2acfcf solid;
  &:hover {
    color: #3b3054;
    background-color: #fff;
    border: 2px #2acfcf solid;
  }
`;
