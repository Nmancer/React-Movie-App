import React from "react";
import "../../Styles/ActorInfo.css";
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
    <div className="actor-info">
      <div className="actor-info-wrapper">
        <div className="actor-info-left">
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w185${profile_path}`
                : ""
            }
            alt={name}
          />
        </div>
        <div className="actor-info-right">
          <h1>{name}</h1>
          <h2>
            <span> Birthday:</span> {birthday} ({place_of_birth})
          </h2>
          {deathday ? (
            <h2>
              <span> Died:</span>
              {deathday}
            </h2>
          ) : null}
          <div>
            <p>
              {" "}
              <span>Biography:</span>
              {biography}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ActorInfo;
