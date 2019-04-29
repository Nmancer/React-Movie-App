import React from "react";
import styled from "styled-components";
import {
  PrimaryColor,
  SecondaryColor,
  TertiaryColor,
  BackgroundColor,
  AccentColor
} from "../../helpers/Theming";
import BigHeading from "./styles/BigHeading";
const Reviews = ({ reviews }) => {
  const slicedReviews =
    reviews.results.length > 0 ? reviews.results.slice(0.5) : false;

  return (
    <>
      {slicedReviews && (
        <>
          <BigHeading>
            <h1>Reviews</h1>
          </BigHeading>
          <div>
            <ReviewWrapper>
              {slicedReviews.map(review => (
                <a href={review.url} key={review.id}>
                  <div>
                    <h3>{review.author}</h3>
                    <p>
                      {review.content.length > 800
                        ? review.content.slice(0, 797) + " ..."
                        : review.content}
                    </p>
                  </div>
                </a>
              ))}
            </ReviewWrapper>
          </div>
        </>
      )}
    </>
  );
};

const ReviewWrapper = styled.div`
  width: 70%;
  @media (max-width: 1280px) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;

  margin: 0 auto;

  p {
    color: ${SecondaryColor};
    background-color: ${BackgroundColor};
    border-radius: 4px;
    transition: 0.5s all;
    padding: 10px;
    font-size: 14px;
  }
  h3 {
    padding: 5px;
    color: ${AccentColor};
  }
  div {
    margin: 5px;
    padding: 5px;
    background-color: ${PrimaryColor};
    border-radius: 3px;
    :hover {
      p {
        color: ${TertiaryColor};
      }
    }
  }
`;
export default Reviews;
