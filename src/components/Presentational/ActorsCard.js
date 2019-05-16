import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ActorCardPlaceHolder from "./Placeholders/ActorCardPlaceHolder";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {
  PrimaryColor,
  SecondaryColor,
  AccentColor
} from "../../helpers/Theming";
import BigHeading from "./styles/BigHeading";
const ActorsCard = ({ credits, loading }) => {
  return (
    <ActorsWrapper>
      <BigHeading>
        <h1>Movie Cast</h1>
      </BigHeading>

      {loading ? (
        <PlaceHolderRow>
          {[1, 2, 3, 4, 5, 6].map((e, i) => (
            <PlaceholderItem key={i}>
              <ActorCardPlaceHolder />
            </PlaceholderItem>
          ))}
        </PlaceHolderRow>
      ) : (
        credits && (
          <Actors>
            {credits.cast.slice(0, 7).map(actor => {
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
                    <h4>{actor.name}</h4>

                    <h4>{actor.character}</h4>
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
  width: 154px;
  border-radius: 2px;

  h4 {
    text-align: center;
    padding: 8px;
    font-weight: normal;
    font-size: 14px;
    color: ${SecondaryColor};
    transition: 0.5s all;
  }

  & img {
    border-radius: 2px 2px 0 0;
  }
  transition: 5s all;

  :hover h4 {
    color: ${AccentColor};
  }
`;
export default ActorsCard;
