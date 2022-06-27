// 487b47b575cd41bcb28cf6f9f4b5e33c
let newsAccordion = document.getElementById('newsAccordion')
let source = 'bbc-news'
let apiKey = '487b47b575cd41bcb28cf6f9f4b5e33c'

const xhr = new XMLHttpRequest(); // grab the news cotainer

xhr.open("GET", `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true)
xhr.getResponseHeader('content-type', 'application/json');

xhr.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                    aria-expanded="false" aria-controls="collapse${index}">
                                   <b>Breaking News ${index + 1}:</b> ${element["title"]} <br>
                                   <a href="${element['url']}" target="_blank" >Read more here</a> 
                                </button>
                                </h2>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    } else {
        console.log("Some error occured")
    }
}

xhr.send()