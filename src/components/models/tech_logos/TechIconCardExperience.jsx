import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState, Suspense } from "react";
import * as THREE from "three";
import { useInView } from "react-intersection-observer";

const TechIconCardExperience = ({ model }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const scene = useGLTF(model.modelPath);
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh) {
          if (child.name === "Object_5") {
            child.material = new THREE.MeshStandardMaterial({ color: "white" });
          }
        }
      });
    }
    setIsLoaded(true);
  }, [scene, model.name]);

  // Performance settings
  const performanceSettings = {
    dpr: 2,
    shadows: false, // Still keep shadows off for performance, but dpr and antialias high
    antialias: true,
    powerPreference: "high-performance"
  };

  if (!isLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-pulse bg-gray-300 rounded-lg w-16 h-16"></div>
      </div>
    );
  }

  return (
    <div ref={ref} style={{ width: '100%', height: '100%' }}>
      {inView ? (
        <Canvas
          dpr={performanceSettings.dpr}
          shadows={performanceSettings.shadows}
          style={{ background: 'transparent' }}
          gl={{ 
            antialias: performanceSettings.antialias,
            powerPreference: performanceSettings.powerPreference,
            alpha: true,
            stencil: false,
            depth: true
          }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <spotLight
            position={[10, 15, 10]}
            angle={0.3}
            penumbra={1}
            intensity={2}
          />
          <Environment preset="city" background={false} />
          <Suspense fallback={null}>
            <Float speed={5.5} rotationIntensity={2.5} floatIntensity={0.9}>
              <group scale={model.scale} rotation={model.rotation}>
                <primitive object={scene.scene} />
              </group>
            </Float>
          </Suspense>
          <OrbitControls enableZoom={false} />
        </Canvas>
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-black/80">
          <span className="loader" />
        </div>
      )}
    </div>
  );
};

export default TechIconCardExperience;
