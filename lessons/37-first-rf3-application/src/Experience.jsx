import { useThree, extend, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js'

extend({ OrbitControls })

export default function Experience() {
    const { camera, gl } = useThree()

    const cubeRef = useRef()

    useFrame((state, delta) => {
        cubeRef.current.rotation.y += delta
    })

    return (
        <>
            <orbitControls args={ [ camera, gl.domElement ] } />

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