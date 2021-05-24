import React, { useContext, useState } from "react";
import {
  TextField,
  Button,
  makeStyles,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { useForm } from "react-hook-form";
import axios from "axios";
import { UserContext } from "../Context/UserContext";

const BASE_URL = "https://api.github.com/users/";

const useStyles = makeStyles((theme) => ({
  userInput: {
    width: "80%",
    marginRight: "10px",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

const Search = () => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  const [userData, setUserData] = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await axios.get(BASE_URL + data.userName).then((res) => {
        setUserData(res.data);
        setLoading(false);
      });
    } catch (err) {
      console.log(err);
      setNotFound(true);
      setTimeout(() => setNotFound(false), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Backdrop className={classes.backdrop} open={loading}>
        <CircularProgress color="primary" />
      </Backdrop>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          defaultValue={userData.login}
          className={classes.userInput}
          placeholder="Enter Github User Name"
          variant="outlined"
          name="userName"
          inputRef={register({
            required: "please enter a user name",
          })}
          error={Boolean(errors.userName)}
          helperText={errors.userName?.message}
          size="small"
        />
        <Button variant="contained" color="primary" type="submit">
          Search
        </Button>
        {notFound && (
          <Alert severity="error">
            <AlertTitle>User does not exist</AlertTitle>
            Enter a correct github username
          </Alert>
        )}
      </form>
    </>
  );
};

export default Search;
