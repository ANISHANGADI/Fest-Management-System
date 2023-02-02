import React, { Fragment, useEffect, useLayoutEffect, useRef } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { gsap } from "gsap";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
import About from "../Components/About";
import Navbar from "../Components/Navbar";
import EventsComponent from "../Components/Events/EventsComponent";
import styles from "../styles/Home.module.css";
import Footer from "../Components/Footer";
import MarkTheDates from "../Components/MarkTheDates/MarkTheDates";
import ScrollTrigger from "../node_modules/gsap/ScrollTrigger";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const boxRef = useRef();
  const boxRef1 = useRef();
  const boxRef2 = useRef();

  useEffect(() => {
    //For Aikya header
    gsap.from(boxRef.current, 1, { opacity: 0, x: -60, delay: 2.8 });
    gsap.to(boxRef.current, 1, {
      opacity: 1,
      x: 0,
      delay: 2.8,
    });

    //For year(2023)
    gsap.from(boxRef1.current, 1, { opacity: 0, x: 60, delay: 3.5 });
    gsap.to(boxRef1.current, 1, { opacity: 1, x: 0, delay: 3.5 });

    //For Caption
    gsap.from(boxRef2.current, 0.5, {
      opacity: 0,
      y: -50,
      delay: 2,
      ease: "elastic",
    });
    gsap.to(boxRef2.current, 0.5, {
      opacity: 1,
      y: 0,
      delay: 2,
      ease: "elastic",
    });
  }, []);
  return (
    <Fragment>
      <Navbar />
      <section id={styles.heroPage}>
        <div className={styles.heroContent}>
          <h4 ref={boxRef2}>RNSIT CSE presents </h4>
          <h1 ref={boxRef}>Aikya</h1>
          <h1 className={styles.year} ref={boxRef1}>
            20<span>23</span>
          </h1>
        </div>
      </section>

      <About />

      <div style={{ backgroundColor: "#182136ba" }}>
        <hr className={styles.hrStyle} />
      </div>
      <MarkTheDates />
      <div style={{ backgroundColor: "#182136ba" }}>
        <hr className={styles.hrStyle} />
      </div>

      <ThemeProvider theme={darkTheme}>
        <EventsComponent />
      </ThemeProvider>

      <div style={{ backgroundColor: "#182136ba" }}>
        <hr className={styles.hrStyle} />
      </div>

      <Footer />
    </Fragment>
  );
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://aikya22.vercel.app/api/`);
//   const date = await res.json();
//   return {
//     props: { date },
//   };
// };
