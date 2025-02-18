import { Fragment } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import InfoSection from "../components/InfoSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingEmojisWrapper from "../components/FloatingEmojisWrapper";

export default function Home() {
  return (
    <Fragment>
      {" "}
      <Header /> <Hero /> <Services /> <About /> <Projects /> <Testimonials />{" "}
      <FloatingEmojisWrapper />
      <InfoSection /> <Contact /> <Footer />
    </Fragment>
  );
}
