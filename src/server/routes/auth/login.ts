import { Router } from 'express';
import * as passport from 'passport';
import {createToken } from '../../utils/tokens';
import { ReqUser } from '../../utils/types';

const router = Router();

//post route

router.post('/', passport.authenticate('local'), async(req: ReqUser, res)=> {

    try {

        const token = createToken ({userid: req.user.id});
        res.json(token);
        
    } catch (error) {
        console.log (error);
        res.status(500).json({msg: "Login authentication failed.", error})
        
    }

});

export default router;