// https://colorlib.com/preview/#jackson

import React from "react";
// import { Element } from "react-scroll";
import "./styles.css";
import {
  Info,
  Skills,
  Portfolio,
  TimelineInfo,
  AcademicInfo
} from "./info/index";
import {
  InfoCard,
  MenuBar,
  RssInfo,
  SkillItems,
  ResumeItem,
  PortCard,
  Home,
  Timeline,
  NavBar,
  Academic
} from "./components/index";

const App = () => {
  return (
    <div className="App">
      <main className="bodyContainer">
        <header className="navBarHeader">
          <NavBar />
        </header>
        <section className="sideBar">
          <InfoCard className="myinfo" infor={Info} />
          <MenuBar />
          <RssInfo />
          <p>©Copyright ©2020 All rights reserved </p>
        </section>

        <section className="sideInfo">
          <Home className="home" />

          <ResumeItem id="aboutMe" title="about me" subtitle="who am i?">
            <section className="text">
              <p>
                With studies in Graphic Design in Colombia and Integral
                Creativity in Argentina, including more than 10-year experience
                in Graphic & Art Design in Colombia, Argentina, and Sweden, I
                enjoy creating visual concepts and developing strategies that
                place the user as the center of the product development process,
                boosting a strong relationship between the user and the brand
                experience.
              </p>
            </section>
          </ResumeItem>

          <ResumeItem
            id="myExperience"
            title="experience"
            subtitle="my experience"
          >
            {TimelineInfo.map((timelinexp) => (
              <Timeline key={timelinexp.id} {...timelinexp} />
            ))}
          </ResumeItem>

          <ResumeItem id="mySkills" title="my speciality" subtitle="my skills">
            <section className="text">
              <p>
                Create impactful experiences through design. Tons of work
                experience with teammates and clients, developing projects from
                the idea and concept to the execution.
              </p>
            </section>
            {Skills.map((skill) => (
              <SkillItems key={skill.id} {...skill} />
            ))}
          </ResumeItem>

          <ResumeItem
            id="myEducation"
            title="education"
            subtitle="what i studied?"
          >
            {AcademicInfo.map((academic) => (
              <Academic key={academic.id} {...academic} />
            ))}
          </ResumeItem>

          <ResumeItem
            id="myWork"
            title="my work"
            subtitle="this is my portfolio"
          >
            <section className="text"> </section>

            {Portfolio.map((card) => (
              <PortCard key={card.id} {...card} />
            ))}
          </ResumeItem>
          <div name="targetname">point here</div>
        </section>
        {/* <footer className="footer" /> */}
      </main>
    </div>
  );
};

export default App;
