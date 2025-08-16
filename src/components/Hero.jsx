import { useState, useEffect } from "react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handlesetVideoSrc = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handlesetVideoSrc);

    return () => {
      window.removeEventListener("resize", handlesetVideoSrc);
    };
  }, []);

  useGSAP(() => {
    gsap.to('#hero-title', {opacity: 1, delay: 2.2});
    gsap.to('#cta', {opacity: 1, y: -50, delay: 2.2});

  }, []);

  return (
    <section className="w-full h-[95vh] bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero-title"
          className="text-gray-100
            font-semibold text-3xl text-center opacity-1 max-md:mb-10 opacity-0"
        >
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            muted
            playsInline={true}
            autoPlay
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center flex-center translate-y-20 opacity-0"
      >
        <a
          href="highlights"
          className="px-5 py-2 my-5 rounded-3xl bg-blue hover:bg-transparent hover:border hover:text-blue hover:border-blue"
        >
          Buy
        </a>
        <p className="text-xl font-normal">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
