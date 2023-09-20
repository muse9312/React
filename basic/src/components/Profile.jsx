import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'

const Profile = ({ img, name, title, isChecked }) => {

    return (
        <>
            <Container>
                <div className='profile'>
                    <Avatar img={img} name={name} title={title} isChecked={isChecked} />
                </div>
            </Container>
        </>
    )
}

export default Profile

const Container = styled.div`
    
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    .profile {

        padding: 2rem 2rem;
        width : 20rem;
        height : 20rem;
        display: flex;
        justify-content: center;
        border-radius : 20px;
        background-color : #EFEEEF;
    }
`

