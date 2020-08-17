import * as React from 'react';
import {useState, useEffect } from 'react';
import moment from 'moment';
import {Link, useHistory} from 'react-router-dom';
import { IBook } from '../utils/interfaces';

const Display: React.FC<DisplayProps> = ({book}) => {

    const history = useHistory();


    return (

        <div className="col-md-5 mx-4"onClick={() => history.push(`/details/${book.id}`)}>
        <div className= "mx-2"> {book.title}</div>
        <div>
            <div className="mx-2">
                <h6>{book.author}</h6>
            </div>
            <div  className="mx-2">
                <h6>{book.name}</h6>
            </div>
            <div  className="mx-2">
                <h6>${book.price}</h6>
            </div>
        </div>
    </div>

    );
}

interface DisplayProps {
    book: IBook
}

export default Display;