import FirstPortfolio from "../assets/FirstPortfolio.mp4";
import Travel from "../assets/Travel.mp4";

const ProjectVideos = () => {
  return (
    <div>
      <video
        className="py-4"
        src={FirstPortfolio}
        width="600"
        height="300"
        controls="controls"
        autoPlay="true"
      />
      <video
        className="py-4"
        src={Travel}
        width="600"
        height="300"
        controls="controls"
        autoPlay="true"
      />
    </div>
  );
};

export default ProjectVideos;
