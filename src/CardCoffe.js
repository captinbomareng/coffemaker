import React, { useState } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import { Avatar, CardMedia, IconButton } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

  
const CardCoffe =(props) => {


  const {avatarSrc, title, subtitle, description, imageSrc} = props;
  const [favoriteChked, setfavoriteChked] =useState(false);
  
    return (
            <Card>
              <CardHeader
              avatar={
                <Avatar aria-label="recipe" src={avatarSrc}>
                </Avatar>}
              action={
                <IconButton aria-label="settings" onClick={()=>setfavoriteChked(!favoriteChked)} >
                  {favoriteChked ?(
                    <FavoriteIcon/>
                  ):(<FavoriteBorderIcon/>)}
                </IconButton>}
              title={title}
              subheader={subtitle}
              />
              <CardMedia style={{ height: '150px' }} image={imageSrc}/>
                <CardContent>
                    <Typography variant="body2" component="p">
                      {description}
                    </Typography>
                </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
                <Button size="small">Offer</Button>
            </CardActions>
        </Card>
    
    )
}
export default CardCoffe;
