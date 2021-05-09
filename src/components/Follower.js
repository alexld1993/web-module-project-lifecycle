import React from "react";
import axios from "axios";
import Spinner from "./Spinner";
class Follower extends React.Component {
  state = { followers: [] };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/alexld1993/followers")
      .then((res) => {
        this.setState({ followers: res.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return <div></div>;
  }
}

export default Follower;
