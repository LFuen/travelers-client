import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { fadeInDown, fadeIn } from "react-animations";
import likeClick from "../images/likeClick.png";
import save from "../images/save.png";
import saveClick from "../images/saveClick.png";

// ======= LOGIN ======= //
const fadeAnimation = keyframes`${fadeInDown}`;
const FadeForm = styled.form`
  animation: 2s ${fadeAnimation};
`;
const LogButton = styled.button`
  color: #0d3b4c;
  text-decoration: none;
  text-shadow: 2px 2px 2px whitesmoke;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  background: #f4f4ed;
  box-shadow: inset 2px 2px 5px #486a87, inset -2px -2px 5px #486a87;
  font-weight: bold;
  margin-top: 15px;

  :hover {
    transition: all 0.3s ease-out;
    background-color: #0d3b4c;
    color: whitesmoke;
    font-weight: bold;
    text-shadow: 2px 2px 2px whitesmoke;
  }
`;
const loginFade = keyframes`${fadeIn}`;
const LogSection = styled.div`
  width: 35%;
  margin-left: 30%;
  margin-top: 10%;
  backdrop-filter: blur(10px);
  padding: 25px;
  border-radius: 10px;
  box-shadow: -5px -5px 27px #486a87, 5px 5px 27px #486a87;

  form {
    display: block;
    align-items: center;
    width: 100%;
    text-align: center;
    justify-content: center;
  }

  input {
    width: 50%;
    margin-bottom: 20px;
    box-shadow: 2px 2px 2px 2px whitesmoke;
    border-radius: 10px;
  }

  label {
    color: #0d3b4c;
    text-shadow: 2px 2px 2px whitesmoke;
  }

  animation: 5s ${loginFade};
`;
const LogLink = styled(Link)`
  color: #0d3b4c;
  text-decoration: none;
  font-size: 10px;
  margin-top: 40px;
  text-shadow: 2px 2px 2px #92b9bd;

  :hover {
    color: whitesmoke;
  }
`;
const Header = styled.header`
  align-self: right;
  position: fixed;
  right: 0;
  padding-right: 10px;
  height: 100px;

  @media screen and (max-width: 430px) {
    position: relative;
    margin-top: 30px;
    padding-right: 0px;
  }
`;

// ======= WELCOME ======= //

const WelcomeDiv = styled.div`
  width: 35%;
  margin: auto;
  color: #0d3b4c;
  backdrop-filter: blur(10px);
  text-shadow: 2px 2px 2px whitesmoke;
  padding: 25px;
  border-radius: 25px;
  box-shadow: -5px -5px 27px #486a87, 5px 5px 27px #486a87;
  text-align: center;
  animation: 4s ${loginFade};

  @media screen and (max-width: 720px) {
    margin-top: 0px;
    h1 {
      font-size: 18px;
    }
  }
`;
const WelcomeButtons = styled.div`
  display: flex;
  justify-content: space-evenly;

  button:hover {
    transition: all 0.3s ease-out;
    background-color: #0d3b4c;
    color: whitesmoke;
    font-weight: bold;
    text-shadow: 2px 2px 2px whitesmoke;
  }
`;
const WelcomeP = styled.div`
  width: 65%;
  margin: 150px auto;
  font-size: 25px;
  margin-bottom: 100px;
  border-radius: 10px;
  backdrop-filter: blur(23px);
  padding: 5px;

  animation: 2s ${fadeAnimation};

  @media screen and (max-width: 430px) {
    margin-top: 0px;
  }
`;

// ======= HOME ========= //

const HomeDiv = styled.div`
  width: 35%;
  margin: 150px auto;
  color: #0d3b4c;
  backdrop-filter: blur(8px);
  text-shadow: 2px 2px 2px whitesmoke;
  padding: 25px;
  border-radius: 25px;
  box-shadow: -5px -5px 27px #486a87, 5px 5px 27px #486a87;
  text-align: center;

  animation: 3s ${loginFade};

  @media screen and (max-width: 960px) {
    margin-top: auto;
  }
`;
const ShowGuide = styled.button`
  color: #0d3b4c;
  text-decoration: none;
  text-shadow: 2px 2px 2px whitesmoke;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  background: #f4f4ed;
  box-shadow: inset 2px 2px 5px #486a87, inset -2px -2px 5px #486a87;
  font-weight: bold;
  margin-bottom: 20px;

  :hover {
    transition: all 0.3s ease-out;
    background-color: #0d3b4c;
    color: whitesmoke;
    font-weight: bold;
    text-shadow: 2px 2px 2px whitesmoke;
  }
`;

