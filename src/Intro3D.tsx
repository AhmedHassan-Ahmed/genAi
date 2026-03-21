import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useMemo, useEffect } from "react";
import * as THREE from "three";
import { Float, Stars } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useTheme } from "./theme";

/* =========================
    BRAIN HEMISPHERE
========================= */
function BrainMesh({ color }: { color: string }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.003;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2.5, 64, 64, 0, Math.PI]} />
      <meshStandardMaterial
        color={color}
        wireframe
        emissive={color}
        emissiveIntensity={1.5}
        transparent
        opacity={0.5}
      />
    </mesh>
  );
}

/* =========================
    NEURAL WAVE SHADER
========================= */


function NeuralWave({ color }: { color: string }) {
  // ✅ Properly type mesh with ShaderMaterial
  const ref = useRef<
    THREE.Mesh<THREE.PlaneGeometry, THREE.ShaderMaterial>
  >(null);

  // ✅ Memoized shader (typed correctly)
  const shader = useMemo(
    () => ({
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(color) }, // ✅ use color
      },
      vertexShader: `
        uniform float uTime;
        varying vec2 vUv;

        void main() {
          vUv = uv;
          vec3 pos = position;

          pos.z += sin(pos.x * 3.0 + uTime * 2.0) * 0.3;
          pos.z += cos(pos.y * 3.0 + uTime * 2.0) * 0.3;

          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 uColor;
        varying vec2 vUv;

        void main() {
          float glow = smoothstep(0.0, 1.0, vUv.y);
          gl_FragColor = vec4(uColor, glow * 0.3);
        }
      `,
      transparent: true,
    }),
    [color] // ✅ update when color changes
  );

  // ✅ Safe + typed animation
  useFrame((state) => {
    if (!ref.current) return;

    ref.current.material.uniforms.uTime.value =
      state.clock.elapsedTime;
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[10, 10, 64, 64]} />
      <shaderMaterial {...shader} />
    </mesh>
  );
}

/* =========================
    TRANSFORMER FLOW
========================= */
function DataFlow({ color }: { color: string }) {
  const points = useMemo(() => {
    return Array.from({ length: 20 }).map(() => ({
      start: new THREE.Vector3(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        -2
      ),
      end: new THREE.Vector3(
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        2
      ),
    }));
  }, []);

  return (
    <>
      {points.map((p, i) => (
        <FlowLine key={i} start={p.start} end={p.end} color={color} />
      ))}
    </>
  );
}

function FlowLine({
  start,
  end,
  color,
}: {
  start: THREE.Vector3;
  end: THREE.Vector3;
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;

    const t = (state.clock.elapsedTime * 0.5) % 1;
    ref.current.position.lerpVectors(start, end, t);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.08, 8, 8]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
}

/* =========================
    CAMERA MOTION
========================= */
function CameraMotion() {
  useFrame((state) => {
    const t = state.clock.elapsedTime;

    state.camera.position.z = 8 + Math.sin(t * 0.5);
    state.camera.position.y = Math.sin(t * 0.3) * 1;

    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

/* =========================
    MAIN SCENE
========================= */
function Scene({ color }: { color: string }) {
  return (
    <>
      <CameraMotion />

      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} color={color} intensity={2} />

      <Float speed={2} rotationIntensity={1}>
        <BrainMesh color={color} />
      </Float>

      <DataFlow color={color} />

      <NeuralWave color={color} />

      <Stars count={80} />

      <EffectComposer>
        <Bloom intensity={2} />
      </EffectComposer>
    </>
  );
}

/* =========================
    MAIN INTRO
========================= */
export default function Intro3D() {
  const { config, setTheme, setIsAuto } = useTheme();

  useEffect(() => {
    const themes = ["dark", "blue", "red", "light"];
    let i = 0;

    const interval = setInterval(() => {
      setTheme(themes[i % themes.length] as any);
      i++;
    }, 1000);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      setIsAuto(false);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-20 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <Scene color={config.glow} />
      </Canvas>

      <div className="absolute bottom-12 w-full text-center">
        <h1 className="text-5xl md:text-7xl font-black text-white">
          AI CORE
        </h1>
        <p className="text-white/70 mt-2 text-sm tracking-widest">
          Initializing Neural System...
        </p>
      </div>
    </div>
  );
}