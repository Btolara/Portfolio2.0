import React from "react";
import "./academic.css";

const Academic = ({ title, place, city, date, work }) => {
  return (
    <section className="academic">
      <div className="academic__left">
        <h1>{title}</h1>
        <h2>{place}</h2>
        <h3>
          {date} | {city}
        </h3>
      </div>
      <div className="academic__right">
        <link href="{work}" />
      </div>
    </section>
  );
};

export default Academic;
