import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'
import{FaGithub, FaLinkedin} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
    
      <Link  to='https://amalrj.netlify.app/' target='blank' style={{ color: 'inherit', textDecoration: 'inherit'}}><div>AmalRaj </div> </Link>

     <div className='footer-icons'>
     <Link to='https://github.com/amalfrost' target='blank'><FaGithub className='icon'/></Link>
      <Link to='https://www.linkedin.com/in/amal-rj/' target='blank'><FaLinkedin className='icon'/></Link>
     </div>
    </div>
  )
}

export default Footer
