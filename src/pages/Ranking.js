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
                1 - {destinations[37].city[0].cityName}
                <img
                  className="flag"
                  src={`${destinations[37].flag}`}
                  alt="country flag"
                />
              </h2>
              <br></br>
              <img src={`${destinations[37].city[0].image}`} alt="cityPhoto" />
              <br></br>
              <h2 className="rank-border">Score: {destinations[37].city[0].score}</h2>
            </>
          ) : (
            "loading"
          )}

        </div>

        <div>
        {destinations.length > 0 ? (
            <>
          <h2 className="flag">
            2 - {destinations[17].city[0].cityName}
            <img
              className="flag"
              src={`${destinations[17].flag}`}
              alt="country flag"
            />
          </h2>
          <br></br>
          <img src={`${destinations[17].city[0].image}`} alt="cityPhoto" />
          <br></br>
          <h2 className="rank-border">Score: {destinations[17].city[0].score}</h2>
          </>
          ) : (
            "loading"
          )}
        </div>

        <div>
        {destinations.length > 0 ? (
            <>
          <h2 className="flag">
            3 - {destinations[16].city[0].cityName}
            <img src={`${destinations[16].flag}`} alt="country flag" />
          </h2>
          <br></br>
          <img src={`${destinations[16].city[0].image}`} alt="cityPhoto" />
          <br></br>
          <h2 className="rank-border">Score: {destinations[16].city[0].score}</h2>
          </>
          ) : (
            "loading"
          )}
        </div>

        <div>
        {destinations.length > 0 ? (
            <>
          <h2 className="flag">
            4 - {destinations[36].city[0].cityName}
            <img
              className="flag"
              src={`${destinations[36].flag}`}
              alt="country flag"
            />
          </h2>
          <br></br>
          <img src={`${destinations[36].city[0].image}`} alt="cityPhoto" />
          <br></br>
          <h2 className="rank-border">Score: {destinations[36].city[0].score}</h2>
          </>
          ) : (
            "loading"
          )}
        </div>

        <div>
        {destinations.length > 0 ? (
            <>
          <h2 className="flag">
            5 - {destinations[35].city[0].cityName}
            <img
              className="flag"
              src={`${destinations[35].flag}`}
              alt="country flag"
            />
          </h2>
          <br></br>
          <img src={`${destinations[35].city[0].image}`} alt="cityPhoto" />
          <br></br>
          <h2 className="rank-border">Score: {destinations[35].city[0].score}</h2>
          </>
          ) : (
            "loading"
          )}
        </div>

        <div>
        {destinations.length > 0 ? (
            <>
          <h2 className="flag">
            6 - {destinations[22].city[0].cityName}
            <img
              className="flag"
              src={`${destinations[22].flag}`}
              alt="country flag"
            />
          </h2>
          <br></br>
          <img src={`${destinations[22].city[0].image}`} alt="cityPhoto" />
          <br></br>
          <h2 className="rank-border">Score: {destinations[22].city[0].score}</h2>
          </>
          ) : (
            "loading"
          )}
        </div>

        <div>
        {destinations.length > 0 ? (
            <>
          <h2 className="flag">
            7 - {destinations[34].city[0].cityName}
            <img
              className="flag"
              src={`${destinations[34].flag}`}
              alt="country flag"
            />
          </h2>
          <br></br>
          <img src={`${destinations[34].city[0].image}`} alt="cityPhoto" />
          <br></br>
          <h2 className="rank-border">Score: {destinations[34].city[0].score}</h2>
          </>
          ) : (
            "loading"
          )}
        </div>

        <div>
        {destinations.length > 0 ? (
            <>
          <h2 className="flag">
            8 - {destinations[32].city[0].cityName}
            <img
              className="flag"
              src={`${destinations[32].flag}`}
              alt="country flag"
            />
          </h2>
          <br></br>
          <img src={`${destinations[32].city[0].image}`} alt="cityPhoto" />
          <br></br>
          <h2 className="rank-border">Score: {destinations[32].city[0].score}</h2>
          </>
          ) : (
            "loading"
          )}
        </div>

        <div>
        {destinations.length > 0 ? (
            <>
          <h2 className="flag">
            9 - {destinations[13].city[0].cityName}
            <img
              className="flag"
              src={`${destinations[13].flag}`}
              alt="country flag"
            />
          </h2>
          <br></br>
          <img src={`${destinations[13].city[0].image}`} alt="cityPhoto" />
          <br></br>
          <h2 className="rank-border">Score: {destinations[13].city[0].score}</h2>
          </>
          ) : (
            "loading"
          )}
        </div>

        <div>
        {destinations.length > 0 ? (
            <>
          <h2 className="flag">
            10 - {destinations[2].city[0].cityName}
            <img
              className="flag"
              src={`${destinations[2].flag}`}
              alt="country flag"
            />
          </h2>
          <br></br>
          <img src={`${destinations[2].city[0].image}`} alt="cityPhoto" />
          <br></br>
          <h2 className="rank-border">Score: {destinations[2].city[0].score}</h2>
          </>
          ) : (
            "loading"
          )}
        </div>

        <div>
        {destinations.length > 0 ? (
            <>
          <h2 className="flag">
            11 - {destinations[32].city[1].cityName}
            <img
              className="flag"
              src={`${destinations[32].flag}`}
              alt="country flag"
            />
          </h2>
          <br></br>
          <img src={`${destinations[32].city[1].image}`} alt="cityPhoto" />
          <br></br>
          <h2 className="rank-border">Score: {destinations[32].city[1].score}</h2>
          </>
          ) : (
            "loading"
          )}
        </div>

        <div>
        {destinations.length > 0 ? (
            <>
          <h2 className="flag">
            12 - {destinations[29].city[1].cityName}
            <img
              className="flag"
              src={`${destinations[29].flag}`}
              alt="country flag"
            />
          </h2>
          <br></br>
          <img src={`${destinations[29].city[1].image}`} alt="cityPhoto" />
          <br></br>
          <h2 className="rank-border">Score: {destinations[29].city[1].score}</h2>
          </>
          ) : (
            "loading"
          )}
        </div>

        <div>
        {destinations.length > 0 ? (
            <>
          <h2 className="flag">
            13 - {destinations[37].city[2].cityName}
            <img
              className="flag"
              src={`${destinations[37].flag}`}
              alt="country flag"
            />
          </h2>
          <br></br>
          <img src={`${destinations[37].city[2].image}`} alt="cityPhoto" />
          <br></br>
          <h2 className="rank-border">Score: {destinations[37].city[2].score}</h2>
          </>
          ) : (
            "loading"
          )}
        </div>

        <div>
        {destinations.length > 0 ? (
            <>
          <h2 className="flag">
            14 - {destinations[18].city[0].cityName}
            <img
              className="flag"
              src={`${destinations[18].flag}`}
              alt="country flag"
            />
          </h2>
          <br></br>
          <img src={`${destinations[18].city[0].image}`} alt="cityPhoto" />
          <br></br>
          <h2 className="rank-border">Score: {destinations[18].city[0].score}</h2>
          </>
          ) : (
            "loading"
          )}
        </div>

        <div>
        {destinations.length > 0 ? (
            <>
          <h2 className="flag">
            15 - {destinations[6].city[0].cityName}
            <img
              className="flag"
              src={`${destinations[6].flag}`}
              alt="country flag"
            />
          </h2>
          <br></br>
          <img src={`${destinations[6].city[0].image}`} alt="cityPhoto" />
          <br></br>
          <h2 className="rank-border">Score: {destinations[6].city[0].score}</h2>
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
