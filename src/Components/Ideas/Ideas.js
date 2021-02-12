import React, {useEffect, useState} from 'react'
import {getIdeas} from "../../api/IdeasApi";
import {Grid} from "@material-ui/core";
import {IdeaCard} from "../Card/Card";

export const Ideas = (props) => {
  const [cards, setCards] = useState([])
  const getData = async (type) => {
    const data = await getIdeas(type);
    setCards(data)
  }
  useEffect(() => {
    getData(props.location.pathname.split('/')[1].slice(0, -1))
  }, [props.location.pathname])
  const Cards = cards.map((el) =>
    <Grid item xs={12}  lg={3} md={6}>
      <IdeaCard card={el} updateCards={getData} location={props.location.pathname.split('/')[1].slice(0, -1)}/>
    </Grid>)

  return (<Grid
    maxWidth={'sm'}
    container
    direction="row"
    justify="center"
    alignItems="stretch"
    spacing={2}
    wrap={'wrap'}
  >
    {Cards}
  </Grid>)

}