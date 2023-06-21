export default {
    /*exportable nameless object */ 

    async fetchArticlesFromDB(){

        const articles =  await(await fetch('database.json')).json()
        console.log("await", articles)
        return articles
    }


}