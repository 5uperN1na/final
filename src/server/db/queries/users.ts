import { Query } from '../index';


//insert one

const insert = (email: string, password: string, name: string) => {
return Query ('INSERT into users (email, password, name) VALUES (?, ?, ?)', [email, password, name]);
} 
 
//find one 
const find = (column: string, value: number | string) => Query('SELECT * FROM users WHERE ?? = ?', [column, value]);

export default {
insert,
find

}