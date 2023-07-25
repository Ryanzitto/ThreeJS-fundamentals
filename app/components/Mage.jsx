/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 mage.gltf --transform 
Files: mage.gltf [37.95MB] > mage-transformed.glb [2.08MB] (95%)
Author: wilsonghm99 (https://sketchfab.com/wilsonghm99)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/the-pumpkin-mage-1d4a203a2aa742faa04cfeab6486ce6e
Title: The Pumpkin Mage
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Mage(props) {
  const { nodes, materials } = useGLTF("/mage-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.head_head_0.geometry}
        material={materials.head}
        position={[0, -1, 0]}
        scale={0.5}
      />
      <mesh
        geometry={nodes.wood_wood_0.geometry}
        material={materials.wood}
        position={[0, -1, 0]}
        scale={0.5}
      />
      <mesh
        geometry={nodes.briefcase_briefcase_0.geometry}
        material={materials.briefcase}
        position={[0, -1, 0]}
        scale={0.5}
      />
      <mesh
        geometry={nodes.clothing1_clothing1_0.geometry}
        material={materials.clothing1}
        position={[0, -1, 0]}
        scale={0.5}
      />
      <mesh
        geometry={nodes.clothing2_clothing2_0.geometry}
        material={materials.clothing2}
        position={[0, -1, 0]}
        scale={0.5}
      />
    </group>
  );
}

useGLTF.preload("/mage-transformed.glb");
