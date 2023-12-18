import FirstPortfolio from "../assets/FirstPortfolio.mp4";
import Travel from "../assets/Travel.mp4";
import PDS from "../assets/PDS.mp4";

const ProjectVideos = () => {
  return (
    <div>
      <h4 className="text-2xl font-poppins font-semibold">
        My First Portfolio - React JS
      </h4>
      <p className="mt-2 text-slate-500">
        Developed a web application that showcases my ability to learn new
        technologies after first exposed to reactjs, vite and tailwindcss.
        <br />
        Source Code:
        <a
          href="https://github.com/vanguyen333/mysiteO"
          className="text-blue-500"
        >
          Click here!
        </a>
      </p>
      <video
        className="py-10"
        src={FirstPortfolio}
        controls="controls"
        autoPlay="true"
      />
      <h4 className="text-2xl font-poppins font-semibold">
        Putuk Truno Camp Area - Next JS Web Aplication
      </h4>
      <p className="mt-2 text-slate-500">
        It's the first web application developed using NextJS that I learned
        from a wonderful tutorial by <strong>Adrian Hajdin</strong> <br />{" "}
        Source Code:{" "}
        <a
          href="https://github.com/vanguyen333/NextJS"
          className="text-blue-500"
        >
          Click here!
        </a>
      </p>
      <video
        className="py-10"
        src={Travel}
        controls="controls"
        autoPlay="true"
      />
      <h4 className="text-2xl font-poppins font-semibold">
        Practical Driving School - React Web
      </h4>
      <p className="mt-2 text-slate-500">
        Live Link:{" "}
        <a href="https://practicaldrivingschool.com/" className="text-blue-500">
          click Here!
        </a>
      </p>
      <video className="py-10" src={PDS} controls="controls" autoPlay="true" />
    </div>
  );
};

export default ProjectVideos;
