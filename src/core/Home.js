import React from "react";
import Posts from "../post/Posts";

const Home = () => (
  <div>
    <div className="jumbotron">
      <h2><b>HOBNOBS</b></h2>
      <p className="lead"><i>A Fun Way to Socialise</i></p>
    </div>
    <div className="container">
      <Posts />
    </div>
  </div>
);

export default Home;
