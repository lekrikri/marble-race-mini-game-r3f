import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Trophy(props) {
  const { nodes, materials } = useGLTF('./trophy.glb');
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI / 2, -0.1, 0]} scale={5.79}>
            <mesh
              castShadow
              geometry={nodes.Object_4.geometry}
              material={materials.gold}
            />
            <mesh
              castShadow
              geometry={nodes.Object_5.geometry}
              material={materials.grey}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('./trophy.glb');
