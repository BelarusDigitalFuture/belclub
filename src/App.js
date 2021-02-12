import React from 'react'
import './App.css';
import {Box, Container, Grid,} from "@material-ui/core";
import {Switch, Route, Redirect} from 'react-router-dom';
import {IdeaCard} from "./Components/Card/Card";
import {Header} from "./Components/Header/Header";
import {Ideas} from "./Components/Ideas/Ideas";


export const App = () => {


  return (
    <Box>
      <Container>
        <Header/>
        <Switch>
          <Route path={'/ideas'} component={(props) => <Ideas type={'ideas'} {...props}/>}/>
          <Route path={'/problems'} component={(props) => <Ideas type={'problems'} {...props}/>}/>
          <Route path={'/solutions'} component={(props) => <Ideas type={'solutions'} {...props}/>}/>
          <Redirect exact from='/' to='/ideas'/>
        </Switch>

      </Container>
    </Box>
  );
}

export default App;
