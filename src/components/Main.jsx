import { Container, Box } from "@mui/material";
import styled from "@emotion/styled";
import React from "react";
import FetchGames from "./FetchGames";
import SideBar from "./SideBar";
import Navbar from "./Navbar";

const Main = () => {
  const MainContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    
    @media (min-width: 800px) {
      grid-template-columns:20%  20% 20% 20%;
 
      grid-template-areas:
      "header header header header"
      "sidebar main main main"
      ". main main main"
      "footer footer footer footer";
    };
  `
  const Header=styled.div`
  grid-area: header;
  `
  const Sidebar=styled.div`
  grid-area: sidebar;
  `
  const Main=styled.div`
  grid-area:main;
  `
  const Footer=styled.div`
  grid-area: footer;
  height: 20px;
  background-color: cadetblue;
  `

  return (
    <>
      <MainContainer>
        <Header>
        <Navbar/>
          
        </Header>
        <Sidebar>
          <SideBar />
        </Sidebar>
        <Main>
          <FetchGames />
        </Main>
        <Footer>

        </Footer>
      </MainContainer>
    </>
  );
};

export default Main;
