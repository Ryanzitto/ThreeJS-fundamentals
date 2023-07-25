import React from "react";
import { TextureLoader } from "three";

export default function Sphere({ props }: any) {
  // Carrega a textura personalizada usando o TextureLoader
  const texture = new TextureLoader().load(
    "https://images.saymedia-content.com/.image/t_share/MTc4NzM1OTc4MzE0MzQzOTM1/how-to-create-cool-website-backgrounds-the-ultimate-guide.png"
  );

  // Retorna o componente do cubo com a textura personalizada aplicada
  return (
    <mesh {...props} rotation={[90, 0, 150]}>
      <sphereGeometry attach="geometry" args={[2, 32, 32]} />
      <meshStandardMaterial attach="material" map={texture} />
      {/* <meshNormalMaterial attach="material" /> */}
    </mesh>
  );
}
