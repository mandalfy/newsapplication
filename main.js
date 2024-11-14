const main = document.getElementById("main-content");

document.addEventListener("DOMContentLoaded", async function() {
    const articles = await getNews();  

    articles.forEach((article) => {
        console.log(article);

        main.innerHTML += `
        <article class="news-article">
            <img src="${article.urlToImage || 'https://149366103.v2.pressablecdn.com/wp-content/uploads/2021/05/image-og-fallback-om-left-black-vb.png'}" alt="${article.title}">
            <h2>${article.title}</h2>
            <p>${article.description || 'No description available'}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        </article>
        `;
    });
});

async function getNews() {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=5d7948c8c05147fa93f81a0b8d9222c3");
    const data = await response.json();  
    return data.articles;  
}