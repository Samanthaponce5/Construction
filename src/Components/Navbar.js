import {Link} from "react-router-dom"
import React from 'react'

class Navbar extends React.Component{

    render(){

        return(
            <nav>
                <ul>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About</li></Link>
                    <Link to='/services'><li>Services</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>
                </ul>



            </nav>
        )
    }
}

export default Navbar