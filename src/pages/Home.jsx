import React from "react";
import "../styles/Home.css";
import Headshot from "../Images/headshot.jpg";
import envelope from "../Images/envelope.svg";

function Home() {
  return (
    <div className="home mt-1">
      {/* about section */}
      <div className="about">
        <img className="framed" src={Headshot} width="350px" alt="" />
        <h2>Hi, My name is Damian</h2>
        <div className="prompt">
          <p className="description">
            A motivated person with a passion for learning and creating.
          </p>
          {/* <LinkedInIcon />
          <EmailIcon />
          <GithubIcon /> */}
        </div>
      </div>
      {/* skills section */}
      <div className="skills">
        <h1 className="title">Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS, NPM, BootStrap</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, PostgreSQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python</span>
          </li>
        </ol>
      </div>

      {/* contact section */}

      <div className="contact mb-1">
        <h1 className="contactTitle">Contact</h1>
        <div class="container">
          <div class="row align-items-stretch justify-content-center no-gutters">
            <div class="col-lg-10">
              <div class="form h-100 contact-wrap px-5">
                <img
                  class="mail d-block mx-auto mb-4"
                  src={envelope}
                  alt=""
                  width="100"
                  height="75"
                />
                <form
                  class="mb-5"
                  method="post"
                  id="contactForm"
                  name="contactForm"
                  novalidate="novalidate"
                >
                  <div class="row">
                    <div class="col-md-6 form-group mb-3">
                      <label for="" class="text-secondary col-form-label">
                        Name *
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        id="name"
                        placeholder="Your name"
                      />
                    </div>
                    <div class="col-md-6 form-group mb-3">
                      <label for="" class="text-secondary col-form-label">
                        Email *
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 form-group mb-3">
                      <label for="budget" class="text-secondary col-form-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Your subject"
                      />
                    </div>
                  </div>
                  <div class="row mb-5">
                    <div class="col-md-12 form-group mb-3">
                      <label
                        for="message"
                        class="text-secondary col-form-label"
                      >
                        Message *
                      </label>
                      <textarea
                        class="form-control"
                        name="message"
                        id="message"
                        cols="30"
                        rows="4"
                        placeholder="Write your message"
                      ></textarea>
                    </div>
                  </div>
                  <div class="row justify-content-center">
                    <div class="maxWidth col-md-3 form-group text-center">
                      <input
                        type="button"
                        value="Send Message"
                        class="btn btn-block btn-secondary rounded-3 py-2 px-4"
                      />
                      <span class="submitting"></span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
