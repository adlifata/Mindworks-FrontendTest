import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CardContainer = styled.div`
  ${tw`bg-white shadow-md rounded-lg my-9 mx-7  lg:mx-4 lg:my-7 cursor-pointer transform transition duration-200 hover:scale-105 active:scale-100`};
`;

const CardContainerSelected = styled.div`
  ${tw`bg-white shadow-md rounded-lg my-9 mx-7  lg:mx-4 lg:my-7`};
`;

const Card = styled.div`
  ${tw`flex flex-col lg:flex-row px-5 pt-7 pb-5`};
`;

const CardLeft = styled.div`
  ${tw`flex flex-col mx-auto h-full w-full lg:h-48 lg:w-48 lg:mb-0 mb-3 `};
`;

const CardRight = styled.div`
  ${tw`flex-auto ml-3 justify-evenly py-2 px-2 max-w-screen-sm`};
`;

const CardTitle = styled.h1`
  ${tw`font-bold`};
`;

function Capitalize(str) {
  return str.replace(/\b(\w)/g, (s) => s.toUpperCase());
}

function PostCard({ postId, userId, title, body, selected }) {
  return selected ? (
    <CardContainerSelected>
      <Card>
        <CardLeft>
          <div className="m-auto">
            <img
              className="rounded-full border border-gray-500 shadow-sm w-20 "
              src={`https://avatars.dicebear.com/api/human/${userId}.svg`}
              alt={`image for user ${postId}`}
            />
            <h1>User {userId}</h1>
          </div>
        </CardLeft>
        <CardRight>
          <CardTitle>{Capitalize(title)}</CardTitle>
          <hr className="mt-2 mb-3" />
          <p>{body}</p>
        </CardRight>
      </Card>
    </CardContainerSelected>
    // <div>
    //   <h1>Post Page for post id: {postId}</h1>
    // </div>
  ) : (
    <Link to={`/post/${postId}`}>
      <CardContainer>
        <Card>
          <CardLeft>
            <div className="m-auto">
              <img
                className="rounded-full border border-gray-500 shadow-sm w-20 "
                src={`https://avatars.dicebear.com/api/human/${userId}.svg`}
                alt={`image for user ${postId}`}
              />
              <h1>User {userId}</h1>
            </div>
          </CardLeft>
          <CardRight>
            <CardTitle>{Capitalize(title)}</CardTitle>
            <hr className="mt-2 mb-3" />
            <p>{body}</p>
          </CardRight>
        </Card>
      </CardContainer>
    </Link>
  );
}

export default PostCard;
