import {Link} from "react-router-dom"
import React from 'react'
import {VscThreeBars} from 'react-icons/vsc'

class Navbar extends React.Component{

    state={
        activeHome:false,
        activeAbout:false,
        activeServices:false,
        activeContact:false
    }

    handleSelection=(e)=>{
        if(e.target.id === 'homeLink'){
            this.setState({
                activeHome:true,
                activeAbout:false,
                activeServices:false,
                activeContact:false,
            })
        }else if (e.target.id === 'aboutLink'){
            this.setState({
                activeHome:false,
                activeAbout:true,
                activeServices:false,
                activeContact:false,
            })
        }else if (e.target.id === 'servicesLink'){
            this.setState({
                activeHome:false,
                activeAbout:false,
                activeServices:true,
                activeContact:false,
            })
        }else if (e.target.id === 'contactLink'){
            this.setState({
                activeHome:false,
                activeAbout:false,
                activeServices:false,
                activeContact:true,
            })
        }

        
    }
    render(){


        return(
            <nav>
                <input type='checkbox' id='check'/>
                <label for='check' className='checkbtn'>
                   <VscThreeBars/>
                </label>
                <span className='logo'>LOGO</span>

                <ul>
                    <li><a onClick={this.handleSelection} className={this.state.activeHome?'active':''} id='homeLink' href='#home'>Home</a></li>
                    <li><a onClick={this.handleSelection} className={this.state.activeAbout?'active':''} id='aboutLink' href='#about'>About</a></li>
                    <li><a onClick={this.handleSelection} className={this.state.activeServices?'active':''} id='servicesLink' href='#services'>Services</a></li>
                    <li><a onClick={this.handleSelection} className={this.state.activeContact?'active':''} id='contactLink' href='#contact'>Contact</a></li>
                </ul>

            </nav>
        )
    }
}

export default Navbar