import * as React from 'react';
import { useState, useEffect } from 'react';
import { IBook, ICategory } from '../utils/interfaces';
import apiService from '../utils/api-service';
import Navbar from '../components/Navbar';
import Display from '../components/Display';

const BookList: React.FC<BookListProps> = (props) => {

    const [books, setBooks] = useState<IBook[]>([]);
    const [categories, setCategories] = useState<ICategory[]>([]);

    const getData = async () => {

        const categories = await apiService('/api/categories');
        const books = await apiService('/api/books');
        setBooks(books);
        setCategories(categories);
    };

    useEffect(() => {
        getData();
    }, []);

    // const getBooks = async () => {
    //     const books = await apiService('/api/books');
    //     setBooks(books);
    // };

    // useEffect(() => {
    //     getBooks();
    // }, []);


    return (
        <main className="container">

              <Navbar />
            <section className="row justify-content-center mt-5">
                <div className="col-10">
                {books.map(book => (
                    <Display key={`display-card-${book.id}`} book={book} />

                ))}
                </div>
            </section>

        </main>
    );
}

interface BookListProps { }

export default BookList;