import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import PostCard from "../../component/postCard/postCard";


const fetchComment = (postId) => {
    return axios
      .get("https://jsonplaceholder.typicode.com/comments?postId=" + postId)
      .then((res) => {
        //   console.log(res.data);
        return res.data;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const CommentHeaderContainer = styled.div`
  ${tw` flex flex-col w-full max-w-sm md:max-w-xl lg:max-w-4xl items-start lg:mt-4 cursor-default`};
`;

const CommentHeader = styled.h2`
  ${tw`font-bold text-xl`};
`;

const PostIdContainer = styled.div`
  ${tw`bg-yellow-600 rounded-2xl my-1 px-3 py-1`};
`;

const PostIdLabel = styled.div`
  ${tw`text-white font-bold`};
`;

const SkeletonContainer = styled.div`
  ${tw`h-full mx-4 lg:mx-10`};
`;

function CommentList() {
    const { postId } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchComment(postId).then((apiComments) => {
          setComments(apiComments);
        });
        
      }, []);
    return comments != "" ? (
        <CommentHeaderContainer>
        <CommentHeader>{comments.length} Comments</CommentHeader>
        <PostIdContainer>
          <PostIdLabel>Post #{postId}</PostIdLabel>
        </PostIdContainer>
        <h2>Belom ini test display aja comment nya ea</h2>
        {comments.map((comments, index) => {
        return (
          <PostCard
            key={comments.id}
            postId={comments.id}
            userId={comments.id}
            title={comments.name}
            body={comments.body}
            selected={true}
          />
        );
      })}
      </CommentHeaderContainer>
    ): (
        <SkeletonContainer>
          <Skeleton count={5} />
        </SkeletonContainer>
      );
}

export default CommentList
