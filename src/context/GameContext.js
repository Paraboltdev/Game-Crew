import { createContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";


const GameContext = createContext()

const GameProvider = ({children})=>{
    const [games, setGames] = useState([]);
   const [rating, setRating]= useState([])
    const [gameDetails, setGameDetails]= useState([])
    const [platforms, setPlatforms]= useState([])
    // const [searchParams, setSearchParams] = useSearchParams();
    // const search = searchParams.get("search");
   
    const key = "bc8c931920a745b5964a7a79f56a33d7 ";
    const {gameid}=useParams()
    const {platformId}= useParams()


    const date = new Date()
    let year = date.getFullYear()
    let month = (date.getMonth()+1)

    let day = date.getDate()
    let currentDate=  date.getFullYear()+'- '+(date.getMonth()+1)+"-"+ date.getDate();
  
    let lastMonth = date.getFullYear() +'- '+(date.getMonth()-5) +'-'+ date.getDate()

    
    const monthOk = month < 10 ? '0'+ month : (date.getMonth()+1)

    const yearstr = year.toString()
    console.log(year,month, day)
    const id = platforms.id

    const handelplatform = (id)=>{
      
    }
   
    useEffect(() => {
      fetch(`https://api.rawg.io/api/games?dates=${year}-${monthOk}-01,${year}-${monthOk}-${day}&platform=${id}&key=${key}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setGames(data.results);
          
         
          
        });
    }, [id]);

    
    
    useEffect(() => {
      fetch(` https://api.rawg.io/api/platforms?key=${key}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPlatforms(data.results)
         
          
          
         
          
        });
    }, []);
   console.log(platforms)
     
   useEffect(() => {
    fetch(` https://api.rawg.io/api/stores?key=${key}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
       
       
        
        
       
        
      });
  }, []);
  
    
    
    const data ={ games, setGames,gameDetails, setGameDetails,platforms,setPlatforms}

    return(
        <GameContext.Provider value={data}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContext
export{GameProvider}