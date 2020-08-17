import * as React from 'react';
import {useState, useEffect } from 'react';

const Template: React.FC<TemplateProps> = (props) => {
    return (
        <main className="container">
            <section className="row justify-content-center mt-5">
                <div className = "col-10">
                    <h2 className="display-1 text-center text-primary">Template Page</h2>
                </div>
            </section>
         
        </main>
    );
}

interface TemplateProps {}

export default Template;