// ======= NAVBAR ======= //

const NavDiv = styled.div`
  margin: auto;

  nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .navbar {
    background: #00000000; // short code for transparency using hex value
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
  }

  ul.nav-menu {
    padding: 0px;
    margin: auto;
  }

  .fa-firstdraft {
    margin-left: 0.5rem;
    font-size: 1.6rem;
  }

  .nav-menu {
    display: flex;
    grid-template-columns: repeat(4, auto);
    grid-gap: 50px;
    list-style: none;
    text-align: center;
    width: fit-content;
    justify-content: end;
    backdrop-filter: blur(10px);
  }

  .nav-item {
    display: flex;
    align-items: center;
    height: 80px;
  }

  .nav-links {
    color: #ffffff;
    text-decoration: none;
    text-shadow: 2px 2px 2px black;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    background: #6999c3;
    box-shadow: inset 5px 5px 27px #486a87, inset -5px -5px 27px #486a87;
    font-weight: bold;
  }

  .nav-links:hover {
    background-color: #6999c3;
    color: #0d3b4c;
    font-weight: bold;
    text-shadow: 2px 2px 2px whitesmoke;
    border-radius: 10px;
    transition: all 0.2s ease-out;
    box-shadow: -5px -5px 27px #486a87, 5px 5px 27px #486a87;
  }

  .fa-bars {
    color: #fff;
  }

  .nav-links-mobile {
    display: none;
  }

  .menu-icon {
    display: none;
  }
  .copy {
    display: none;
  }

  .mobile {
    display: none;
  }

  @media screen and (max-width: 960px) {
    .NavbarItems {
      position: relative;
    }

    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 85%;
      height: 90vh;
      position: absolute;
      top: 68px;
      left: -100%;
      opacity: 0.95;
      transition: all 0.5s ease;
    }

    .nav-item {
      display: flex;
      width: 50%;
      margin: auto;
      align-items: center;
      height: 30px;
    }

    .nav-menu.active {
      background: #051923;
      border-radius: 20px;
      left: 0;
      transition: all 0.5s ease;
      z-index: 1;
    }

    .nav-links {
      margin-top: 10px;
      text-align: center;
      padding: 1rem;
      width: 80%;
      display: table;
    }

    .nav-links:hover {
      background-color: #6999c3;
      border-radius: 80;
    }

    .navbar-logo {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(25%, 50%);
    }

    .menu-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }

    .fa-times {
      color: #6999c3;
      font-size: 2rem;
      text-shadow: 2px 2px 2px black;
    }

    .fa-bars {
      color: #6999c3;
      font-size: 2rem;
      text-shadow: 2px 2px 2px black;
    }

    .nav-links-mobile {
      display: block;
      text-align: center;
      padding: 1rem;
      margin: 1rem auto;
      border-radius: 8px;
      width: 80%;
      background: #6999c3;
      text-decoration: none;
      color: #fff;
      font-size: 1.5rem;
    }

    .nav-links-mobile:hover {
      background: #fff;
      color: #6999c3;
      transition: 250ms;
    }

    button {
      display: none;
    }

    .mobile {
      display: inline-block;
      border-radius: 20px;
    }

    div {
      width: fit-content;
    }
  }
`;
const DropDown = styled.div`
  .dropbtn {
    background-color: #4caf50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
  }

  .content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown:hover .content {
    display: block;
  }
`;

// ======= DEFAULT USER ICON ======= //

const UserIcon = styled.div`
  img {
    width: 60px;
    height: 60px;
  }
`;

// ======= SIGNUP ======= //

