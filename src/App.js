import './App.css';
import {Box, Container, Grid, Typography} from "@material-ui/core";
import {cards} from './mock'
import {IdeaCard} from "./Components/Card/Card";

function App() {
  const Cards = cards.map((el) => <Grid item xs={12} sm={6}>
    <IdeaCard card={el}/>
  </Grid>)
  return (
    <Container maxWidth={false}>
      <Box my={4}>
        <Typography component={"h1"} variant={"h4"} color={"textPrimary"} align={"center"}
                    gutterBottom>{'Нашы iдэi'}</Typography>
      </Box>
      <Grid
        maxWidth={'sm'}
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        {Cards}
      </Grid>
    </Container>
  );
}

export default App;
