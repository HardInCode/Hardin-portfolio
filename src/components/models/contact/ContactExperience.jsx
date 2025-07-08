import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useInView } from "react-intersection-observer";
import Computer from "./Computer";

const ContactExperience = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <div ref={ref} style={{ width: '100%', height: '100%' }}>
      {inView ? (
        <Canvas shadows camera={{ position: [0, 3, 7], fov: 45 }}>
          <ambientLight intensity={0.7} color="#fff" />
          <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />
          <directionalLight
            position={[5, 9, 1]}
            castShadow
            intensity={2.5}
            color="#ffd9b3"
          />
          <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
          />
          <group scale={[1, 1, 1]}>
            <mesh
              receiveShadow
              position={[0, -1.5, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            >
              <planeGeometry args={[30, 30]} />
              <meshStandardMaterial 
                color="#434659"
                transparent={true}
                opacity={0.9}
                roughness={0.8}
                metalness={0.1}
              />
            </mesh>
          </group>
          <group scale={0.03} position={[0, -1.49, -2]} castShadow>
            <Computer />
          </group>
        </Canvas>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-black/80">
          <span className="loader" />
        </div>
      )}
    </div>
  );
};

export default ContactExperience;
