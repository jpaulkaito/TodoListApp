import { useState } from 'react';
import {
    Navbar,
    // NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import NucampLogo from '../app/assets/img/logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            {/* <NavbarBrand className='ms-5' href='TodoListApp/'>
                <img src={NucampLogo} alt='nucamp logo' className='float-start' />
                <h1 className='mt-1'>My Monthly To-Do List</h1>
            </NavbarBrand> */}
            <Link to="/TodoListApp/" className="navbar-brand ms-5">
                <img src={NucampLogo} alt="nucamp logo" className="float-start" />
                <h1 className="mt-1">My Monthly To-Do List</h1>
            </Link>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='TodoListApp/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='TodoListApp/View-all'>
                            <i className='fa fa-list fa-lg' /> View All
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='TodoListApp/Search'>
                            <i className='fa fa-search fa-lg' /> Search
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='TodoListApp/About'>
                            <i className='fa fa-info fa-lg' /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='TodoListApp/Contact'>
                            <i className='fa fa-address-card fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    );
};

export default Header;