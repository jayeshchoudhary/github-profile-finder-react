import React from "react";
import Header from "./Components/Header";
import Search from "./Components/Search";
import { CssBaseline, Container, makeStyles, Grid } from "@material-ui/core";
import PhotoCard from "./Components/PhotoCard";
import AllData from "./Components/AllData";
import "./App.css";
import { UserProvider } from "./Context/UserContext";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: 20,
    height: "100vh",
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <UserProvider>
      <Container maxWidth="md" className={classes.main}>
        <CssBaseline />
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Header />
          </Grid>
          <Grid item xs={8}>
            <Search />
          </Grid>
          <Grid item xs={4}>
            <PhotoCard />
          </Grid>
          <Grid item xs={8}>
            <AllData />
          </Grid>
        </Grid>
      </Container>
    </UserProvider>
  );
};

export default App;
