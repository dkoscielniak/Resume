import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import Headshot from "../Images/headshot.jpg";
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div className="home">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </head>
      {/* about section */}
      <div className="about">
        <img className="framed" src={Headshot} width="350px" alt="" />
        <h2>Hi, My name is Damian</h2>
        <div className="prompt">
          <p>A motivated person with a passion for learning and creating.</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      {/* skills section */}
      <div className="skills">
        <h1>Skills</h1>
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

      {/* <Container>
        <Row className="mb-5 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me </h1>
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in Touch</h3>
            <address>
              <strong>Email : Developer@javascript.com</strong>
              <br />
              <br />
              <p>
                <strong>Phone : +647 XXX XXXX</strong>
              </p>
            </address>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                  ></input>
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                  ></input>
                </Col>
              </Row>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
              ></textarea>
            </form>
          </Col>
        </Row>
      </Container> */}

      {/* <section class="contact">
        <div id="contact"></div>

        <div class="bg-dark px-5 pt-5 mt-2">
          <div class="bg-dark px-5 pt-5">
            <h2 class="pb-2 border-bottom border-secondary fw-bold text-white text-center">
              Contact
            </h2>

            <div class="container">
              <div class="row align-items-stretch justify-content-center no-gutters">
                <div class="col-lg-10">
                  <div class="form h-100 contact-wrap p-5">
                    <img
                      class="mail d-block mx-auto mb-4"
                      src="Images/envelope.svg"
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
                          <label
                            for="budget"
                            class="text-secondary col-form-label"
                          >
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
                        <div class="col-md-5 form-group text-center">
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
      </section> */}
      {/* <script
        src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/js/bootstrap.min.js"
        integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
        crossorigin="anonymous"
      ></script> */}
    </div>
  );
}

export default Home;
