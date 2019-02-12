import React from "react";
import styled from "styled-components";
import {
  AccentColor,
  TertiaryColor,
  QuaternaryColor
} from "../../helpers/Theming";
const ActorInfo = props => {
  const {
    biography,
    birthday,
    deathday,
    name,
    place_of_birth,
    profile_path
  } = props;
  return (
    <ActorWrapper>
      <Actor>
        <div>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w185${profile_path}`
                : null
            }
            alt={name}
          />
        </div>
        <ActorRight>
          {name ? <ActorHeadingBig>{name}</ActorHeadingBig> : null}
          {birthday ? (
            <ActorHeadingSmall>
              Birthday: {birthday} ({place_of_birth})
            </ActorHeadingSmall>
          ) : null}
          {deathday ? (
            <ActorHeadingSmall>
              Died:
              {deathday}
            </ActorHeadingSmall>
          ) : null}

          {biography ? (
            <p>
              {" "}
              <span>Biography:</span>
              {biography}
            </p>
          ) : null}
        </ActorRight>
      </Actor>
    </ActorWrapper>
  );
};

const ActorWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  background-color: ${QuaternaryColor};
`;
const Actor = styled.div`
  display: flex;
  width: 60%;
  margin: 0 auto;
  padding: 50px;
  @media (max-width: 1280px) {
    margin-top: 90px;
    padding: 0;
    width: 80%;
  }
  @media (max-width: 780px) {
    width: 100%;
  }
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const ActorRight = styled.div`
  margin-left: 5px;
  color: ${TertiaryColor};
`;
const ActorHeadingBig = styled.h1`
  color: ${AccentColor};
`;
const ActorHeadingSmall = styled.h2`
  font-weight: normal;
  font-size: 20px;
`;
export default ActorInfo;
