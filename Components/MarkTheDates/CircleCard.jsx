import React, { Fragment } from "react";
import datesStyles from "../../styles/Dates.module.css";

const CircleCard = ({ date, text }) => {
  return (
    <Fragment>
      <div className={datesStyles.circleCard}>
        <h1 className={datesStyles.date}>{date}</h1>
        <p>{text}</p>
      </div>
    </Fragment>
  );
};

export default CircleCard;
