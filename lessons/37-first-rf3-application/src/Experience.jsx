import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Experience() {
    const cubeRef = useRef()

    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta
    })

    return (
        <>
            <group>
                <mesh position-x={ -2 }>
                    <sphereGeometry />
                    <meshBasicMaterial color="orange" />
                </mesh>

                <mesh ref={ cubeRef } rotation-y={ Math.PI * 0.23 } position-x={ 3 } scale={ 1.5 }>
                    <boxGeometry scale= { 1.5 } />
                    <meshBasicMaterial color="mediumpurple" />
                </mesh>
            </group>

                <mesh position-y={ -1 } rotation-x={ -Math.PI * 0.5 } scale={ 10 }>
                    <planeGeometry />
                    <meshBasicMaterial color="greenyellow" />
                </mesh>
        </>     
    )
}