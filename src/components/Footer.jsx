import React from 'react'
import Badge from 'react-bootstrap/Badge';


const Footer = ({pildora,footer}) => {
  return (
    
       <div className='text-center'>
        <Badge pill bg="dark">{pildora}</Badge>
        <h4>{footer}</h4>
       </div>
      );
    }
    
   
  


export default Footer