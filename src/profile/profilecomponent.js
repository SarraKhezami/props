import React from "react";
import PropTypes from "prop-types";
const Myprofile = (props) => {
 return <div style={{backgroundColor:"blue" }}> 
 <button onClick={() => props.message(props.fullName)}>
 ClickMe
</button>
</div>
    
};
Myprofile.defaultProps = {
   fullName: "No One"
   };
   Myprofile.propTypes = {
    fullName: PropTypes.string,
    messages: PropTypes.func
   };
export default Myprofile;