import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Typewriter } from 'react-simple-typewriter'
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import backgroundImage from './test.png'

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div
            className="h_bg-image order-1 order-lg-2 h-100 "
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{"Hi I'm Soko!"}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    words={["Your personal K-beauty planning assistant.\n"]}
                    typeSpeed={50}
                  />
                </h1>
                <p className="mb-1x">{"Experience the pinnacle of Korean cosmetic solutions. With our curated picks and industry-leading experts, your transformation begins here."}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/contact">
                    <div id="button_h" className="ac_btn btn">
                      Let's get started
                      <div className="ring one"></div>
                      <div className="ring two"></div>
                      <div className="ring three"></div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
