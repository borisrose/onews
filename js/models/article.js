import { Author } from "./author.js";

export class Article {

    constructor(title, tag, date, content,author){

        this.title = typeof title === "string" ? title : null;
        this.tag = typeof tag === "string" ? tag : null;
        this.date = typeof date === "string" ? date : date.toString();
        this.content = typeof content === "string" ? content : null;
        this.author = new Author(author.name, author.photo);

    }




}