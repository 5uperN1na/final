import * as React from 'react';
import {useState, useEffect } from 'react';
import moment from 'moment';
import {Link, useHistory} from 'react-router-dom';
import { IBook } from '../utils/interfaces';

const Display: React.FC<DisplayProps> = ({book}) => {

    const history = useHistory();


    return (
        <main className="container">
                <div className="col-md-2 mx-4"onClick={() => history.push(`/details/${book.id}`)}></div>
            <section className="row justify-content-center mt-5">
                <div className = "col-10">
                    <h6 className="mx-2">{book.title} </h6>
                    <h6 className="mx-2">{book.author} </h6>
                    <h6 className="mx-2">{book.price} </h6>
                    <h6 className="mx-2">{book.title} </h6>
                </div>
            </section>
         
        </main>
    );
}

interface DisplayProps {
    book: IBook
}

export default Display;