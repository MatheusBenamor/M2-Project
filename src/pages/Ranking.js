import React, { useState, useEffect } from "react";
import "../components/Ranking.css";

export const Ranking = ({ destinations, getDestinations }) => {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    getDestinations();
  }, []);

  return (
    <>
  
      <section className="ranking-list">
        <div>
          {destinations.length > 0 ? (
            <>
              <h2 className="flag">
                1 - {destinations[17].city[0].cityName}
                <img
                  className="flag"
                  src={`${destinations[17].flag}`}
                  alt="country flag"
                />
              </h2>
              <br></br>
              <img src={`${destinations[17].city[0].image}`} alt="cityPhoto" />
              <br></br>
              <h2>Score: {destinations[17].city[0].score}</h2>
            </>
          ) : (
            "loading"
          )}

        </div>

        <div>
        {destinations.length > 0 ? (
            <>
          <h2 className="flag">
            2 - {destinations[13].city[0].cityName}
            <img
              className="flag"
              src={`${destinations[13].flag}`}
              alt="country flag"
            />
          </h2>
          <br></br>
          <img src={`${destinations[13].city[0].image}`} alt="cityPhoto" />
          <br></br>
          <h2>Score: {destinations[13].city[0].score}</h2>
          </>
          ) : (
            "loading"
          )}
        </div>

        <div>
        {destinations.length > 0 ? (
            <>
          <h2 className="flag">
            3 - {destinations[18].city[0].cityName}
            <img src={`${destinations[18].flag}`} alt="country flag" />
          </h2>
          <br></br>
          <img src={`${destinations[18].city[0].image}`} alt="cityPhoto" />
          <br></br>
          <h2>Score: {destinations[18].city[0].score}</h2>
          </>
          ) : (
            "loading"
          )}
        </div>

        <div>
        {destinations.length > 0 ? (
            <>
          <h2 className="flag">
            4 - {destinations[9].city[0].cityName}
            <img
              className="flag"
              src={`${destinations[9].flag}`}
              alt="country flag"
            />
          </h2>
          <br></br>
          <img src={`${destinations[9].city[0].image}`} alt="cityPhoto" />
          <br></br>
          <h2>Score: {destinations[9].city[0].score}</h2>
          </>
          ) : (
            "loading"
          )}
        </div>

        <div>
        {destinations.length > 0 ? (
            <>
          <h2 className="flag">
            5 - {destinations[5].city[0].cityName}
            <img
              className="flag"
              src={`${destinations[5].flag}`}
              alt="country flag"
            />
          </h2>
          <br></br>
          <img src={`${destinations[5].city[0].image}`} alt="cityPhoto" />
          <br></br>
          <h2>Score: {destinations[5].city[0].score}</h2>
          </>
          ) : (
            "loading"
          )}
        </div>

        <div>
        {destinations.length > 0 ? (
            <>
          <h2 className="flag">
            6 - {destinations[15].city[0].cityName}
            <img
              className="flag"
              src={`${destinations[15].flag}`}
              alt="country flag"
            />
          </h2>
          <br></br>
          <img src={`${destinations[15].city[0].image}`} alt="cityPhoto" />
          <br></br>
          <h2>Score: {destinations[15].city[0].score}</h2>
          </>
          ) : (
            "loading"
          )}
        </div>
      </section>
    </>
  );
};

export default Ranking;
