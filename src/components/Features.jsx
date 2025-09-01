import { useGSAP } from "@gsap/react";
import { explore1Img, explore2Img, exploreVideo } from "../utils";
import { animateWithGsap } from "../utils/animations";
import gsap from "gsap";
import { useRef } from "react";

const Features = () => {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause none restart",
        start: "-10% bottom",
      },

      onComplete: () => {
        videoRef.current.play();
      },
    });

    animateWithGsap("#features_title", { y: 0, opacity: 1 });

    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );

    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);
  return (
    <section className="h-full py-20 px-5 sm:py-32 sm:px-10 bg-zinc overflow-hidden">
      <div className="me-auto ms-auto relative max-w-[1120px]">
        <div className="mb-12 w-full">
          <h1
            id="features_title"
            className="text-gray text-3xl font-medium mb-5 md:text-5xl lg:text-6xl lg:mb-0 opacity-0 translate-y-20"
          >
            Explore the full story.
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 pl-24 mb-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">iPhone.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              Forged in titanium.
            </h2>
          </div>

          <div className="flex flex-col items-center justify-center sm:px-10">
            <div className="relative h-[50%] w-full flex items-center">
              <video
                className="w-full h-full object-cover object-center"
                ref={videoRef}
                playsInline
                id="exploreVideo"
                preload="none"
                muted
                autoPlay
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>
            <div className="flex flex-col w-full relative">
              <div className="w-full flex flex-col md:flex-row gap-5 items-center">
                <div className="overflow-hidden h-[50vh] flex-1 ">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    className="w-full h-full object-cover object-center scale-150 opacity-0 g_grow"
                  />
                </div>
                <div className="overflow-hidden h-[50vh] flex-1">
                  <img
                    src={explore2Img}
                    alt="titanium"
                    className="w-full h-full object-cover object-center scale-150 opacity-0 g_grow"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row mt-10 md:mt-16 gap-5">
                <div className="flex-1 flex-center">
                  <p className="text-gray max-w-md text-lg md-text-xl font-semibold g_text opacity-0 translate-y-24">
                    iPhone 15 Pro is{" "}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium
                      design
                    </span>
                    , using the same alloy that spacecrafts use for missions to
                    Mars.
                  </p>
                </div>

                <div>
                  <p className="text-gray max-w-md text-lg md-text-xl font-semibold g_text opacity-0 translate-y-24">
                    Titanium has one of the best strength-to-weight ratios of
                    any metal, making these our{" "}
                    <span className="text-white">
                      lightest Pro models ever.
                    </span>
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
