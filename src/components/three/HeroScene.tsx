import { useRef } from 'react'
import { Canvas, useFrame, type ThreeElements } from '@react-three/fiber'
import { RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

const dark = '#122635'
const edge = '#31526a'
const aqua = '#7ce0d1'
const orange = '#eea476'

function Box(props: ThreeElements['mesh'] & { size: [number, number, number]; color: string }) {
  const { size, color, ...rest } = props
  return (
    <mesh {...rest}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} metalness={0.35} roughness={0.45} />
    </mesh>
  )
}

function Workstation() {
  const group = useRef<THREE.Group>(null)
  useFrame(({ pointer, invalidate }, delta) => {
    if (!group.current) return
    const factor = Math.min(delta * 5, 0.2)
    const targetY = -0.24 + pointer.x * 0.2
    const targetX = pointer.y * 0.07
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, factor)
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, factor)
    if (
      Math.abs(group.current.rotation.y - targetY) + Math.abs(group.current.rotation.x - targetX) >
      0.002
    )
      invalidate()
  })
  return (
    <group ref={group} rotation={[0.1, -0.24, 0]}>
      {/* Raised hardware platform grounds the scene without a textured model. */}
      <RoundedBox args={[5.8, 0.16, 3.35]} radius={0.08} position={[0, -1.13, 0]}>
        <meshStandardMaterial color="#152d3b" metalness={0.25} roughness={0.55} />
      </RoundedBox>
      <Box
        size={[3.5, 0.1, 1.5]}
        color={edge}
        position={[-0.45, -0.94, 0.45]}
        rotation={[0.08, 0, 0]}
      />
      <Box
        size={[3.42, 0.02, 1.38]}
        color={dark}
        position={[-0.45, -0.875, 0.45]}
        rotation={[0.08, 0, 0]}
      />
      <Box
        size={[3.46, 2.18, 0.11]}
        color={edge}
        position={[-0.45, 0.15, -0.22]}
        rotation={[-0.05, 0, 0]}
      />
      <Box
        size={[3.28, 1.98, 0.015]}
        color="#07151d"
        position={[-0.45, 0.15, -0.15]}
        rotation={[-0.05, 0, 0]}
      />
      <Box size={[3.05, 0.035, 0.01]} color="#28485a" position={[-0.45, 0.96, -0.13]} />
      <Box size={[1.15, 0.042, 0.01]} color={aqua} position={[-1.34, 0.96, -0.11]} />
      <Box size={[1.85, 0.04, 0.01]} color="#4a8293" position={[-0.97, 0.68, -0.1]} />
      <Box size={[1.27, 0.04, 0.01]} color="#4a8293" position={[-1.26, 0.48, -0.09]} />
      <Box size={[2.4, 0.04, 0.01]} color="#4a8293" position={[-0.7, 0.27, -0.08]} />
      <Box size={[1.56, 0.04, 0.01]} color={orange} position={[-1.12, 0.06, -0.07]} />
      <Box size={[2.05, 0.04, 0.01]} color="#4a8293" position={[-0.87, -0.15, -0.06]} />
      <Box size={[0.8, 0.04, 0.01]} color={aqua} position={[-1.49, -0.36, -0.05]} />
      <Box size={[3.08, 0.02, 0.01]} color="#254858" position={[-0.45, -0.61, -0.03]} />
      {/* Server stack: each illuminated port represents support infrastructure. */}
      {[0, 1, 2, 3].map((i) => (
        <group key={i} position={[2.15, -0.78 + i * 0.48, -0.35]}>
          <RoundedBox args={[1.05, 0.39, 0.8]} radius={0.04}>
            <meshStandardMaterial color={dark} metalness={0.55} roughness={0.34} />
          </RoundedBox>
          <Box size={[0.66, 0.02, 0.01]} color="#426276" position={[-0.09, 0.04, 0.41]} />
          <Box size={[0.45, 0.02, 0.01]} color="#426276" position={[-0.19, -0.05, 0.41]} />
          <mesh position={[0.39, 0.015, 0.42]}>
            <sphereGeometry args={[0.04, 8, 8]} />
            <meshBasicMaterial color={i === 2 ? orange : aqua} />
          </mesh>
        </group>
      ))}
      <mesh position={[2.15, 1.48, -0.35]}>
        <octahedronGeometry args={[0.15]} />
        <meshBasicMaterial color={aqua} />
      </mesh>
      <mesh position={[2.15, 1.48, -0.35]}>
        <sphereGeometry args={[0.38, 16, 16]} />
        <meshBasicMaterial color={aqua} transparent opacity={0.09} />
      </mesh>
      <mesh position={[-2.65, 1.12, 0]}>
        <octahedronGeometry args={[0.08]} />
        <meshBasicMaterial color={orange} />
      </mesh>
    </group>
  )
}

/** Low-poly workstation and server cluster; no external model or texture requests. */
export default function HeroScene() {
  return (
    <div className="webgl-layer">
      <Canvas
        camera={{ position: [0, 0.45, 7.9], fov: 40 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: 'low-power' }}
        frameloop="demand"
      >
        <ambientLight intensity={1.45} />
        <directionalLight position={[2, 5, 6]} intensity={3} color="#d0fff7" />
        <pointLight position={[-3, 1, 2]} intensity={18} distance={7} color="#ce926f" />
        <Workstation />
      </Canvas>
    </div>
  )
}
