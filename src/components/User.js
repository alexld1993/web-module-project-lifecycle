import React from "react";
import axios from "axios";
import Spinner from "./Spinner";

class User extends React.Component {
  state = {
    user: null,
  };

  componentDidMount() {
    axios
      .get("https://api.github.com/users/alexld1993")
      .then((res) => {
        this.setState({ user: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { user } = this.state;

    if (!this.state.user) return <Spinner />;

    return (
      <div>
        <img
          style={{ width: "150px", borderRadius: "10%" }}
          src={user.avatar_url}
          alt={user.name}
        ></img>
        <h3>{user.name}</h3>
        <p>username: {user.login}</p>
        <p>location: {user.location}</p>
        <p>company: {user.company}</p>
        <p>repos:{user.public_repos}</p>
      </div>
    );
  }
}

export default User;
