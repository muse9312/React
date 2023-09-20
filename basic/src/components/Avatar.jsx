import React from 'react'
import styled from 'styled-components'

const Avatar = (props) => {
    const { img, name, title, isChecked } = props

    return (
        <>
            <Container>
                <img src={img} alt="avatar">
                </img >
                <h2>{name}</h2>
                <h3>{title} </h3>
                {isChecked &&
                    <div className="new">
                        NEW

                    </div>}

            </Container>
        </>
    )
}

export default Avatar

const Container = styled.div`
   position: relative;
   text-align: center;
    & img{
        width: 10rem;
        height: 10rem;
        border-radius: 100%;
        
    }
    .new{
        position: absolute;
        padding: 2px 5px;
        top: 20px;
        right: -15px;
        border-radius: 10px;
        background-color: #90FFDA
    }
    
`


