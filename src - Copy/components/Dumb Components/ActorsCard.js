import React from "react";
import { Link } from "react-router-dom";
const ActorsCard = props => {
  return (
    <div className="movie-gallery-row-wrapper">
      <div className="movies-header">
        <h1>Actors</h1>
      </div>
      <div className="movie-gallery-row">
        {props.credits
          ? props.credits.cast.slice(0, 7).map(actor => {
              return (
                <Link to={`/actors/${actor.id}`} key={actor.id}>
                  <div className="movie-gallery-row-item actors">
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
                    <h4>{actor.name}</h4>
                  </div>
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
};
export default ActorsCard;
