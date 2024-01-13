import { useFrame } from '@react-three/fiber'

export default function Experience() {

    useFrame(() => {
        console.log('tick')
    })
    
    return (
        <>
            <mesh position-x={ -2 }>
                <sphereGeometry />
                <meshBasicMaterial color="orange" />
            </mesh>
            <mesh rotation-y={ Math.PI * 0.23 } position-x={ 3 } scale={ 1.5 }>
                <boxGeometry scale= { 1.5 } />
                <meshBasicMaterial color="mediumpurple" />
            </mesh>
            <mesh position-y={ -1 } rotation-x={ -Math.PI * 0.5 } scale={ 10 }>
                <planeGeometry />
                <meshBasicMaterial color="greenyellow" />
            </mesh>
        </>     
    )
}