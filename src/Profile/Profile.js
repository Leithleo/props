import React from 'react'
import PropTypes from "prop-types"





const Profile = ({Fullname,Bio,Profession,handleName,...props}) => {
    handleName(Fullname);
    return (
        <div style={{  backgroundColor:'lightgrey' , margin:'0 auto', fontSize:'xx-large' , color:'Red'}}>
            Fullname:{Fullname} <br/>
            Bio:{Bio} <br/>
            Profession:{Profession} <br/>
            {props.children} <br/>
            
        </div>
    )
}
Profile.propTypes={
    Fullname:PropTypes.string,
    Bio:PropTypes.string,
    Profession:PropTypes.string,
    handlename:PropTypes.func,
}
Profile.defaultProps={
    Fullname:'spongebob',
    Bio:'Spongebob Is a Yellow Sponge',
    Profession:'Cartoon Character',

}
export default Profile
