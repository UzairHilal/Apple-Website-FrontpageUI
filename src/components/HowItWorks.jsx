import React from "react";
import { chipImg, frameImg, frameVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";
const HowItWorks = () => {
  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "60% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <section className="sm:py-32 py-20 sm:px-10 px-5">
      <div className="me-auto ms-auto relative max-w-[1120px]">
        <div
          id="chip"
          className="flex items-center justify-center w-full my-20"
        >
          <img src={chipImg} alt="A17chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-4xl md:text-7xl font-semibold text-center">
            A17 Pro chip.
            <br /> A monster win for gamming.
          </h2>

          <p className="text-gray text-xl text-center md:text-2xl py-10 font-semibold">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        <div className="mt-10 mb-14 md:mt-20">
          <div className="relative h-full flex items-center justify-center">
            <div className="overflow-hidden pointer-events-none">
              <img
                src={frameImg}
                alt="frame"
                className="relative z-10 bg-transparent"
              />
            </div>
            <div className="absolute overflow-hidden rounded-[40px] w-[95%] h-[90%]">
              <video
                className="poniter-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>
          <p className="text-gray text-center mt-3 font-semibold">
            Honkai: Star Rail
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-24 g_fadeIn items-start justify-between opacity-0 translate-y-20">
          <div className="flex flex-col flex-1">
            <p className="text-gray text-xl md:font-semibold font-normal">
              A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
              <span className="text-white">
                best graphic performance by far
              </span>
              .
            </p>

            <p className="text-gray text-xl md:font-semibold font-normal">
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive.
              </span>
              with incredibly detailed environments and characters.
            </p>
          </div>

          <div className="flex-1 flex justify-center flex-col">
            <p className="text-gray text-xl font-sormal md:font-semibold">
              New
            </p>
            <p className="text-white text-3xl md:text-5xl font-normal md:font-semibold my-2">
              Pro-class GPU
            </p>
            <p className="text-gray text-xl font-normal md:font-semibold">
              with 6 cores
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
