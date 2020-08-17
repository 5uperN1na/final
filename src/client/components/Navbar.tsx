import * as React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar: React.FC<NavBarProps> = (props) => {
    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
            <NavLink className="mx-2 btn-btn-link" exact to='/'> BOOKS!</NavLink>
            <NavLink className="mx-2 btn-btn-link" exact to='/booklist'> Get Books</NavLink>
            <NavLink className="mx-2 btn-btn-link" exact to='/login'> Login</NavLink>
            <span className="mx-2 btn-btn-link" onClick={() => localStorage.clear()} > Logout</span>
               
            </section>
         
        </main>
    );
}

interface NavBarProps {}

export default NavBar;