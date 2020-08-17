
import * as express from 'express';
import * as path from 'path';
import db from '../../db';
import { ESRCH } from 'constants';

const router = express.Router();


router.get('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
        if (id) {
            const [category] = await db.categories.one(id);
            res.json(category);

        } else {
            const categories = await db.categories.all();
            res.json(categories);
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Get categories route failed.', error })

    }

});


export default router;