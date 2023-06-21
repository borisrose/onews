import apiService from "../service/index.js"
import { UIArticle } from "../factory/articleUI.js";

export default async() => {


    const articlesContainer = document.getElementById('articles-container');

    const articles = await apiService.fetchArticlesFromDB() 
    
    articles.forEach(article => {
        

        const articleUI = new UIArticle(article)
        articlesContainer.innerHTML += articleUI.make()

    });


}






