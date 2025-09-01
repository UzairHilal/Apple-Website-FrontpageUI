import {
  PerspectiveCamera,
  View,
  OrbitControls,
  Html,
} from "@react-three/drei";
import * as THREE from "three";
import IPhone from "./IPhone";
import Lights from "./Lights";
import { Suspense } from "react";

const ModelView = ({ index, item, groupRef, gsapType, size, controlRef }) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full cursor-grab absolute h-full ${
        index == 2 ? "right-[-100%]" : ""
      }`}
    >
      <Lights />
      <ambientLight intensity={5} />

      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
      />

      <group
        ref={groupRef}
        name={`${index === 1} ? 'small' : 'large'`}
        position={[0, 0, 0]}
      >
        <Suspense
          fallback={
            <Html>
              <p>Loading...</p>
            </Html>
          }
        >
          <IPhone
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
