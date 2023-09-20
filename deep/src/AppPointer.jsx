import { useState } from 'react'
import styled from 'styled-components'



function AppPointer() {
  // const [x, setX] = useState(0) // x 좌표
  // const [y, setY] = useState(0) // y 좌표

  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  function movePointer(e) {

    setPointer({ x: e.clientX, y: e.clientY });

    // 수평으로 이동한다면?
    // setPointer(prev => ({ x: prev.x, y: prev.y }))
  }


  return (
    <>
      <Container onPointerMove={movePointer}>
        <Pointer x={pointer.x} y={pointer.y} />
      </Container>
    </>
  )
}

export default AppPointer

const Container = styled.div`
   background-color: #f7f7f7;
   width: 100vw;
   height: 100vh;
   position: relative; 
`;

const Pointer = styled.div`
   background-color: red;
   border-radius: 50%;
   width: 30px;
   height: 30px;
   position: absolute; 
   transform: translate(${props => props.x - 15}px, ${props => props.y - 15}px); 
`;


