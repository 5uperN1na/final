
import * as express from 'express';
import * as path from 'path';
import db from '../../db';
import { ESRCH } from 'constants';

const router = express.Router();

//post route

router.post('/', async (req, res) => {
    const newUser = req.body;

    try {
        await db.users.insert (newUser.email, newUser.password, newUser.name);
        res.json({msg:  'User was posted successfully.'});
    

    } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'The User-Post route failed.', error })

}

});


export default router;