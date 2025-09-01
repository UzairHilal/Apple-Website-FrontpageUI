import { useRef, useState, useEffect } from "react";
import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const firstSpanRef = useRef([]);
  const secondSpanRef = useRef([]);

  const [video, setVideo] = useState({
    isEndOfVideo: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setloadedData] = useState([]);

  const { isEndOfVideo, startPlay, videoId, isLastVideo, isPlaying } = video;

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 1,
      ease: "power2.inOut",
    });
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [videoId, isEndOfVideo]);

  useEffect(() => {
    let currentProgress = 0;

    if (secondSpanRef.current[videoId]) {
      let anim = gsap.to(secondSpanRef.current[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if (progress != currentProgress) {
            currentProgress = progress;

            gsap.to(firstSpanRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });

            gsap.to(secondSpanRef.current[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },

        onComplete: () => {
          if (isPlaying) {
            gsap.to(firstSpanRef.current[videoId], {
              width: "12px",
            });
          }
        },
      });

      if (videoId === 0) {
        anim.restart();
        gsap.to("#secondSpan", {
          backgroundColor: "#afafaf",
        });
      }

      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      };

      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay]);

  useEffect(() => {
    if (loadedData.length >= 3) {
      if (isPlaying) {
        videoRef.current[videoId].play();
      } else {
        videoRef.current[videoId].pause();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleLoadedMetadata = (e) => {
    setloadedData((pre) => [...pre, e]);
  };

  const handleProgress = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((pre) => ({
          ...pre,
          isEndOfVideo: true,
          videoId: i + 1,
        }));
        break;
      case "video-last":
        setVideo((pre) => ({
          ...pre,
          isLastVideo: true,
        }));
        break;
      case "pause":
        setVideo((pre) => ({
          ...pre,
          isPlaying: !pre.isPlaying,
        }));
        break;
      case "replay":
        setVideo((pre) => ({
          ...pre,
          isLastVideo: false,
          videoId: 0,
        }));
        break;
      case "play":
        setVideo((pre) => ({
          ...pre,
          isPlaying: !pre.isPlaying,
        }));
        break;
      default:
        return video;
    }
  };

  return (
    <>
      <div className="flex items-center ">
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="sm:pr-20 pr-10">
            <div className="sm:w-[70vw] w-[88vw] md:h-[70vh] sm:h-[50vh] h-[35vh] rounded-3xl bg-black flex justify-center relative overflow-hidden">
              <video
                id="video"
                muted
                playsInline={true}
                preload="auto"
                ref={(el) => (videoRef.current[i] = el)}
                className={`
                  pointer-events-none
                  ${list.id === 1 && 'w-[70vw] md:h-[79vh] md:pb-12'}
                  `}
                onPlay={() => {
                  setVideo((prevVid) => ({
                    ...prevVid,
                    isPlaying: true,
                  }));
                }}
                onEnded={() =>
                  i !== 3
                    ? handleProgress("video-end", i)
                    : handleProgress("video-last", i)
                }
                onLoadedMetadata={(e) => {
                  handleLoadedMetadata(i, e);
                }}
              >
                <source src={list.video} type="video/mp4" />
              </video>
            </div>
  

            <div className="absolute top-12 left-[5%]z-10">
              {list.textLists.map((text) => (
                <div key={text}>
                  <p className="text-xl font-medium md:text-2xl">{text}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex justify-center mt-10">
        <div className="flex justify-center items-center px-7 py-5 bg-gray-300 rounded-full">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              ref={(e) => (firstSpanRef.current[i] = e)}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
            >
              <span
                id="secondSpan"
                className="absolute h-full w-full rounded-full"
                ref={(e) => (secondSpanRef.current[i] = e)}
              />
            </span>
          ))}
        </div>

        <button>
          <img
            className="bg-gray-300 p-4 ml-4 rounded-full flex justify-center items-center"
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={
              isLastVideo
                ? () => handleProgress("replay")
                : isPlaying
                ? () => handleProgress("pause")
                : () => handleProgress("play")
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
