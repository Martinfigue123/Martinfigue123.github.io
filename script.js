document.addEventListener("DOMContentLoaded", function () {
    fetchNews();
});

function fetchNews() {
    const apiKey = "40fe22d582fb4700ba7d53d97a209974"; // Reemplaza con tu clave de API de NewsAPI
    const category = "sports"; // Puedes cambiarlo a deportes, salud, etc.
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.articles) {
                displayNews(data.articles.slice(0, 10)); // Mostrar solo los primeros 10 artículos
            }
        })
        .catch(error => console.error("Error fetching news:", error));
}

function displayNews(articles) {
    const newsContainer = document.getElementById("news-container");
    newsContainer.innerHTML = "";
    
    articles.forEach(article => {
        const newsCard = document.createElement("div");
        newsCard.classList.add("col-md-4", "mb-4");

        newsCard.innerHTML = `
            <div class="card h-100">
                ${article.urlToImage ? `<img src="${article.urlToImage}" class="card-img-top" alt="News Image">` : ""}
                <div class="card-body">
                    <h5 class="card-title">${article.title}</h5>
                    <p class="card-text">${article.description || "No description available."}</p>
                    <p class="text-muted">Source: ${article.source.name}</p>
                    <a href="${article.url}" target="_blank" class="btn btn-primary">Read More</a>
                </div>
            </div>
        `;

        newsContainer.appendChild(newsCard);
    });
}

function updateSection() {
    const inputText = document.getElementById("inputText").value;
    document.getElementById("dynamicSection").textContent = inputText;
}
