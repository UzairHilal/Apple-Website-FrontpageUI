import { useEffect, useState, useRef } from "react";
import ModelView from "./ModelView";
import { View } from "@react-three/drei";
import * as THREE from "three";
import { models } from "../constants";
import { sizes } from "../constants";
import { Canvas } from "@react-three/fiber";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsapTimeline } from "../utils/animations";

const Models = () => {
  const [model, setModel] = useState(models[0]);
  const [size, setSize] = useState("small");

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());


  const tl = gsap.timeline();

  useEffect(() => {
    if (size === "large") {
      animateWithGsapTimeline(tl, "#view1", "#view2", {
        transform: "translateX(-100%)",
        duration: 2,
      });
    }
    if (size === "small") {
      animateWithGsapTimeline(tl, "#view1", "#view2", {
        transform: "translateX(0%)",
        duration: 2,
      });
    }
  }, [size, tl]);

  useGSAP(() => {
    gsap.to("#heading", {
      y: 0,
      opacity: 1,
    });
  }, []);

  return (
    <section className="sm:py-32 py-20 sm:px-10 px-5">
      <div className="max-w-[1120px] me-auto ms-auto relative">
        <h1
          id="heading"
          className="text-3xl md:text-5xl lg:text-6xl text-gray lg:mb-0 mb-5 font-medium opacity-0 translate-y-20"
        >
          Take a closer look.
        </h1>

        <div className="mt-5">
          <div className="w-full h-[75vh] overflow-hidden relative">
            <ModelView
              index={1}
              item={model}
              groupRef={small}
              gsapType="view1"
              size={size}
            />
            <ModelView
              index={2}
              item={model}
              groupRef={large}
              gsapType="view2"
              size={size}
            />
            <Canvas
              className=""
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="mx-auto w-full">
            <p className="text-sm font-light mb-5 text-center">{model.title}</p>
            <div className="flex items-center justify-center">
              <ul className="flex items-center justify-center p-4 bg-gray-300 rounded-full">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className={`w-6 h-6 rounded-full mx-2 cursor-pointer`}
                    style={{
                      backgroundColor: item.color[0],
                    }}
                    onClick={() => setModel(item)}
                  ></li>
                ))}
              </ul>

              <button className="flex items-center justify-center ml-3 bg-gray-300 rounded-full p-1 gap-1">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className={`w-10 h-10 flex items-center justify-center 
                      ${
                        size === value
                          ? "bg-white text-black"
                          : "bg-transparent text-white"
                      }

                      text-black rounded-full transition-all`}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Models;
