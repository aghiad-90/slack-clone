import React from "react";
import { Button } from "@material-ui/core";
import { auth, provider } from "../config/firebase";

import "../Style/login.css";
import { useStateValue } from "../Context/StateProvider";
import { actionTypes } from "../Context/reducer";

function Login() {
  const [state, dispatch] = useStateValue();
  const sigIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" />
        <h1>Sign in to Slack Clone</h1>
        <p>slack-clone.slack.com</p>
        <Button onClick={sigIn}>Sign in with google</Button>
      </div>
    </div>
  );
}

export default Login;
