"use client";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
export default function Home() {
  return (
    <main className="flex flex-col items-center h-screen w-screen custom-bg">
      <div className="w-full h-full flex">
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
          <color attach="background" args={["#00ffdd"]} />
          <Experience />
        </Canvas>
      </div>
    </main>
  );
}
