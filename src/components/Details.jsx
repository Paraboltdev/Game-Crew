

import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import GameContext from "../context/GameContext";


const Details = () => {
 const {games}= useContext(GameContext)
  const [gameScreenShots, setGameScreenShots]= useState([])
  const [redditPost, setRedditPost]=useState([])
  const [trailers, setTrailers]= useState([])
  const [stores, setStores]= useState([])
  const [rate, setrate]= useState()

  const [gameDetails, setGameDetails] = useState([]);
 
  const key = "bc8c931920a745b5964a7a79f56a33d7 ";
  const { gameid } = useParams();




useEffect(() => {
  fetch(`https://api.rawg.io/api/games/${gameid}?key=${key}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    setGameDetails(data);
  });
}, [gameid]);
useEffect(() => {
  fetch(`https://api.rawg.io/api/games/${gameid}/screenshots?key=${key}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    setTrailers(data.results);
    
    
    
  });
}, [gameid]);

useEffect(() => {
  fetch(`https://api.rawg.io/api/games/${gameid}/parent-games?key=${key}`)
  .then((res) => res.json())
  .then((data) => {
    setStores(data.results)
    console.log(data);
      
        
    
    
  });
}, [gameid]);

useEffect(() => {
  fetch(`https://api.rawg.io/api/games/${gameid}/reddit?key=${key}`)
  .then((res) => res.json())
  .then((data) => {
    setRedditPost(data.results)
        console.log(data);
        
        
        
        
      });
    }, [gameid]);
    
    console.log(games)
    
   
    
    
    const bgImg = gameDetails.background_image_additional
    const plat = games.parent_platforms
 

  

 
   
//   const DetailsImg= styled.img`
//  width:90%;
//  height: 30vh;
 
//   border-radius: 20px;
//   margin-top:150px;
  

//   `;

// const BackImg= styled.div`


//  background-repeat: no-repeat;
//  background-size: cover;
//  height: 50vh;
//  width: 100%;
//  display: flex;
//  justify-content: center;
//  align-items: center;
//  text-align: center;
//  `;





// const MoreImg= styled.div`
//  gap: 5px;
//  `;


 
  
  
  return (
    <>
    <div
    style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.5)),url('${bgImg}')`}}>
    
    
      <p >
        {gameDetails.name}
      </p>
      </div>
    <section>
      <div >
      <img src={gameDetails.background_image}  />

       <div >
        <p>Developed by:   </p>
          {gameDetails.developers?.map((dev)=>dev.name).join(' , ')}
         
    
        <p>
          {gameDetails.publishers?.map(platform=>platform.name).join(' , ')}
          <div >

            {trailers.map((trailer)=>(
             

                <img key={trailer.id} src={trailer.image} width={325}/>
              

            ))}
          </div>
          
            
         
        </p>
        <div>
          <p>Official Website:</p>
        
          <a style={{textDecoration:'none', color:'inherit'}}
                href={gameDetails.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                {gameDetails.website}
              </a>{" "}
            
        </div>
        </div>  
      </div>
      <div style={{marginTop:'15px'}}>
      

      <p>Buy It:</p>       
      {gameDetails.stores?.map((store)=>(
      <p>{store.store.name}</p>
      ))}
        
      </div>
      <p><h2>Description:</h2> {gameDetails.description_raw}</p>
      <div>
        {redditPost?.map((post)=>(
          <div>
            <p>{post.username.slice(3)}</p>
            <p>{post.name}</p>
          </div>
        ))}
      </div>
      
      
    </section>
    </>
  );
};

export default Details;
