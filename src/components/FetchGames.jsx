import { Box, Button, Grid } from "@mui/material";
import styled from '@emotion/styled'
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import GameContext from "../context/GameContext";
import CardGame from "./CardGame.jsx/CardGame";
import SearchBar from './SearchBar'
import GameCard from './GameCard'
import { Link, useParams } from "react-router-dom";
import LateralCard from "./LateralCard";
import { Container } from "@mui/system";

const FetchGames = () => {
 const{games, setGames,platforms}= useContext(GameContext)
 console.log(games)

 const MyGrid = styled(Grid)({
  margin:'auto'
 })

 const key = "bc8c931920a745b5964a7a79f56a33d7 ";
 const date = new Date()
    let year = date.getFullYear()
    let month = (date.getMonth()+1)
    let day = date.getDate()
   

    
   
    console.log(year,month, day)
    const {platformId}= useParams()
    
    const id = platformId
    const handelplatform = (id)=>{
      console.log(id)
    }
 
    // useEffect(() => {
    //   fetch(`https://api.rawg.io/api/games?dates=${year}-${month}-01,2022-${month}-${day}&platform=${id}&key=${key}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       setGames(data.results);
          
         
          
    //     });
    // }, [platformId]);
  return (
 
      


  <Grid container spacing={2} sx={{marginTop:'20px'}}>
  {games.map((game) => (
      <Grid  key={game.id} item xs={12} sm={6} md={4} lg={3}>
        <GameCard key={game.id}  game={game}/>
       
      </Grid>
  
  ))}
  </Grid>

    
    
    
  );
};

export default FetchGames;