const SignUpDiv = styled.div`
  width: 35%;
  margin: 0 auto;
  padding: 25px;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: -5px -5px 27px #486a87, 5px 5px 27px #486a87;

  form {
    display: block;
    align-items: center;
    width: 100%;
    text-align: center;
    justify-content: center;
  }

  input {
    width: 50%;
    margin-top: 15px;
    border-radius: 10px;
  }

  label {
    margin-top: 15px;
    color: #0d3b4c;
    text-shadow: 2px 2px 2px #92b9bd;
    font-weight: bold;
  }

  h2 {
    color: #0d3b4c;
  }

  button {
    color: #0d3b4c;
    text-decoration: none;
    text-shadow: 2px 2px 2px whitesmoke;
    border-radius: 10px;
    padding: 0.5rem 1rem;
    background: #f4f4ed;
    box-shadow: inset 2px 2px 5px #486a87, inset -2px -2px 5px #486a87;
    font-weight: bold;
    margin-top: 15px;
    margin-bottom: 20px;
  }

  button:hover {
    transition: all 0.3s ease-out;
    background-color: whitesmoke;
    color: whitesmoke;
    font-weight: bold;
    text-shadow: 2px 2px 2px #0d3b4c;
  }

  p {
    font-size: 10px;
  }

  animation: 3s ${loginFade};
`;

// ======= STYLED ELEMENTS ======= //

const DivCenter = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
  text-align: center;
  color: #0d3b4c;
  font-size: 30px;
  font-weight: bold;
  text-shadow: 2px 2px 2px whitesmoke;

  animation: 1s ${fadeAnimation};
`;
const Cancel = styled.button`
  color: #ffffff;
  text-decoration: none;
  text-shadow: 2px 2px 2px black;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  background: #6999c3;
  box-shadow: inset 2px 2px 5px #486a87, inset -2px -2px 5px #486a87;
  font-weight: bold;
  margin-bottom: 20px;
  margin-right: 20px;

  :hover {
    transition: all 0.3s ease-out;
    background-color: #ed474a !important;
    color: #0d3b4c;
    font-weight: bold;
    text-shadow: 2px 2px 2px whitesmoke;
  }

  @media screen and (max-width: 560px) {
    margin-right: 0px;
  }
`;
const Deleted = styled.button`
  color: #0d3b4c;
  text-decoration: none;
  text-shadow: 2px 2px 2px whitesmoke;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  background: #f4f4ed;
  box-shadow: inset 2px 2px 5px #486a87, inset -2px -2px 5px #486a87;
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;

  :hover {
    transition: all 0.3s ease-out;
    background-color: #ed474a !important;
    color: #0d3b4c;
    font-weight: bold;
    text-shadow: 2px 2px 2px whitesmoke;
  }
`;
const Editing = styled.button`
  color: #0d3b4c;
  text-decoration: none;
  text-shadow: 2px 2px 2px whitesmoke;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  background: #f4f4ed;
  box-shadow: inset 2px 2px 5px #486a87, inset -2px -2px 5px #486a87;
  font-weight: bold;
  margin-bottom: 20px;
  margin-right: 20px;

  :hover {
    transition: all 0.3s ease-out;
    background-color: #0d3b4c;
    color: whitesmoke;
    font-weight: bold;
    text-shadow: 2px 2px 2px whitesmoke;
  }
`;

// ======= NOT FOUND ======= //

const NotFoundSec = styled.section`
  width: 50%;
  text-align: center;
  margin: 100px auto;
  color: #6999c3;
  padding: 25px;
  border-radius: 10px;
  box-shadow: -5px -5px 27px #486a87, 5px 5px 27px #486a87;

  h2 {
    color: #0d3b4c;
    font-size: 60px;
    text-shadow: 2px 2px 2px whitesmoke;
  }

  p {
    color: whitesmoke;
  }

  animation: 5s ${loginFade};
`;

// ======= ABOUT ======= //

const AboutDiv = styled.div`
  width: 50%;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  color: #6999c3;
  backdrop-filter: blur(10px);
  padding: 25px;
  border-radius: 10px;
  box-shadow: -5px -5px 27px #486a87, 5px 5px 27px #486a87;

  div {
    text-align: left;
  }

  p {
    color: #0d3b4c;
    text-shadow: 2px 2px 2px whitesmoke;
  }

  animation: 1s ${fadeAnimation};

  @media screen and (max-width: 430px) {
    margin-top: 0px;
  }
`;
const AboutMain = styled.div`
  @media screen and (max-width: 430px) {
    margin-top: 0px;

    h1 {
      width: 50%;
      margin: 0 auto 20px;
      padding-bottom: 5px;
      backdrop-filter: blur(10px);
      border-radius: 10px;
      box-shadow: -5px -5px 27px #486a87, 5px 5px 27px #486a87;
    }
  }
