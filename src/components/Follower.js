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
    const { followers } = this.state;
    if (followers.length === 0) return <div>followers: {followers.length}</div>;
    return (
      <div className="followers-wrapper">
        {followers.map((follower) => (
          <div key={follower.id} className="follower-card">
            <img
              style={{ width: "100px", borderRadius: "10%" }}
              src={follower.avatar_url}
              alt={follower.login}
            />
            <h4>{follower.login}</h4>
            <p>{follower.location}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Follower;
