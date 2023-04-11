import { useState } from "react";

export default function LatestTrends() {
    return (
        <div className="latest-trends-container">
            <section className="latest-trends">
                <section>
                    <h2>Latest Trends</h2>
                    <div  className="latest-trends-items">
                        <div src="" className="latest-trends-image"></div>
                        <p className="latest-trends-p">searches here</p>
                    </div>
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
            </section>
        </div>
    )
}