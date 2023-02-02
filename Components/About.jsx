import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import aboutStyle from "../styles/About.module.css";
import Image from "next/image";
import aboutImage from "../public/about.jpg";
import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "../node_modules/gsap/ScrollTrigger";
const About = () => {
  const el = useRef();
  const el1 = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    //Image
    gsap.from(el.current, 1, {
      scale: 0.5,
      x: 0,
      opacity: 0,
      delay: 0.3,
    });
    gsap.to(el.current, 1, {
      scale: 1,
      x: 0,
      opacity: 1,
      delay: 0.3,
      // ease: "easeinout",
      scrollTrigger: {
        trigger: ".yoy",
        // markers: true,
        start: "top center",
        endTrigger: ".yoyo",
        end: "top center",
        toggleActions: "play play play play",
        scrub: true,
      },
    });

    //For Text animation
    gsap.from(el1.current, 1, {
      x: 27,
      opacity: 0,
      delay: 1,
    });
    gsap.to(el1.current, 1, {
      x: 0,
      opacity: 1,
      delay: 1,
      // ease: "easeinout",
      scrollTrigger: {
        trigger: ".yoy",
        // markers: true,
        start: "top center",
        endTrigger: ".yoyo",
        end: "top center",
        toggleActions: "play play play play",
        scrub: true,
      },
    });
  });
  return (
    <div id="about">
      <section id={aboutStyle.about}>
        <h1 className="yoy">
          About <span>Aikya</span>{" "}
        </h1>

        {/* <Fade left> */}
        <Grid container spacing={2}>
          <Grid item xs={12} md={5} ref={el}>
            <Image height={290} width={420} src={aboutImage} className="yoyo" />
          </Grid>
          <Grid item xs={12} md={7} ref={el1}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              accusamus. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Veritatis dolores fugit vel nemo at a laboriosam? Cumque
              provident, sequi impedit laudantium vitae obcaecati veritatis
              excepturi illo quidem facere porro earum ullam possimus quisquam
              blanditiis. Nesciunt quis impedit voluptatum tenetur, recusandae
              est voluptas reiciendis inventore aspernatur?
            </p>
          </Grid>
        </Grid>
        {/* </Fade> */}
      </section>
    </div>
  );
};

export default About;
