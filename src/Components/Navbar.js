import {Link} from "react-router-dom"
import React from 'react'
import {VscThreeBars} from 'react-icons/vsc'

class Navbar extends React.Component{

    render(){

        return(
            <nav>
                <input type='checkbox' id='check'/>
                <label for='check' className='checkbtn'>
                   <VscThreeBars/>
                </label>
                <span className='logo'>LOGO</span>

                <ul>
                    <li><Link className='active' to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/services'>Services</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>

            </nav>
        )
    }
}

export default Navbar