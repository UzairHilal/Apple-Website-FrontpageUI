import VideoCarousel from "./VideoCarousel";
import { rightImg, watchImg } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to("#link", { opacity: 1, y: 0, stagger: 0.25, duration: 1 });
  }, []);

  return (
    <section className="bg-zinc w-screen h-full sm:p-32 py-20 sm:px-10 px-5">
      <div className="ml-auto mr-auto  max-w-[1120px]">
        <div className="mb-12 md:flex justify-between">
          <h1
            id="title"
            className="text-gray text-3xl lg:text-6xl md:text-5xl font-medium mb-5 lg:mb-0 opacity-0 translate-y-20"
          >
            Get the highlights.
          </h1>

          <div className="flex gap-5 items-end">
            <p
              id="link"
              className="text-blue text-xl font-normal hover:underline flex items-center opacity-0 translate-y-20 cursor-pointer"
            >
              Watch the film
              <img src={watchImg} alt="watch" className="ml-3" />
            </p>
            <p
              id="link"
              className="text-blue text-xl font-normal hover:underline flex items-center opacity-0 translate-y-20 cursor-pointer"
            >
              Watch the event
              <img src={rightImg} alt="event" className="ml-3" />
            </p>
          </div>
        </div>

        <VideoCarousel />

      </div>
    </section>
  );
};

export default Highlights;
