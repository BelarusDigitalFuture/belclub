import React from "react";
import {Card, CardActions, CardContent, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
    '&:hover':{
      cursor: 'pointer',
      color: "green",
    }
  },
  thumbDownButton: {
    '&:hover':{
      cursor: 'pointer',
      color: "red",
    }
  },
});

export const IdeaCard = (props) => {
  const {card} = props;
  const classes = useStyles();
  return (<Card className={classes.root}>
    <CardContent>
      <Typography className={classes.title}>{card.title}</Typography>
      <Typography className={classes.text}>{card.text}</Typography>
      <CardActions>
        <ThumbUpIcon className={classes.thumbUpButton}/>
        <Typography variant={"subtitle2"}>{card.upVotes}</Typography>
        <ThumbDownIcon className={classes.thumbDownButton}/>
      </CardActions>
    </CardContent>
  </Card>)
}