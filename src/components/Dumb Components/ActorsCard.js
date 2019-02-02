import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { PrimaryColor, SecondaryColor } from "../../helpers/Theming";
const ActorsCard = props => {
  return (
    <ActorsWrapper>
      <ActorsHeadingWrapper>
        <ActorsHeadingBig>Actors</ActorsHeadingBig>
      </ActorsHeadingWrapper>
      <Actors>
        {props.credits
          ? props.credits.cast.slice(0, 7).map(actor => {
              return (
                <Link to={`/actors/${actor.id}`} key={actor.id}>
                  <ActorsItem>
                    <img
                      src={
                        actor.profile_path
                          ? `https://image.tmdb.org/t/p/w154${
                              actor.profile_path
                            }`
                          : require("../../Images/notFoundActor.png")
                      }
                      alt=""
                    />
                    <ActorsHeadingSmall>{actor.name}</ActorsHeadingSmall>
                  </ActorsItem>
                </Link>
              );
            })
          : null}
      </Actors>
    </ActorsWrapper>
  );
};

const ActorsWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 1280px) {
    width: 100%;
  }
`;
const ActorsHeadingWrapper = styled.div`
  margin: 15px 65px 15px 130px;
  display: flex;
`;
const ActorsHeadingBig = styled.h1`
  font-weight: normal;
  font-size: 20px;
  color: ${SecondaryColor};
`;
const ActorsHeadingSmall = styled.h4`
  text-align: center;
  padding: 10px;
  font-weight: normal;
  color: ${SecondaryColor};
`;
const Actors = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & img {
    filter: grayscale(1);
    object-fit: contain;
    transition: all 0.5s linear;
    border-radius: 2px 2px 0 0;
    :hover {
      filter: grayscale(0);
    }
  }
`;
const ActorsItem = styled.div`
  display: flex;
  flex-direction: column;
  background: ${PrimaryColor};
  margin: 5px;
  min-height: 280px;
  border-radius: 2px;
`;
export default ActorsCard;
