import * as React from 'react';
import {useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC<HomeProps> = (props) => {

    return (
        <main className="container">
              <Navbar />
            <section className="row justify-content-center mt-3">
                <div className = "col-8">
                    <h5 className="display-3">Welcome!</h5>
                    <h6 className="display-3">Click Get Books above to browse...</h6>
                </div>
            </section>
         
        </main>
    );
}

interface HomeProps {}

export default Home;