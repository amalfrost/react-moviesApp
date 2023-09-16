import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import{FaGithub, FaLinkedin} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
    
      <Link style={{ color: 'inherit', textDecoration: 'inherit'}}><div>AmalRaj </div> </Link>

     <div className='footer-icons'>
     <Link><FaGithub className='icon'/></Link>
      <Link><FaLinkedin className='icon'/></Link>
     </div>
    </div>
  )
}

export default Footer
