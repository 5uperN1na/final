import * as express from 'express';
import * as path from 'path';
import db from '../../db';

const router = express.Router();

//get route

router.get('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
        if (id) {
            const [book] = await db.books.one(id);
            res.json(book);

        } else {
            const books = await db.books.all();
            res.json(books);
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Get books route failed.', error })

    }

});


//post route

router.post('/', async (req, res) => {

    const newBook = req.body;
    try {

        await db.books.insert (newBook.categoryid, newBook.title, newBook.author, newBook.price);
        res.json({msg:  'Book was posted successfully.'});
    

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Post books route failed.', error })

    }

});


//delete route

router.delete('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
            await db.books.deleteBook(id);
            res.json({msg:  'Book was deleted successfully.'});
     
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Delete books route failed.', error })

    }

});


//edit route 

router.put('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    const editBook = req.body;

    try {
        await db.books.edit(id, editBook.categoryid, editBook.title, editBook.author, editBook.price);
        res.json({msg:  'Book was updated successfully.'});
    

    } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Edit books route failed.', error })

}

});



export default router;