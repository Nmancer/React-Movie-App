import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SecondaryColor, AccentColor } from "../../helpers/Theming";
import InfiniteCarousel from "react-leaf-carousel";
const Carousel = props => {
  return (
    <ItemsWrapper>
      <ItemsHeadingWrapper>
        <ItemsHeadingBig>{props.headingText}</ItemsHeadingBig>
      </ItemsHeadingWrapper>
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]}
        dots={false}
        showSides={true}
        sidesOpacity={0.5}
        sideSize={0.1}
        slidesToScroll={4}
        slidesToShow={7}
        scrollOnDevice={true}
      >
        {props.items.map(item => {
          return (
            <React.Fragment>
              {props.headingText === "Actors" ? (
                <Link to={`/actors/${item.id}`} key={item.id}>
                  <Item>
                    <img
                      src={
                        item.profile_path
                          ? `https://image.tmdb.org/t/p/w154${
                              item.profile_path
                            }`
                          : require("../../Images/notFoundActor.png")
                      }
                      alt=""
                    />
                    <ItemsHeadingSmall>{item.name}</ItemsHeadingSmall>
                  </Item>
                </Link>
              ) : (
                <Link to={`/movies/${item.id}`} key={item.id}>
                  <Item>
                    <img
                      src={
                        item.poster_path
                          ? `https://image.tmdb.org/t/p/w154${item.poster_path}`
                          : require("../../Images/notFoundActor.png")
                      }
                      alt=""
                    />
                    <ItemsHeadingSmall>{item.title}</ItemsHeadingSmall>
                  </Item>
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </InfiniteCarousel>
    </ItemsWrapper>
  );
};
const ItemsWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  @media (max-width: 1280px) {
    width: 100%;
  }
`;
const ItemsHeadingWrapper = styled.div`
  margin: 15px 65px 15px 15px;
  display: flex;
`;
const ItemsHeadingBig = styled.h1`
  font-weight: normal;
  font-size: 20px;
  color: ${SecondaryColor};
`;
const ItemsHeadingSmall = styled.h4`
  text-align: center;
  padding: 10px;
  font-weight: normal;
  color: ${SecondaryColor};
`;
const Item = styled.div`
  border-radius: 2px;
  :hover ${ItemsHeadingSmall} {
    color: ${AccentColor};
  }
`;
export default Carousel;
