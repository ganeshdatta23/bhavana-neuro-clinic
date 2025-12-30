'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function BrainModel() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Left hemisphere */}
            <Sphere args={[1, 64, 64]} position={[-0.6, 0, 0]} scale={[0.9, 1, 1.2]}>
                <MeshDistortMaterial
                    color="#ea580c"
                    attach="material"
                    distort={0.4}
                    speed={1.5}
                    roughness={0.4}
                />
            </Sphere>

            {/* Right hemisphere */}
            <Sphere args={[1, 64, 64]} position={[0.6, 0, 0]} scale={[0.9, 1, 1.2]}>
                <MeshDistortMaterial
                    color="#ea580c"
                    attach="material"
                    distort={0.4}
                    speed={1.5}
                    roughness={0.4}
                />
            </Sphere>

            {/* Cerebellum (back lower part) */}
            <Sphere args={[0.5, 32, 32]} position={[0, -0.8, -0.8]} scale={[1.2, 0.8, 0.8]}>
                <MeshDistortMaterial
                    color="#dc2626"
                    attach="material"
                    distort={0.3}
                    speed={1.5}
                    roughness={0.5}
                />
            </Sphere>

            {/* Brain stem */}
            <mesh position={[0, -1.5, -0.3]} rotation={[0, 0, 0]}>
                <cylinderGeometry args={[0.25, 0.35, 0.8, 16]} />
                <MeshDistortMaterial
                    color="#b91c1c"
                    attach="material"
                    distort={0.2}
                    speed={1}
                    roughness={0.6}
                />
            </mesh>
        </group>
    );
}

export function Brain({ style }: { style?: React.CSSProperties }) {
    return (
        <div style={style} className="w-full h-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -5]} intensity={0.5} color="#60a5fa" />
                <BrainModel />
                <OrbitControls
                    enableZoom={true}
                    autoRotate
                    autoRotateSpeed={0.5}
                    enablePan={false}
                    enableDamping
                    dampingFactor={0.05}
                    minDistance={3}
                    maxDistance={8}
                    touches={{ ONE: THREE.TOUCH.ROTATE, TWO: THREE.TOUCH.DOLLY_PAN }}
                />
            </Canvas>
        </div>
    );
}
