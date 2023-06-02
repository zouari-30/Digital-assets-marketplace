import React , {Component} from 'react';
import {MenuItems} from './MenuItems' ; 
import './Navbar.css'
class Navbar extends Component {
    state = {clicked:false}
    render () {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Instar</h1>
                <ul className="nav-menu"> 
                    {MenuItems.map((item , index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    } )}
                </ul>
                <button className="bt1">Login</button>
                <button className="bt2">Signup</button>
            </nav>
        )
    }
}
export default Navbar;
