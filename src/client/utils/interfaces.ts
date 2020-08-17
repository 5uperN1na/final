export interface CannedResponse {
    insertId?: number;
    affectedRows?: number;
    changedRows?: number;
}

export interface IBook {
    id?: number;
    categoryid?: number;
    title?: string;
    author?: string;
    price?: number;
    name: string;
    _created: Date;

}