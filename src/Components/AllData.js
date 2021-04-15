import React, { useContext } from "react";
import {
  makeStyles,
  Paper,
  Typography,
  List,
  ListItem,
  Divider,
} from "@material-ui/core";
import {
  AccountCircle,
  LocationOn,
  Business,
  Schedule,
  Subject,
  Email,
} from "@material-ui/icons";
import { UserContext } from "../Context/UserContext";
import Moment from "react-moment";

const useStyles = makeStyles((theme) => ({
  detailArea: {
    height: "100%",
    width: "100%",
  },
  labelSpace: {
    paddingLeft: 10,
  },
  list: {
    height: 65,
  },
}));

const UserData = () => {
  const classes = useStyles();
  const [userData] = useContext(UserContext);

  return (
    <Paper className={classes.detailArea} elevation={3}>
      <List>
        <ListItem className={classes.list}>
          <AccountCircle color="primary" />
          <Typography variant="h6">
            <span className={classes.labelSpace}>User Bio: </span>
            <Typography component="span" variant="h6" color="textSecondary">
              {userData.bio || "N/A"}
            </Typography>
          </Typography>
        </ListItem>
        <Divider variant="middle" />
        <ListItem className={classes.list}>
          <LocationOn color="primary" />
          <Typography variant="h6">
            <span className={classes.labelSpace}>Location: </span>
            <Typography component="span" variant="h6" color="textSecondary">
              {userData.location || "N/A"}
            </Typography>
          </Typography>
        </ListItem>
        <Divider variant="middle" />
        <ListItem className={classes.list}>
          <Business color="primary" />
          <Typography variant="h6">
            <span className={classes.labelSpace}>Company Name: </span>
            <Typography component="span" variant="h6" color="textSecondary">
              {userData.company || "N/A"}
            </Typography>
          </Typography>
        </ListItem>
        <Divider variant="middle" />
        <ListItem className={classes.list}>
          <Email color="primary" />
          <Typography variant="h6">
            <span className={classes.labelSpace}>Email: </span>
            <Typography component="span" variant="h6" color="textSecondary">
              {userData.email || "N/A"}
            </Typography>
          </Typography>
        </ListItem>
        <Divider variant="middle" />
        <ListItem className={classes.list}>
          <Subject color="primary" />
          <Typography variant="h6">
            <span className={classes.labelSpace}>Blog: </span>
            <Typography component="span" variant="h6" color="textSecondary">
              {userData.blog || "N/A"}
            </Typography>
          </Typography>
        </ListItem>
        <Divider variant="middle" />
        <ListItem className={classes.list}>
          <Schedule color="primary" />
          <Typography variant="h6">
            <span className={classes.labelSpace}>Created At: </span>
            <Typography component="span" variant="h6" color="textSecondary">
              <Moment format="DD/MM/YYYY">
                <span>{userData.update_at}</span>
              </Moment>
            </Typography>
          </Typography>
        </ListItem>
        <Divider variant="middle" />
        <ListItem className={classes.list}>
          <Schedule color="primary" />
          <Typography variant="h6">
            <span className={classes.labelSpace}>Updated At: </span>
            <Typography component="span" variant="h6" color="textSecondary">
              <Moment format="DD/MM/YYYY">
                <span>{userData.update_at}</span>
              </Moment>
            </Typography>
          </Typography>
        </ListItem>
      </List>
    </Paper>
  );
};

export default UserData;
