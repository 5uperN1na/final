import { Router } from 'express';
import {generateHash} from '../../utils/passwords';
import db from '../../db';
import {createToken} from '../../utils/tokens';

const router = Router();

//post route

router.post('/', async (req, res)=> {
    const newUser = req.body;
    newUser.password = generateHash(newUser.password);
    try {

        const cannedResponse = await db.users.insert(newUser.email, newUser.password, newUser.name);

        const token = createToken ({userid.})
        
    } catch (error) {
        
    }

});