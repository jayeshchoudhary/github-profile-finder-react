import React from "react";
import { Typography } from "@material-ui/core";

const Header = () => {
  return (
    <>
      <Typography variant="h4">Github Finder</Typography>
      <Typography color="textSecondary">
        Get Github profile data by username
      </Typography>
    </>
  );
};

export default Header;
