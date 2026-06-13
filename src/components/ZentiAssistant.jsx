import { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, ContactShadows, Environment } from "@react-three/drei";
import * as THREE from "three";

function Model({ onLoad }) {
  const { scene } = useGLTF("/models/zenti.glb");
  const group = useRef();

  const mouseTarget = useRef({ x: 0, y: 0 });
  const mouseCurrent = useRef({ x: 0, y: 0 });
  const scaleTarget = useRef(1);
  const scaleCurrent = useRef(1);
  const clickBounce = useRef(0);
  const elapsed = useRef(0);

  useEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z);
    scene.position.sub(center);
    if (maxDim > 0) scene.scale.setScalar(2.4 / maxDim);
    scene.traverse((child) => {
      if (child.isMesh) child.frustumCulled = false;
    });
    setTimeout(() => onLoad(), 200);
  }, [scene, onLoad]);

  useEffect(() => {
    const handleMouse = (e) => {
      mouseTarget.current = {
        x: ((e.clientX / window.innerWidth) * 2 - 1) * 0.12,
        y: (-(e.clientY / window.innerHeight) * 2 + 1) * 0.08,
      };
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useFrame((_, delta) => {
    if (!group.current) return;
    elapsed.current += delta;

    group.current.position.y = Math.sin(elapsed.current * 1.4) * 0.025;
    group.current.rotation.z = Math.sin(elapsed.current * 0.7) * 0.006;

    mouseCurrent.current.x +=
      (mouseTarget.current.x - mouseCurrent.current.x) * delta * 2.5;
    mouseCurrent.current.y +=
      (mouseTarget.current.y - mouseCurrent.current.y) * delta * 2.5;
    group.current.rotation.x = mouseCurrent.current.y;
    group.current.rotation.y = mouseCurrent.current.x;

    scaleCurrent.current +=
      (scaleTarget.current - scaleCurrent.current) * delta * 5;
    const s = scaleCurrent.current * (1 + clickBounce.current * 0.1);
    group.current.scale.setScalar(Math.max(0.01, s));

    if (clickBounce.current > 0) {
      clickBounce.current = Math.max(0, clickBounce.current - delta * 2.5);
    }
  });

  return (
    <group
      ref={group}
      onPointerEnter={() => { scaleTarget.current = 1.12; }}
      onPointerLeave={() => { scaleTarget.current = 1; }}
      onPointerDown={() => {
        clickBounce.current = 1;
        scaleTarget.current = 0.9;
      }}
      onPointerUp={() => { scaleTarget.current = 1.12; }}
    >
      <primitive object={scene} />
    </group>
  );
}

function LoadingPlaceholder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-8 h-8 rounded-full border-2 border-zt-primary/20 border-t-zt-primary animate-spin" />
    </div>
  );
}

export default function ZentiAssistant() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="fixed bottom-32 right-6 z-40 w-[130px] h-[130px] md:w-[160px] md:h-[160px] pointer-events-none animate-fade-in">
      <div className="relative w-full h-full pointer-events-auto">
        {!loaded && <LoadingPlaceholder />}
        <Canvas
          camera={{ position: [0, 0.3, 3.5], fov: 30 }}
          dpr={[1, 2]}
          gl={{
            alpha: true,
            antialias: true,
            powerPreference: "high-performance",
          }}
          style={{ width: "100%", height: "100%" }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[4, 5, 4]} intensity={1.0} />
          <directionalLight position={[-3, 2, -3]} intensity={0.5} />
          <Environment preset="studio" />
          <Suspense fallback={null}>
            <Model onLoad={() => setLoaded(true)} />
            <ContactShadows
              position={[0, -0.3, 0]}
              opacity={0.25}
              scale={1.8}
              blur={3}
              far={0.5}
              color="#111418"
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
