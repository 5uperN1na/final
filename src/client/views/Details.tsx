import * as React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';
import { useParams, useHistory, Link } from 'react-router-dom';
import { IBook } from '../utils/interfaces';
import Navbar from '../components/Navbar';
import apiService from '../utils/api-service';

const Details: React.FC<DetailsProps> = (props) => {

    const { bookid } = useParams();
    const history = useHistory();
    const [book, setBook] = useState<IBook>();

    useEffect(() => {
        const getBook = async () => {
            const book = await apiService(`/api/books/${bookid}`);
            setBook(book);
        };

        getBook();

    }, [bookid]);

    const deleteBook = async (e: React.MouseEvent<HTMLButtonElement>) => {

        const bookDelete = await apiService(`/api/books/${bookid}`, 'DELETE');

        history.push('/booklist');

    };


    return (
        <main>
            <Navbar />

            <div>
                <div>
                    <h6>{book?.title}</h6>
                    <h6>{book?.author}</h6>
                    <h6>{book?.price}</h6>
                    <h6>{book?.name}</h6>
                    <h6>{moment(book?._created).format("MMM Do YYYY")}</h6>
                </div>

                <div>
                    <button onClick={() => history.push('/booklist')} className="btn">Go Back</button>
                    <button onClick={() => deleteBook(bookid)} className="btn">Delete</button>

                    <Link to={`/edit/${bookid}`} className="btn">Edit</Link>
                    <Link to='/add' className="btn">Add Book</Link>

                </div>
            </div>


    



        </main>
    );

}

interface DetailsProps {

}

export default Details;