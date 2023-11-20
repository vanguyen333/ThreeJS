import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { skills } from "../constants";
const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Van
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer based in Ottawa, Canada, specializing in technical
          education through hands-on learning and building applications.
        </p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* experience */}
      <div className="py-167">
        <h3>Work Experience</h3>{" "}
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I am a fresh graduate, and a freelandcer building websites for
            clients.
          </p>
        </div>
        {/*to me commented out  */}
        <div mt-12 flex></div>
      </div>
    </section>
  );
};

export default About;
