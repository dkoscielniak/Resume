import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#222">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: "#222", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            St. Joan of Arc Catholic Secondary School, Mississauga, Ontario
          </h3>
          <p>High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2024"
          iconStyle={{ background: "#222", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            University of Toronto, Toronto, Ontario
          </h3>
          <p>Bachelor of Science in Computer Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019 - 2022"
          iconStyle={{ background: "#6c757d", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Lead Facilitator Skills Development Program - Oakville Soccer Club
          </h3>
          <p>
            Managed a pool of young coaches in overseeing and coaching hundreds
            of recreational players. Conducted performance reviews, feedback
            sessions, and created improvement plans.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023 - 2024"
          iconStyle={{ background: "#222", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Udemy, Online BootCamp
          </h3>
          <p>The Complete Web Development BootCamp</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - present"
          iconStyle={{ background: "#6c757d", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Head Coach Advanced Development Program - Oakville Soccer Club
          </h3>
          <p>
            Coached a team of 50 girls/boys for one of the biggest municipal
            soccer teams in Canada, playing in a high-performance league with
            Ontario-based teams for multiple seasons.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
