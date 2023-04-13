import React, { FunctionComponent } from "react";
import { Trend } from "../types"

interface Props {
    trends: Trend[];
}

const LatestTrends: FunctionComponent<Props> = ({ trends }) => {
  return (
    <div className="all-suggestions-container">
      <div className="all-suggestions">
        <section className="latest-trends">
          <h2>Latest Trends</h2>
          <ul className="latest-trends-items">
            {trends.map(({ id, name, img }) => (
              <li key={id} className="latesttrends-list">
                <img
                  src={img}
                  className="latest-trends-image"
                  alt="latest trends product"
                />
                <p className="latest-trends-p">{name}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="popular-suggestions">
          <h2>Popular suggestions</h2>
          <div className="popular-suggestions-p">
            <p>Striped shirt dress</p>
            <p>Satin shirts</p>
            <p>Denim jumpsuit</p>
            <p>Leather dresses</p>
            <p>Solid tshirts</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LatestTrends;
