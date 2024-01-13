export default function Experience() {
    return (
        <>
            <mesh rotation-y={ Math.PI * 0.23 } position-x={ 3 } scale={ 1.5 }>
                <boxGeometry scale= { 1.5 } />
                <meshBasicMaterial color="mediumpurple" wireframe />
            </mesh>
        </>     
    )
}