import * as React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import type { IBook, ICategory } from '../utils/interfaces';
import Navbar from '../components/Navbar';
import apiService from '../utils/api-service';
import { isConstructorDeclaration } from 'typescript';

const Add: React.FC<AddProps> = (props) => {

    const history = useHistory();

    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');
    const [price, setPrice] = useState<string>('');

    const [selectedCategoryId, setSelectedCategoryId] = useState<string>('0');

    const [categories, setCategories] = useState<ICategory[]>([]);


    useEffect(() => {
        const getCategories = async () => {

            const categories = await apiService('/api/categories');

            setCategories(categories);

        }

        getCategories();

    }, []);


    const addBook = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const bookPost = await apiService('/api/books', 'POST', { categoryid: selectedCategoryId, title, author, price });

        history.push('/booklist');
         
    };

    return (

        <div>

            <Navbar />

            <form className= "col-md-3">

                <label>Book Title</label>
                <input value={title} onChange={e => setTitle(e.target.value)}  />

                
                <label>Book Author</label>
                <input value={author} onChange={e => setAuthor(e.target.value)}  />

                
                <label>Book Price</label>
                <input value={price} onChange={e => setPrice(e.target.value)}  />

                <label>Book Category</label>
                <select value={selectedCategoryId} required onChange={e => setSelectedCategoryId(e.target.value)} >
                    <option value="0">Select Book Category...</option>
                    {categories.map(category => (
                        <option key={`user-option-${category.id}`} value={category.id}>{category.name}</option>
                    ))}
                </select>

                <button onClick={addBook}> Add Book</button>
                <button onClick={() => history.push('/booklist')} className="btn">Go Back</button>

            </form>
        </div>

    );
};

interface AddProps {
}

export default Add;