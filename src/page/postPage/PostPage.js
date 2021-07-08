import React from "react";
import { useParams } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import PostCard from "../../component/postCard/postCard";
import Skeleton from "react-loading-skeleton";
import CommentList from "./CommentList";

const fetchPost = (postId) => {
  return axios
    .get("https://jsonplaceholder.typicode.com/posts/" + postId)
    .then((res) => {
      // console.log(res.data);
      console.log("Post data", res.data);
      return res.data;
    })
    .catch((err) => {
      console.error(err);
    });
};

const PostPageContainer = styled.div`
  ${tw`h-full flex flex-col items-center justify-center`};
`;

const SkeletonContainer = styled.div`
  ${tw`h-full mx-4 lg:mx-10`};
`;

export default function PostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetchPost(postId).then((apiPost) => {
      setPost(apiPost);
    });
  }, []);

  return post != "" ? (
    <PostPageContainer>
      <PostCard
        postId={post.id}
        userId={post.userId}
        title={post.title}
        body={post.body}
        selected={true}
      />
      <CommentList/>
    </PostPageContainer>
  ) : (
    <SkeletonContainer>
      <Skeleton count={5} />
    </SkeletonContainer>
  );
}
