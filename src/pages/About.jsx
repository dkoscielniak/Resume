import React from "react";
import "../styles/About.css";
import Floodlight from "../Images/floodlight.jpg";
import Coding from "../Images/Coding.png";
import Sports from "../Images/sports.jpg";
import Language from "../Images/Language.jpg";
import Cards from "../Images/Cards.jpg";
import Vegas from "../Images/Vegas.jpg";

function About() {
  return (
    <div>
      <div class="parent px-4 py-4 my-1 text-center">
        <img
          class="imgChild border d-block mx-auto mt-2"
          src={Floodlight}
          alt=""
        />
        <h1 class="header display-5 fw-bold">A Little Bit of Who I am</h1>
        <div class="text mx-auto">
          <p class="mb-4">
            Balancing my active lifestyle with my intellectual pursuits keeps me
            energized and inspired every day.
          </p>
        </div>
      </div>
      <div className="container-bg">
        <div class="container col-xxl-8 px-4 py-4">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="pb-4 imgContainerLeft col-10 col-sm-8 col-lg-6">
              <img
                src={Coding}
                class="aboutImgRight d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="50vh"
                loading="lazy"
              />
            </div>

            {/* Interest and Hobbies */}

            <div class="heading-title col-lg-6">
              <h1 class="sub-title display-5 fw-bold lh-1 my-3">
                A Curious Developer Who Brings Ideas to Life Through Code
              </h1>
              <p>
                My passion for coding fuels my curiosity for problem-solving,
                and I enjoy the challenge of tackling complex issue through
                programming.
              </p>
              {/* <div class="d-grid gap-2 d-md-flex justify-content-md-center">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Primary
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container-bg">
        <div class="container col-xxl-8 px-4 py-4">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            {/* Interest and Hobbies */}

            <div class="heading-title col-lg-6">
              <h1 class="sub-title display-5 fw-bold lh-1 my-3">
                A Relentless Athlete Who gives it their all
              </h1>
              <p>
                I am an individual who thrives on staying active, whether it's
                going to the gym or playing a variety of different sports.
              </p>
              {/* <div class="d-grid gap-2 d-md-flex justify-content-md-center">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Primary
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div> */}
            </div>
            <div class="pb-4 imgContainerRight col-10 col-sm-8 col-lg-6">
              <img
                src={Sports}
                class="aboutImgLeft d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-bg">
        <div class="container col-xxl-8 px-4 py-4">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="pb-4 imgContainerLeft col-10 col-sm-8 col-lg-6">
              <img
                src={Language}
                class="aboutImgRight d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>

            {/* Interest and Hobbies */}

            <div class="heading-title col-lg-6">
              <h1 class="sub-title display-5 fw-bold lh-1 my-3">
                A Linguistic Adventurer Who Unlocks New Worlds with Every
                Language
              </h1>
              <p>
                I also have a love for languages and spend time learning new
                ones, which enriches my understanding of different cultures and
                enhances my communication skills.
              </p>
              {/* <div class="d-grid gap-2 d-md-flex justify-content-md-center">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Primary
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div> */}
            </div>
          </div>
        </div>
      </div>

      <div className="container-bg">
        <div class="container col-xxl-8 px-4 py-4">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            {/* Interest and Hobbies */}

            <div class="heading-title col-lg-6">
              <h1 class="sub-title display-5 fw-bold lh-1 my-3">
                An Ace of Strategy, Always One Step Ahead in the Game
              </h1>
              <p>
                In my downtime, you can often find me immeresed in card
                collecting and playing, appreciating the game design and
                artistry behind each piece.
              </p>
              {/* <div class="d-grid gap-2 d-md-flex justify-content-md-center">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Primary
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div> */}
            </div>
            <div class="pb-4 imgContainerRight col-10 col-sm-8 col-lg-6">
              <img
                src={Cards}
                class="aboutImgLeft d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container-bg mb-1">
        <div class="container col-xxl-8 px-4 py-4">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="pb-4 imgContainerLeft col-10 col-sm-8 col-lg-6">
              <img
                src={Vegas}
                class="aboutImgRight d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>

            {/* Interest and Hobbies */}

            <div class="heading-title col-lg-6">
              <h1 class="sub-title display-5 fw-bold lh-1 my-3">
                The Editor Who Turns Ordinary Moments into Extraordinary Visuals
              </h1>
              <p>
                I love expressing my creativity through video and phtoo editing,
                transforming moments into visually stunning stories.
              </p>
              {/* <div class="d-grid gap-2 d-md-flex justify-content-md-center">
              <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
                Primary
              </button>
              <button
                type="button"
                class="btn btn-outline-secondary btn-lg px-4"
              >
                Default
              </button>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

{
  /* <p class="lead mb-4">
          My passion for coding fuels my curiosity for problem-solving, and I
          enjoy the challenge of tackling complex issue through programming. I
          am also an enthusiastic individual who thrives on staying active,
          whether it's going to the gym or playing sports. In my downtime, you
          can often find me immeresed in card collecting and playing,
          appreciating the game design and artistry behind each piece. I also
          have a love for languages and spend time learning new ones, which
          enriches my understanding of different cultures and enhances my
          communication skills. Additionally, I love expressing my creativity
          through video and phtoo editing, transforming moments into visually
          stunning stories. Balancing my active lifestyle with my intellectual
          pursuits keeps me energized and inspired every day!
        </p> */
}
