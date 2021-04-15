import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [userData, setUserData] = useState(startData);
  return (
    <UserContext.Provider value={[userData, setUserData]}>
      {props.children}
    </UserContext.Provider>
  );
};

const startData = {
  login: "jayesh-choudhary",
  id: 75303263,
  node_id: "MDQ6VXNlcjc1MzAzMjYz",
  avatar_url: "https://avatars.githubusercontent.com/u/75303263?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/jayesh-choudhary",
  html_url: "https://github.com/jayesh-choudhary",
  followers_url: "https://api.github.com/users/jayesh-choudhary/followers",
  following_url:
    "https://api.github.com/users/jayesh-choudhary/following{/other_user}",
  gists_url: "https://api.github.com/users/jayesh-choudhary/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/jayesh-choudhary/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/jayesh-choudhary/subscriptions",
  organizations_url: "https://api.github.com/users/jayesh-choudhary/orgs",
  repos_url: "https://api.github.com/users/jayesh-choudhary/repos",
  events_url: "https://api.github.com/users/jayesh-choudhary/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/jayesh-choudhary/received_events",
  type: "User",
  site_admin: false,
  name: "Jayesh Choudhary",
  company: "Deuex Solutions",
  blog: "",
  location: "Mumbai",
  email: null,
  hireable: null,
  bio: "JavaScript Developer",
  twitter_username: null,
  public_repos: 2,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2020-12-01T08:47:51Z",
  updated_at: "2021-04-14T08:01:35Z",
};
