import React from "react";
import { hightlightsSlides } from "../constants";

const VideoCarousel = () => {
  return (
    <div className="flex items-center">
      {hightlightsSlides.map((list) => (
        <div key={list.id} id="slider" className="sm:pr-20 pr-10">
          {/* <div key={list.id} className="sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh] "> */}
            <div className="sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh] rounded-3xl bg-black flex justify-center">
              <video id="video" muted playsInline={true} preload="auto">
                <source src={list.video} type="video/mp4" />
              </video>
            </div>
          {/* </div> */}
        </div>
      ))}
    </div>
  );
};

export default VideoCarousel;
