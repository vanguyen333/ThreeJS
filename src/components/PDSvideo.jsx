import React, { Component } from "react";
import PDS from "../assets/PDS.mp4";

const PDSvideo = () => {
  return (
    <div>
      <video
        className="py-4"
        src={PDS}
        width="600"
        height="300"
        controls="controls"
        autoplay="true"
      />
    </div>
  );
};

export default PDSvideo;
