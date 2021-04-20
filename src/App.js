import React from 'react';
import { Grid } from '@material-ui/core'
import Header from "./Header";
import ContentCard from './ContentCard';
import Coffeheader from './Coffeheader';
import Profile from "./Profile";
import Save from "./Save";

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Height } from '@material-ui/icons';

const App= () => {
  return (
    <Router>
    <Grid container direction='column' style={{height:'100%'}}>
      <Grid item xs={12}>
        <Coffeheader/>
      </Grid>
      <Grid item container >
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <Switch>
          <Route path='/' exact component={ContentCard}/>    
          <Route path='/profile' component={Profile} />
          <Route path='/save' component={Save}/>
          </Switch>
        </Grid>        
        <Grid item xs={false} sm={2}/>
      </Grid>
    </Grid>
    </Router>

  );
}
export default App;
