import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ActorCardPlaceHolder from "./Placeholders/ActorCardPlaceHolder";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { PrimaryColor, SecondaryColor } from "../../helpers/Theming";
const ActorsCard = props => {
  return (
    <ActorsWrapper>
      <ActorsHeadingWrapper>
        <ActorsHeadingBig>Actors</ActorsHeadingBig>
      </ActorsHeadingWrapper>

      {props.loading ? (
        <PlaceHolderRow>
          {[1, 2, 3, 4, 5, 6].map((e, i) => (
            <PlaceholderItem key={i}>
              <ActorCardPlaceHolder />
            </PlaceholderItem>
          ))}
        </PlaceHolderRow>
      ) : (
        props.credits && (
          <Actors>
            {props.credits.cast.slice(0, 6).map(actor => {
              return (
                <Link to={`/actors/${actor.id}`} key={actor.id}>
                  <ActorsItem>
                    <ImageWrapper>
                      <LazyLoadImage
                        src={
                          actor.profile_path
                            ? `https://image.tmdb.org/t/p/w154${
                                actor.profile_path
                              }`
                            : require("../../Images/notFoundActor.png")
                        }
                        alt={actor.name}
                        effect="blur"
                      />
                    </ImageWrapper>
                    <ActorsHeadingSmall>{actor.name}</ActorsHeadingSmall>

                    <ActorsHeadingSmall>{actor.character}</ActorsHeadingSmall>
                  </ActorsItem>
                </Link>
              );
            })}
          </Actors>
        )
      )}
    </ActorsWrapper>
  );
};

const ActorsWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 1280px) {
    width: 100%;
  }
  svg {
    width: 100%;
    height: 100%;
  }
`;
const ActorsHeadingWrapper = styled.div`
  margin: 10px 10px 10px 170px;
`;
const ActorsHeadingBig = styled.h1`
  font-weight: normal;
  font-size: 20px;
  color: ${SecondaryColor};
`;
const ActorsHeadingSmall = styled.h4`
  text-align: center;
  padding: 8px;
  font-weight: normal;
  font-size: 14px;
  color: ${SecondaryColor};
`;
const PlaceHolderRow = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & svg {
    width: 100%;
    height: 100%;
  }
`;
const PlaceholderItem = styled.div`
  width: 154px;
  height: 260px;
  margin: 5px;
`;
const Actors = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const ImageWrapper = styled.div`
  display: flex;

  justify-content: center;
`;
const ActorsItem = styled.div`
  background: ${PrimaryColor};
  margin: 15px;
  min-height: 280px;
  min-width: 154px;
  border-radius: 2px;
  & img {
    border-radius: 2px 2px 0 0;
  }
`;
export default ActorsCard;
