import React from 'react'
import { NavLink } from 'react-router-dom';
import { Nav, NavItem, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


function Header() {
    return (
        <div>
            <div  className='container'>
                <Nav>
                    <NavItem>
                        <NavLink className="nav-link" to="/">
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/contact">
                            Contact
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" to="/employee">
                            Employees
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>
        </div>




    )
}

export default Header