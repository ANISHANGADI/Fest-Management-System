import React from "react";
import CardComponent from "./CardComponent";
import { Grid } from "@mui/material";
import eventStyles from "../../styles/Events.module.css";
import eventData from "./events";
// import Fade from "react-reveal/Fade";
import gsap from "gsap";
import ScrollTrigger from "../../node_modules/gsap/ScrollTrigger";
import Image from "next/image";

const EventsComponent = () => {
  gsap.registerPlugin(ScrollTrigger);
  return (
    <div id="events">
      <section id={eventStyles.events}>
        <h1>
          Upcoming <span>Events</span>{" "}
        </h1>

        {/* <Fade> */}
        <Grid container spacing={5} rowSpacing={6}>
          {eventData.map((item) => (
            <Grid
              key={item.id}
              item
              xs={12}
              sm={6}
              md={4}
              className={eventStyles.centerThis}
            >
              <CardComponent
                title={item.title}
                imageUrl={item.imageUrl}
                content={item.content}
                altText={item.alt}
              />
            </Grid>
          ))}
        </Grid>
        {/* </Fade> */}
      </section>
    </div>
  );
};

export default EventsComponent;
