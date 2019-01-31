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
    <div className="actor__info">
      <div className="actor__info-wrapper">
        <div className="actor__info-left">
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w185${profile_path}`
                : null
            }
            alt={name}
          />
        </div>
        <div className="actor__info-right">
          {name ? <h1>{name}</h1> : null}
          {birthday ? (
            <h2>
              <span> Birthday:</span> {birthday} ({place_of_birth})
            </h2>
          ) : null}

          {deathday ? (
            <h2>
              <span> Died:</span>
              {deathday}
            </h2>
          ) : null}
          <div>
            {biography ? (
              <p>
                {" "}
                <span>Biography:</span>
                {biography}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ActorInfo;
