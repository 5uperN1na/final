import * as mysql from 'mysql';
import * as config from '../config';
import * as books from './queries/books';
import * as users from './queries/users';
import * as categories from './queries/categories';

const pool = mysql.createPool(config.mysql);

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
    users,
    books,
    categories
}