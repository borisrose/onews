import { Article } from "../models/article.js";
import capitalizer from "../utils/capitalizer.js";

export class UIArticle {

    constructor(article){

        this.article = new Article(article.title, article.tag, article.date, article.content, article.author);

    }

    make(){

        let spanClass = "article__span"

        switch (this.article.tag){
            case "news":
                spanClass+="--news";
                break;
            case "team":
                spanClass+="--team";
                break;
            case "work":
                spanClass+="--work";
                break;
            default:
                break;
                

        }
    
        return(

        `
            <div class="article" aria-describedby="article-name">
                
                <div class="article-span-container" aria-label="conteneur du tag de l'article">
                    <span class=${spanClass} aria-label="nom du tag">${capitalizer(this.article.tag)}</span>
                </div>
    
                <header aria-label="en-tête de l'article">
                   <h3 class="article-name">${this.article.title}</h3>
                </header>
       

                <div class="article__author-and-date-container" aria-label="auteur et data de l'article">
                    <div class="article__author-image-container" aria-label="conteneur de la photo de l'auteur de l'article">
                        <img src="${this.article.author.photo}" alt="${this.article.author.name}">      
                    </div>
                    <span class="article__span" aria-label="nom de l'auteur de l'article">${this.article.author.name}</span>
                    <span class="article__span article__span--opacity-down" aria-label="date de publication de l'article">${this.article.date}</span>
                </div>

                <div class="article__sumup-container" aria-label="conteneur du contenu de l'article et  du lien pour en lire plus">
                    <p> ${this.article.content}</p>
                    <a href="#">Continue reading</a>
                </div>

            </div>

       `
        )
    }




}