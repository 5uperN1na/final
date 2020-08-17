import { Query } from '../index';

//get all

const all = () => Query ('SELECT books.*, categories.name from books JOIN categories on categories.id=books.categorid');


//get one

const one = (id: number) => Query ('SELECT books.*, categories.name from books JOIN categories on categories.id=books.categorid WHERE books.id = ?', [id]);


//insert one

const insert = (categoryid: number, title: string, author: string, price: number) => {
return Query ('INSERT into books (categoryid, title, author, price) VALUES (?, ?, ?, ?)', [categoryid, title, author, price]);
} 
 

//delete one

const deleteBook = (id: number) => Query ('DELETE books WHERE id = ?', [id]);


//edit one

const edit = (id: number, categoryid: number, title: string, author: string, price: number) => Query ('UPDATE books SET categoryid = ?, title = ?, author = ?, price = ? WHERE id = ?', [categoryid, title, author, price, id]); 


export default {
    all,
    one,
    edit,
    deleteBook,
    insert


}