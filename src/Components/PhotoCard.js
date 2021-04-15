import React, { useContext } from "react";
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  List,
  ListItem,
} from "@material-ui/core";
import { AccountCircle, PersonAdd, NoteAdd } from "@material-ui/icons";
import { UserContext } from "../Context/UserContext";

const useStyles = makeStyles((theme) => ({
  photo: {
    height: 280,
    width: "100%",
  },
  list: {
    paddingLeft: 0,
  },
}));

const PhotoCard = () => {
  const classes = useStyles();

  const [userData] = useContext(UserContext);
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.photo}
          image={userData.avatar_url}
          title="User profile pic"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {userData.name}
          </Typography>
          <List>
            <ListItem className={classes.list}>
              <AccountCircle color="primary" />
              <Typography>
                <strong>User Name: </strong>
                {userData.login}
              </Typography>
            </ListItem>
            <ListItem className={classes.list}>
              <PersonAdd color="primary" />
              <Typography>
                <strong>Follower: </strong>
                {userData.public_repos}
              </Typography>
            </ListItem>
            <ListItem className={classes.list}>
              <NoteAdd color="primary" />
              <Typography>
                <strong>Public Repo: </strong>
                {userData.followers}
              </Typography>
            </ListItem>
          </List>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary" target="_blank" href={userData.html_url}>
          Go To Profile
        </Button>
      </CardActions>
    </Card>
  );
};

export default PhotoCard;
