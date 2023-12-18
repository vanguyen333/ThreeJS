import FirstPortfolio from "../assets/FirstPortfolio.mp4";
import Travel from "../assets/Travel.mp4";
import PDS from "../assets/PDS.mp4";

const ProjectVideos = () => {
  return (
    <div>
      <h4 className="text-2xl font-poppins font-semibold">
        My First Portfolio - React JS
      </h4>
      <video
        className="py-10"
        src={FirstPortfolio}
        controls="controls"
        autoPlay="true"
      />
      <h4 className="text-2xl font-poppins font-semibold">
        Putuk Truno Camp Area - Next JS Web Aplication
      </h4>
      <video
        className="py-10"
        src={Travel}
        controls="controls"
        autoPlay="true"
      />
      <h4 className="text-2xl font-poppins font-semibold">
        Practical Driving School - React Web
      </h4>
      <video className="py-10" src={PDS} controls="controls" autoPlay="true" />
    </div>
  );
};

export default ProjectVideos;
