import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

const CardContainer = styled.div`
  ${tw`bg-white my-0 mx-7 lg:mx-4 border-t-2`};
`;

const Card = styled.div`
  ${tw`flex flex-col lg:flex-row px-5 mt-7 mb-5`};
`;

const CardLeft = styled.div`
  ${tw`flex flex-col mx-auto h-full w-full lg:h-48 lg:w-60 lg:mb-0 mb-3 lg:border-r-2 md:pr-5`};
`;

const CardLeftContainer = styled.div`
  ${tw`flex flex-col items-center my-auto`};
`;

const CardRight = styled.div`
  ${tw`flex-auto ml-3 justify-evenly py-2 px-2 max-w-screen-sm`};
`;

function Capitalize(str) {
  return str.replace(/\b(\w)/g, (s) => s.toUpperCase());
}

function CommentCard({ commentId, postId, name, email, body }) {
  return (
    <CardContainer>
      <Card>
        <CardLeft>
          <CardLeftContainer>
            <img
              className="rounded-full border border-gray-500 shadow-sm w-20 "
              src={`https://avatars.dicebear.com/api/human/${
                commentId + 100
              }.svg`}
              alt={`image for user ${postId}`}
            />
            <h1 className="font-bold text-m mt-2">{Capitalize(name)}</h1>
            <p className="text-sm">{email}</p>
          </CardLeftContainer>
        </CardLeft>
        <CardRight>
          <p>{body}</p>
        </CardRight>
      </Card>
    </CardContainer>
    // <div>
    //   <h1>Post Page for post id: {postId}</h1>
    // </div>
  );
}

export default CommentCard;
