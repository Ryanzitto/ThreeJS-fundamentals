"use client";
import { Canvas } from "@react-three/fiber";
import Cube from "./components/Cube";
import Sphere from "./components/Sphere";
import { OrbitControls } from "@react-three/drei";
import Text from "./components/TextComponent";
import AnimatedSphere from "./components/AnimatedSphere";
import Mage from "./components/Mage";
export default function Home() {
  return (
    <main className="flex flex-col items-center custom-bg">
      <Text />
      <div className="w-full h-full flex-col">
        <div className="w-full h-[500px] flex">
          <Canvas className="">
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Cube />
          </Canvas>
        </div>
        <div className="w-full h-[500px] flex">
          <Canvas className="">
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Sphere />
          </Canvas>
        </div>
        <div className="w-full h-[500px] flex">
          <Canvas className="">
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <AnimatedSphere />
          </Canvas>
        </div>
        <div className="w-full h-[500px] flex ">
          <Canvas className="">
            <OrbitControls enableZoom={false} autoRotate={true} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <Mage />
          </Canvas>
        </div>
      </div>
    </main>
  );
}