`;

// ======= ACCOUNT ======= //

const AccountDiv = styled.div`
  width: 50%;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  color: #6999c3;
  padding: 25px;
  border-radius: 10px;
  box-shadow: -5px -5px 27px #486a87, 5px 5px 27px #486a87;

  div {
    text-align: center;
  }

  p {
    color: whitesmoke;
    text-shadow: 2px 2px 2px black;
  }

  animation: 1s ${loginFade};
`;

// ======= GUIDES ======= //

const GuideDiv = styled.div`
  color: whitesmoke;
  text-shadow: 2px 2px 2px whitesmoke;
  text-align: center;

  h1 {
    color: #0d3b4c;
    font-size: 40px;
  }

  h2 {
    width: fit-content;
    font-size: 20px;
    color: #0d3b4c;
    margin: auto;
    margin-bottom: 20px;
  }

  h2:hover {
    color: whitesmoke !important;
    text-shadow: 2px 2px 2px #0d3b4c !important;
  }

  .top {
    animation: 4s ${loginFade};
  }

  @media screen and (max-width: 900px) {
    .top {
      margin: 0 auto 20px;
      width: 45%;
      padding-bottom: 5px;
      backdrop-filter: blur(10px);
      border-radius: 10px;
      box-shadow: -5px -5px 27px #486a87, 5px 5px 27px #486a87;
    }
  }

  @media screen and (max-width: 540px) {
    .top {
      h1 {
        font-size: medium;
      }
    }
  }
`;
const GuidePost = styled.div`
  width: 50%;
  margin: 0 auto;
  margin-bottom: 60px;
  color: #6999c3;
  padding: 25px;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: -5px -5px 27px #486a87, 5px 5px 27px #486a87;

  div {
    text-align: center;
  }

  p {
    font-weight: bold;
    color: #0a2463;
    text-shadow: 2px 2px 2px #3e92cc;
    text-decoration: none !important;
  }

  .under {
    text-decoration: bold;
    color: #3f4045;
  }

  animation: 2s ${fadeAnimation};
`;
const GuideSelect = styled.select`
  width: fit-content;
  color: #0d3b4c;
  text-align: center;
  text-decoration: none;
  text-shadow: 2px 2px 2px whitesmoke;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 0.5rem 1rem;
  background: #92b9bd;
  box-shadow: inset -5px -5px 27px #486a87, inset 5px 5px 27px #486a87;
  font-weight: bold;
`;
const GuideInput = styled.input`
  width: 50%;
  color: whitesmoke !important;
  text-decoration: none;
  text-shadow: 2px 2px 2px black;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 0.5rem 1rem;
  background: #6999c3;
  font-weight: bold;
  margin-bottom: 20px;
  box-shadow: inset 5px 5px 27px #486a87, inset -5px -5px 27px #486a87;
  border-radius: 10px;
    -webkit-text-fill-color: whitesmoke !important;

    ::placeholder {
    color: #c2f9bb;
    opacity: 0.4;
  }
`
const GuideRecom = styled.textarea`
  width: 50%;
  color: #ffffff;
  text-decoration: none;
  text-shadow: 2px 2px 2px black;
  border-radius: 10px;
  margin-top: 15px;
  padding: 0.5rem 1rem;
  background: #6999c3;
  box-shadow: inset 5px 5px 27px #486a87, inset -5px -5px 27px #486a87;
  font-weight: bold;

  ::placeholder {
    color: #c2f9bb;
    opacity: 0.4;
  }
`;
const GuideComm = styled.textarea`
  width: 80%;
  height: 25%auto;
  color: #ffffff;
  text-decoration: none;
  text-shadow: 2px 2px 2px black;
  border-radius: 10px;
  margin-top: 15px;
  padding: 0.5rem 1rem;
  background: #6999c3;
  box-shadow: inset 5px 5px 27px #486a87, inset -5px -5px 27px #486a87;
  font-weight: bold;

  ::placeholder {
    color: #c2f9bb;
    opacity: 0.4;
  }
`;
const CreateGuide = styled.button`
  color: #0d3b4c;
  text-decoration: none;
  text-shadow: 2px 2px 2px whitesmoke;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  background: #f4f4ed;
  box-shadow: inset 2px 2px 5px #486a87, inset -2px -2px 5px #486a87;
  font-weight: bold;
  margin-bottom: 20px;
  margin-right: 20px;

  :hover {
    transition: all 0.3s ease-out;
    background-color: #308834 !important;
    color: #0d3b4c;
    font-weight: bold;
    text-shadow: 2px 2px 2px whitesmoke;
  }

  @media screen and (max-width: 560px) {
    margin-right: 0px;
  }
