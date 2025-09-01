import { explore1Img, explore2Img, exploreVideo } from "../utils";

const Features = () => {

    // setup gsap
  return (
    <section className="h-full py-20 px-5 sm:py-32 sm:px-10 bg-zinc overflow-hidden">
      <div className="me-auto ms-auto relative max-w-[1120px]">
        <div className="mb-12 w-full">
          <h1
            id="features_title"
            className="text-gray text-3xl font-medium mb-5 md:text-5xl lg:text-6xl lg:mb-0"
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
            <div className="">
              <video
                className="w-full h-full"
                playsInline
                id="exploreVideo"
                preload="nane"
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
                    className="w-full h-full object-cover object-center scale-150"
                  />
                </div>
                <div className="overflow-hidden h-[50vh] flex-1">
                  <img
                    src={explore2Img}
                    alt="titanium"
                    className="w-full h-full object-cover object-center scale-150"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row mt-10 md:mt-16 gap-5">
                <div className="flex-1 flex-center">
                  <p className="text-gray max-w-md text-lg md-text-xl font-semibold g_text">
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
                  <p className="text-gray max-w-md text-lg md-text-xl font-semibold g_text">
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
