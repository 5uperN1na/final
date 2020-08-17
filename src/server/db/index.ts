import * as mysql from 'mysql';
import config from '../config';
import books from './queries/books';
import users from './queries/users';
import categories from './queries/categories';

//sql connection

const pool = mysql.createPool(config.mysql);

//query helper function

export const Query = <T = any>(query: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {
        const sql = mysql.format(query, values);

        pool.query(query, values, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

export default {
    books,
    categories,
    users
}