`;
const CreateButton = styled.button`
  color: #0d3b4c;
  text-decoration: none;
  text-shadow: 2px 2px 2px whitesmoke;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  background: #f4f4ed;
  box-shadow: inset 2px 2px 5px #486a87, inset -2px -2px 5px #486a87;
  font-weight: bold;
  margin-bottom: 20px;

  :hover {
    transition: all 0.3s ease-out;
    background-color: #308834 !important;
    color: #0d3b4c;
    font-weight: bold;
    text-shadow: 2px 2px 2px whitesmoke;
  }
`;
const NewGuide = styled(Link)`
  color: #0d3b4c;
  text-decoration: none;
  font-size: 15px;
  margin-top: 40px;
`;
const NoGuide = styled.div`
  width: 30%;
  height: fit-content;
  margin: 180px auto;
  backdrop-filter: blur(8px);
  border-radius: 10px;
  box-shadow: -5px -5px 27px #486a87, 5px 5px 27px #486a87;

  img {
    width: 100%;
    height: auto;
  }

  animation: 3s ${loginFade};
`;
const AddGuide = styled.button`
  color: #0d3b4c;
  text-decoration: none;
  text-shadow: 2px 2px 2px whitesmoke;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  background: #f4f4ed;
  box-shadow: inset 2px 2px 5px #486a87, inset -2px -2px 5px #486a87;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 20px;

  :hover {
    transition: all 0.3s ease-out;
    background-color: #308834 !important;
    color: #0d3b4c;
    font-weight: bold;
    text-shadow: 2px 2px 2px whitesmoke;
  }
`;
const Like = styled.div`
  background-repeat: none;
  width: fit-content;
  height: fit-content;

  div:hover {
    background: url(${likeClick});
    cursor: pointer;
  }
`;
const Save = styled.div`
  background: url(${saveClick});
  background-repeat: none;
  width: fit-content;
  height: fit-content;
  text-shadow: none;
  color: transparent;
  font-size: 35px;

  div:hover {
    background: url(${save});
    cursor: pointer;
  }
`;
const GuideForms = styled.div`
  @media screen and (max-width: 430px) {
    h2 {
      width: 50%;
      margin: 0 auto 20px;
      padding-bottom: 5px;
      backdrop-filter: blur(10px);
      border-radius: 10px;
      box-shadow: -5px -5px 27px #486a87, 5px 5px 27px #486a87;
    }
  }
`;

// ======= LOGOUT ======= //
const Logout = styled.button`
  color: #0d3b4c;
  text-decoration: none;
  text-shadow: 2px 2px 2px whitesmoke;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  background: #f4f4ed;
  box-shadow: inset 2px 2px 5px #486a87, inset -2px -2px 5px #486a87;
  font-weight: bold;
  margin-bottom: 20px;

  :hover {
    transition: all 0.3s ease-out;
    background-color: #ed474a !important;
    color: #0d3b4c;
    font-weight: bold;
    text-shadow: 2px 2px 2px whitesmoke;
  }
`;

// ======= FOOTER ======= //

const FooterWrap = styled.footer`
  display: flex;
  align-items: center;
  justify-content: left;
  color: #0d3b4c;
  text-shadow: 2px 2px 2px whitesmoke;
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  font-size: 15px;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

export {
  LogSection,
  LogButton,
  Header,
  FadeForm,
  WelcomeP,
  WelcomeDiv,
  WelcomeButtons,
  HomeDiv,
  ShowGuide,
  DropDown,
  NavDiv,
  GuideDiv,
  GuidePost,
  FooterWrap,
  UserIcon,
  SignUpDiv,
  LogLink,
  Logout,
  NotFoundSec,
  AboutMain,
  AboutDiv,
  AccountDiv,
  DivCenter,
  Like,
  Save,
  CreateGuide,
  CreateButton,
  GuideForms,
  GuideSelect,
  GuideInput,
  GuideRecom,
  GuideComm,
  NewGuide,
  NoGuide,
  AddGuide,
  Cancel,
  Deleted,
  Editing,
};
