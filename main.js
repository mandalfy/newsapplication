import API_KEY from "./config";

const main = document.getElementById("main-content");

document.addEventListener("DOMContentLoaded", async function() {
    try {
        const articles = await getNews();
        
        if (articles && articles.length > 0) {
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
        } else {
            main.innerHTML = `<p>No articles available.</p>`;
        }
    } catch (error) {
        console.error("Error fetching news articles:", error);
        main.innerHTML = `<p>Error loading news articles. Please try again later.</p>`;
    }
});

async function getNews() {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`);
    
    // Check if response is OK (status 200-299)
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.articles;
}
