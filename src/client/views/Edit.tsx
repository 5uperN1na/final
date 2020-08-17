import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import moment from 'moment';
import type { IBook, ICategory } from '../utils/interfaces';
import Navbar from '../components/Navbar';
import apiService from '../utils/api-service';


const Edit: React.FC<EditProps> = (props) => {

    const { bookid } = useParams();

    const history = useHistory();

    const [title, setTitle] = useState<string>('');

    const [author, setAuthor] = useState<string>('');

    const [price, setPrice] = useState<string>('');

    const [categories, setCategories] = useState<ICategory[]>([]);

    const [selectedCategoryId, setSelectedCategoryId] = useState<string>('0');

    useEffect(() => {
        const getData = async () => {

            const categories = await apiService('/api/categories');
            const book = await apiService(`/api/books/${bookid}`);

            setTitle(book.title);
            setAuthor(book.author);
            setPrice(book.price);
            setSelectedCategoryId(book.categoryid);

            setCategories(categories);

        }

        getData();

    }, []);


    const editBook = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const pizza = await apiService(`/api/books/${bookid}`, 'PUT', { categoryid: selectedCategoryId, title, author, price });

        history.push('/booklist');

    }

    return (
        <main>
            <Navbar />
                <div>
                    <form className='col-md-3'>

                        <div>
                            <h3 className="text-center"> Edit Book</h3>

                            <label>Book Title</label>
                            <input value={title} onChange={e => setTitle(e.target.value)} />

                            <label>Book Author</label>
                            <input value={author} onChange={e => setAuthor(e.target.value)}  />

                            <label>Book Price</label>
                            <input value={price} onChange={e => setPrice(e.target.value)}  />

                            <label>Book Category</label>
                            <select value={selectedCategoryId} onChange={e => setSelectedCategoryId(e.target.value)} >
                                <option value="0">Select Book Category...</option>
                                {categories.map(category => (
                                    <option key={`user-option-${category.id}`} value={category.id}>{category.name}</option>
                                ))}
                            </select>

                            <button onClick={editBook}> Save</button>

                        </div>
                        <div>
                            <Link to={`/details/${bookid}`} className="btn">Go Back</Link>
                        </div>
                    </form>
                </div >




        </main >
    );
}

interface EditProps { }

export default Edit;