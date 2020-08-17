import { Query } from '../index';

//get all

const all = () => Query ('SELECT * from categories');

//get one

const one = (id: number) => Query ('SELECT * from categories WHERE id = ?', [id]);


export default {
    all,
    one


}