import React from 'react';
import { AppBar, Typography,Toolbar, Grid, Button, IconButton } from '@material-ui/core';
import  {getThemeProps, makeStyles} from '@material-ui/styles'
import { BorderAll, BorderStyle } from '@material-ui/icons';
import LocalCafeOutlinedIcon from '@material-ui/icons/LocalCafeOutlined';
import {Link} from 'react-router-dom';
function Coffeheader() {
    const useStyles = makeStyles(()=>({
        ButtonStyle: {
           color: 'white',
           textDecoration: 'none'
       },
       }));
       const classes= useStyles();
    return (
        <AppBar position='static' style={{background:'#0091ea'}} >
            <Toolbar > 
                <Link to='/' style={{textDecoration: 'none'}}>      
                <Typography className={classes.ButtonStyle}> TheCoffeMaker  </Typography> 
                </Link>   
                <LocalCafeOutlinedIcon/>                          
                <Grid item xs={12}/>
                < Grid item xs={1}>
                    <Link to='/profile' style={{textDecoration: 'none'}}>
                  <Button className={classes.ButtonStyle}>Profile</Button>
                  </Link>
                </Grid>
                <Grid item xs={1}>
                    <Link to='/save' style={{textDecoration: 'none'}}>
                  <Button  className={classes.ButtonStyle}>save</Button>
                  </Link>
                </Grid>     
            </Toolbar>
        </AppBar>      
    )
}

export default Coffeheader
