import React, { useRef, useMemo } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";
import { useMediaQuery } from "react-responsive";

export function MyRoom(props) {
  const { nodes, materials } = useGLTF("/models/MyRoom.compressed.glb");
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  
  // // Handle texture loading with error fallback
  // let matcapTexture;
  // try {
  //   matcapTexture = useTexture("/images/textures/mat1.png");
  // } catch (error) {
  //   console.warn("Failed to load matcap texture, using default material");
  //   matcapTexture = null;
  // }
  
  
  // Always call useTexture at the top level (no try/catch)
  const matcapTexture = useTexture("/images/textures/mat1.png");

  // Memoize materials to prevent recreation on every render
  const materialsMemo = useMemo(() => {
    const compMaterial = new THREE.MeshStandardMaterial({
      color: "#fff",
    });

    const pillowMaterial = new THREE.MeshPhongMaterial({
      color: "#3f3b45",
    });

    const chairMaterial = new THREE.MeshPhongMaterial({
      color: "#000",
    });

    const bodyMaterial = matcapTexture 
      ? new THREE.MeshPhongMaterial({ map: matcapTexture })
      : new THREE.MeshPhongMaterial({ color: 0x888888 });

    return { compMaterial, pillowMaterial, chairMaterial, bodyMaterial };
  }, [matcapTexture]);

  // Create individual refs for each emissive object
  const screen1Ref = useRef();
  const screen2Ref = useRef();
  const screen3Ref = useRef();

  return (
    <>
      {/* Render post-processing (bloom) on all devices, but lighter on mobile */}
      <EffectComposer>
        <SelectiveBloom
          selection={[screen1Ref, screen2Ref, screen3Ref]}
          intensity={isMobile ? 0.8 : 2.0}
          luminanceThreshold={isMobile ? 0.2 : 0.1}
          luminanceSmoothing={isMobile ? 0.5 : 0.9}
          blendFunction={BlendFunction.ADD}
        />
      </EffectComposer>
      
      <group {...props} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes.Bed.geometry} material={materials.white} />
        <mesh castShadow receiveShadow geometry={nodes.BedFrame.geometry} material={materials.Wood} />
        <mesh castShadow receiveShadow geometry={nodes.Sheet.geometry} material={materials.Sheet} />
        <mesh
          geometry={nodes.Pillow001.geometry}
          material={materialsMemo.pillowMaterial}
          position={[0.003, 0.051, -0.059]}
        />
        <mesh
          geometry={nodes.WindowCover.geometry}
          material={materials.Shade}
        />
        <mesh
          geometry={nodes.Cylinder.geometry}
          material={materials['book.001']}
        />
        <mesh castShadow receiveShadow geometry={nodes.Poster.geometry} material={materials.Poster} />
        <mesh
          geometry={nodes.Fig001.geometry}
          material={materials['Image.002']}
        />
        <mesh
          geometry={nodes.Fig002.geometry}
          material={materials['Image.001']}
        />
        <mesh castShadow receiveShadow geometry={nodes.Cube001.geometry} material={materials.book} />
        <mesh
          geometry={nodes.stylus001.geometry}
          material={materials.BlackComponent}
        />
        <mesh
          geometry={nodes.Cube002.geometry}
          material={materials['book.002']}
        />
        <mesh
          geometry={nodes.Cube003.geometry}
          material={materials['book.003']}
        />
        <mesh
          geometry={nodes.Cube005.geometry}
          material={materials['book.004']}
        />
        <mesh
          geometry={nodes.Cube009.geometry}
          material={materials['book.005']}
        />
        <mesh castShadow receiveShadow geometry={nodes.DeskLamp.geometry} material={materials.Lamp} />
        <mesh
          geometry={nodes.Medium_Plant.geometry}
          material={materials['Gradient 1']}
          position={[0.042, 0, 0]}
        />
        <mesh
          geometry={nodes.Cylinder014.geometry}
          material={materials.Lamp}
        />
        <mesh
          geometry={nodes.Cylinder015.geometry}
          material={materials['Lamp.001']}
        />
        <mesh
          geometry={nodes.Circle002.geometry}
          material={materials.Lamp}
        />
        <mesh
          geometry={nodes.Cylinder013.geometry}
          material={materials['Lamp.001']}
        />
        <mesh
          geometry={nodes.car_police_base.geometry}
          material={materials.atlas_LPUP}
        />
        <mesh castShadow receiveShadow geometry={nodes.Vert_1.geometry} material={materials.Chair} />
        <mesh
          geometry={nodes.Vert_2.geometry}
          material={materials['Chair.001']}
        />
        <mesh
          geometry={nodes.Vert_3.geometry}
          material={materials['Chair.002']}
        />
        <mesh
          geometry={nodes.Vert_4.geometry}
          material={materials['Chair.003']}
        />
        <mesh
          geometry={nodes.Cube001_1.geometry}
          material={materialsMemo.bodyMaterial}
        />
        <mesh
          geometry={nodes.Cube001_2.geometry}
          material={materialsMemo.bodyMaterial}
        />
        <mesh
          geometry={nodes.Cube001_3.geometry}
          material={materialsMemo.bodyMaterial}
        />
        <mesh
          geometry={nodes.Cube001_4.geometry}
          material={materialsMemo.bodyMaterial}
        />
        
        {/* Fixed: Use different refs for different meshes */}
        <mesh
          ref={screen1Ref}
          geometry={nodes.Cube012.geometry}
          material={materials['EmmisionCuy.001']}
        />
        <mesh
          ref={screen2Ref}
          geometry={nodes.Cube012_1.geometry}
          material={materials['EmmisionCuy.002']}
        />
        
        <mesh castShadow receiveShadow geometry={nodes.Cube019.geometry} material={materials.Image} />
        <mesh
          geometry={nodes.Cube019_1.geometry}
          material={materials.Black}
        />
        <mesh
          geometry={nodes.Mesh077.geometry}
          material={materials.BlackComponent}
        />
        <mesh
          ref={screen3Ref}
          geometry={nodes.Mesh077_1.geometry}
          material={materials.EmmisionCuy}
        />
        <mesh
          geometry={nodes.Scene017.geometry}
          material={materials._10_BROWN_DARK_LPUP}
        />
        <mesh
          geometry={nodes.Scene017_1.geometry}
          material={materials._25_RED_DARKEST_LPUP}
        />
        <mesh
          geometry={nodes.Scene017_2.geometry}
          material={materials._11_BROWN_MEDIUM_LPUP}
        />
        <mesh
          geometry={nodes.Scene017_3.geometry}
          material={materials._13_BROWN_LIGHT_LPUP}
        />
        <mesh
          geometry={nodes.Scene017_4.geometry}
          material={materials._15_BROWN_WHITE_LPUP}
        />
        <mesh
          geometry={nodes.Scene017_5.geometry}
          material={materials._57_BLACK_LPUP}
        />
        <mesh
          geometry={nodes.Scene017_6.geometry}
          material={materials._19_GREY_MEDIUM_LPUP}
        />
        <mesh
          geometry={nodes.Scene017_7.geometry}
          material={materials._30_YELLOW_LPUP}
        />
        <mesh
          geometry={nodes.Scene017_8.geometry}
          material={materials._12_BROWN_LPUP}
        />
        <mesh
          geometry={nodes.Cylinder024.geometry}
          material={materials.Clay_Gray}
        />
        <mesh
          geometry={nodes.Cylinder024_1.geometry}
          material={materials['Clay_Gray.001']}
        />
        <mesh
          geometry={nodes.Cylinder024_2.geometry}
          material={materials['Gradient 2.001']}
        />
        <mesh
          geometry={nodes.Cylinder024_3.geometry}
          material={materials['White Color']}
        />
        <mesh
          geometry={nodes.Scene005.geometry}
          material={materials._23_GREY_WHITE_LPUP}
        />
        <mesh
          geometry={nodes.Scene005_1.geometry}
          material={materials._29_ORANGE_LIGHT_LPUP}
        />
        <mesh
          geometry={nodes.Scene005_2.geometry}
          material={materials._64_GLASS_LPUP}
        />
        <mesh
          geometry={nodes.Scene005_3.geometry}
          material={materials._20_GREY_LPUP}
        />
        <mesh
          geometry={nodes.Scene005_4.geometry}
          material={materials._17_GREY_DARKEST_LPUP}
        />
      </group>
    </>
  );
}

useGLTF.preload("/models/MyRoom.compressed.glb");