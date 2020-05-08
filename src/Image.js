import React from 'react'
import image from './image.png'


const Image=()=>
{
    return(
        <img style={{margin: '0 20%', width:'50%'}} src={image} alt='Mark Zuckerberg'/>
    )
}

export default Image;