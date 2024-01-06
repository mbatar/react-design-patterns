import { useEffect, useState } from "react";
import { fetchPosts } from "../api";
import Presentational from "./Presentational";

const Container = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts()
      .then((res) => setPosts(res))
      .catch((err) => alert("You have an error!"));
  }, []);

  return <Presentational posts={posts} />;
};

export default Container;
