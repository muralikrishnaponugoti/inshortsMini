
fetch("../api/news")
    .then(response=>response.json())
    .then(data=>{
        const newsContainer=document.getElementById('newsList');
        console.log(data.articles);
        data.articles.forEach((article,index)=>{
            const newsItem=document.createElement('div');
            newsItem.classList.add("newsCard");
            newsItem.id=index;
            const content=article.content.slice(0,-13);
            newsItem.innerHTML=`
            <div>
                <img src=${article.urlToImage} alt="img"/> 
            </div>
            <div>
                <h2 id="title">${article.title}</h2>
                <p id="content">${content}</p>
            </div>
            `;
            newsContainer.appendChild(newsItem);
            console.log(article);
        })

        const card=document.querySelectorAll(".newsCard");
        const btn=document.getElementsByClassName("btn");
        const specific=document.getElementsByClassName("specificNews");
        const newsListBox=document.getElementsByClassName("newsList");
        card.forEach(crd => {
            crd.addEventListener('click',(event)=>{
                newsListBox[0].style.cssText="display:none;";
                specific[0].style.cssText="display:flex;";
                const articleIndex=crd.id;
                document.getElementById('specificImg').src=data.articles[articleIndex].urlToImage;
                document.getElementById('specificTitle').innerText=data.articles[articleIndex].title;
                document.getElementById('specificContent').innerText=data.articles[articleIndex].content.slice(0,-13);
                btn[0].style.cssText="display:block;"
            })
        });
        btn[0].addEventListener('click',()=>{
            specific[0].style.cssText="display:none";
            newsListBox[0].style.cssText="display:flex;";
            btn[0].style.cssText="display:none;" 
        })

    })
    .catch(error=>{
        console.log(error);
    })
