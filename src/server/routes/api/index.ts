import { Router } from 'express';
import usersRouter from './users';
import booksRouter from './books';
import categoriesRouter from './categories';

const router = Router();


router.use('/users', usersRouter);
router.use('/books', booksRouter);
router.use('/categories', categoriesRouter);


export default router;