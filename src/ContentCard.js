import { Card, Grid } from '@material-ui/core';
import React from 'react';
import CardCoffe from './CardCoffe';
import CoffeServices from './Services';

const ContentCard=() => {
    const getCoffeServices = ((coffeService) =>{
        return (
            <Grid item xs={3} >
            <CardCoffe {...coffeService}/>
            </Grid>
        )
    })
    return (
        <Grid container spacing={2} >
            {CoffeServices.map((coffeService)=>getCoffeServices(coffeService))}
        </Grid>
    )
}

export default ContentCard
