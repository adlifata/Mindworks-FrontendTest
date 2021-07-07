import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
import PostCard from "../../component/postCard/postCard";

const fetchData = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      // console.log(res.data);
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

export default function AllPost() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetchData().then((apiPost) => {
      setPost(apiPost);
    });
  }, []);

  return (
    <div>
      {post.map((post, index) => {
        return (
          <PostCard
            key={post.id}
            postId={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
            selected={false}
          />
        );
      })}
    </div>
  );
}
