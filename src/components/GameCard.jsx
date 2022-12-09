import * as React from 'react';
import { styled } from '@mui/material/styles';
import style from '@emotion/styled'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const notPlayed={backgroundColor:'inherit'}
const played = {backgroundColor:'green'}

export default function RecipeReviewCard({game}) {
  const [expanded, setExpanded] = React.useState(false);
  const [playedGame, setPlayedGame]=React.useState(null)
  
  const handleExpandClick = () => {
    setExpanded(!expanded);
    
    const PTypography= style(Typography)({
        borderBottom:'1px solid black'
    })
  };

  const handlePlayed =()=>{
    setPlayedGame(played)
  }

  const PlayedBox = styled(Box)({
    
      width:'10px',
      height:'10px',
      border:'1px solid grey',
      borderRadius:'50%'
  })

  return (
    <Card sx={{ maxWidth: 345 }}>
        {/* <Link to={'/details/'+ game.id} style={{textDecoration:'none', color:'inherit'}} > 
      <CardHeader
        title={game.name}
        subheader={game.released}
        />
        </Link> */}
      <CardMedia
        component="img"
        height="194"
        image={game.background_image}
        alt={game.name}
      />
      <CardContent>
      <Link to={'/details/'+ game.id} style={{textDecoration:'none', color:'inherit'}} >
        <Typography variant='h4'>{game.name}</Typography>
        </Link>
        <Typography variant="body2" color="text.secondary">
        <strong>Genero:</strong>  {game.genres.map(genre=>genre.name).join(' , ' )}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       
        <PlayedBox onClick={handlePlayed} style={playedGame}></PlayedBox>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
        <Typography variant='body2'>View more</Typography> 
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          
          <Typography variant='body2'  >
            <strong>Platforms:</strong>
          {game.parent_platforms.map((plat)=>plat.platform.name).join(' , ')}
        </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
  );
}
