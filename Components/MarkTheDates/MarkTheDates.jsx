import { Grid } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import datesStyles from "../../styles/Dates.module.css";
import CircleCard from "./CircleCard";
import gsap from "gsap";
import ScrollTrigger from "../../node_modules/gsap/ScrollTrigger";
import { useRef } from "react";

// import HeadShake from 'react-reveal/HeadShake'
const MarkTheDates = () => {
  gsap.registerPlugin(ScrollTrigger);
  const el = useRef(null);
  const el1 = useRef(null);
  const el2 = useRef(null);
  useEffect(() => {
    //Block 1
    gsap.fromTo(
      el.current,
      1,
      {
        x: 20,
        opacity: 0,
        delay: 0.3,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.3,
        // ease: "easeinout",
        scrollTrigger: {
          trigger: ".aboveBlocks",
          // markers: true,
          start: "top center",
          endTrigger: ".belowBlocks",
          end: "top center",
          toggleActions: "play play play play",
          scrub: true,
        },
      }
    );

    //Block 2
    gsap.fromTo(
      el1.current,
      1,
      {
        x: -30,
        opacity: 0,
        delay: 0.3,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.3,
        // ease: "easeinout",
        scrollTrigger: {
          trigger: ".aboveBlocks",
          // markers: true,
          start: "top center",
          endTrigger: ".belowBlocks",
          end: "top center",
          toggleActions: "play play play play",
          scrub: true,
        },
      }
    );

    //Block 3
    gsap.fromTo(
      el2.current,
      1,
      {
        x: 30,
        opacity: 0,
        delay: 0.3,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.3,
        // ease: "easeinout",
        scrollTrigger: {
          trigger: ".aboveBlocks",
          // markers: true,
          start: "top center",
          endTrigger: ".belowBlocks",
          end: "top center",
          toggleActions: "play play play play",
          scrub: true,
        },
      }
    );
  });

  return (
    <Fragment>
      <section id={datesStyles.markTheDates}>
        <h1 className="aboveBlocks">
          Mark the <span>dates</span>
        </h1>
        {/* <HeadShake> */}
        <Grid container spacing={3} className="belowBlocks">
          <Grid item xs={12} md={4} className={datesStyles.centerThis} ref={el}>
            <CircleCard date="17th Nov" text="Aikya Start Day" />
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            className={datesStyles.centerThis}
            ref={el1}
          >
            <CircleCard date="18th Nov" text="Aikya 2nd Day" />
          </Grid>

          <Grid
            item
            xs={12}
            md={4}
            className={datesStyles.centerThis}
            ref={el2}
          >
            <CircleCard date="19th Nov" text="Aikya 3nd Day" />
          </Grid>
        </Grid>
        {/* </HeadShake> */}
      </section>
    </Fragment>
  );
};

export default MarkTheDates;
