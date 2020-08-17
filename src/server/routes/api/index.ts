import { Router } from 'express';
import booksRouter from './books';
import categoriesRouter from './categories';
import usersRouter from './users';

const router = Router();

router.use ('/users', usersRouter);
router.use ('/books', booksRouter);
router.use ('./categories', categoriesRouter);

export default router;