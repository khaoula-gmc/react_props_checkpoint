import React from 'react'
import PropTypes from 'prop-types'

const Data={
    fullName:'',
    bio:'',
    profession:''
}


Data.PropTypes={
fullName:PropTypes.string,
bio:PropTypes.string,
profession:PropTypes.string
}



const Profil=(props)=>
{
    function handleName(name)
    {
        name.preventDefault();
        alert(props.fullName)
    }
    return(
    <>

       <div style={{padding:20}}> <span style={{color:'blue',fontFamily:'Arial'}}>Name: </span><a  href='/' onClick={handleName}>{props.fullName}</a><br/></div>
       <div style={{padding:20}}> <span style={{color:'blue',fontFamily:'Arial'}}>Bio: </span><span> {props.bio}</span><br/></div>
       <div style={{padding:20}}> <span style={{color:'blue',fontFamily:'Arial'}}>Profession: </span><span> {props.profession}</span><br/></div>
        {props.children}
    </>)
}

Profil.defaultProps={
    fullName:'Mark Zuckerberg',
    bio:'né le 14 mai 1984 à White Plains à New York, est un informaticien et chef d"entreprise américain. Il est le cofondateur du site web de réseau social Facebook .',
    profession:'président-directeur général de facebook'
}

export default Profil;