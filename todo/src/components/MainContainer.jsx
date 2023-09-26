import React, { useState } from 'react'
import styled from 'styled-components'

const MainContainer = () => {
    return (
        <>
            <Container>
                <div className="itemBox">
                    asd
                </div>
            </Container>
        </>
    )
}

export default MainContainer

const Container = styled.div`
    width: 100%;
    height: 100%;

    .itemBox{
        display: flex;
        justify-content: center;
        width: 400px;
        height: 400px;
        background-color: #1D1E3D;
        border-radius: 2%;
    } 
`