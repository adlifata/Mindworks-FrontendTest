import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tw from "twin.macro";
import styled from "styled-components";
import Skeleton from "react-loading-skeleton";
import CommentCard from "../../component/comment/commentCard";

const CommentListContainer = styled.div`
  ${tw` flex flex-col w-full max-w-full px-10 md:max-w-3xl lg:max-w-5xl items-start lg:mt-4 cursor-default`};
`;

const CommentHeaderContainer = styled.div`
  ${tw`w-full flex flex-col max-w-full lg:flex-row lg:justify-between `};
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
  ${tw`h-full mx-4 lg:mx-10 w-full`};
`;

const SearchBoxContainer = styled.div`
  ${tw` h-full w-full md:max-w-screen-sm`};
`;

const CommentBodyContainer = styled.div`
  ${tw`my-10 bg-white flex flex-col shadow-md rounded-lg`};
`;

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

function CommentList() {
  const { postId } = useParams();
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetchComment(postId).then((apiComments) => {
      setComments(apiComments);
      setFilteredComments(apiComments);
    });
    setInput("");
  }, []);

  const filterComment = (input) => {
    let loweredInput = input.toLowerCase();
    let result = [];

    result = comments.filter((data) => {
      return (
        data.name.toLowerCase().search(loweredInput) != -1 ||
        data.email.toLowerCase().search(loweredInput) != -1 ||
        data.body.toLowerCase().search(loweredInput) != -1
      );
    });

    setFilteredComments(result);
  };

  return comments != "" ? (
    <CommentListContainer>
      <CommentHeaderContainer>
        <div>
          <CommentHeader>{comments.length} Comments</CommentHeader>
          <PostIdContainer>
            <PostIdLabel>Post #{postId}</PostIdLabel>
          </PostIdContainer>
        </div>
        <SearchBoxContainer>
          <div className="w-full">
            <input
              className="w-full max-w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Filter"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                filterComment(e.target.value);
              }}
            ></input>
          </div>
        </SearchBoxContainer>
      </CommentHeaderContainer>
      <CommentBodyContainer>
        {filteredComments.map((filteredComments, index) => {
          return (
            <CommentCard
              key={filteredComments.id}
              commentId={filteredComments.id}
              postId={filteredComments.postId}
              name={filteredComments.name}
              email={filteredComments.email}
              body={filteredComments.body}
            />
          );
        })}
      </CommentBodyContainer>
    </CommentListContainer>
  ) : (
    <CommentListContainer>
      <SkeletonContainer>
        <Skeleton count={5} />
      </SkeletonContainer>
    </CommentListContainer>
  );
}

export default CommentList;
