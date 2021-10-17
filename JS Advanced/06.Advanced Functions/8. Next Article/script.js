function getArticleGenerator(articles) {
    let content = document.getElementById('content');

    return next = () => {
        let currentArticle = articles.shift();
        if (currentArticle) {
            let article = document.createElement('article');
            article.textContent += currentArticle;
            content.appendChild(article);
            return content;
        }
    }
}