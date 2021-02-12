import React from "react";
import {Card, CardActions, CardContent, Grid, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import {Tag} from "../Tag/Tag";
import {upVote} from "../../api/IdeasApi";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    display: 'flex',
    minHeight: '100%'
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
  },
  text: {
    fontSize: 16
  },
  pos: {
    marginBottom: 12,
  },
  thumbUpButton: {
    '&:hover': {
      cursor: 'pointer',
      color: "green",
    }
  },
  thumbDownButton: {
    '&:hover': {
      cursor: 'pointer',
      color: "red",
    }
  },
  content: {
    minHeight: '100%'
  },
  tags_container: {
    alignSelf: 'flex-end'
  }
});

export const IdeaCard = (props) => {
  const {card, updateCards, location} = props;
  const classes = useStyles();
  const onThumbUpClick = (e) => {
    upVote(card.id).then(() => {
      updateCards(location)
    })
  }
  return (<Card className={classes.root}>
    <CardContent>
      <Grid container direction={"column"} justify='space-between' className={classes.content} >
        <Grid item pb={2}>
          <Typography className={classes.title}>{card.name}</Typography>
          <Typography  className={classes.text}>{card.text}</Typography>
        </Grid>
        <Grid item container>
          <Grid item container spacing={1}  justify={"flex-start"} wrap>
            {card && card.tag && [card.tag].map((el) => {
              return <Grid item><Tag label={el}/></Grid>
            })}
          </Grid>
          <CardActions>
            <ThumbUpIcon onClick={e => onThumbUpClick(e)} className={classes.thumbUpButton}/>
            <Typography variant={"subtitle2"}>{card.rating}</Typography>
          </CardActions>

        </Grid>
      </Grid>

    </CardContent>
  </Card>)
}