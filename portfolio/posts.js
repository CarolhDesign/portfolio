const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = "article.json"
fetch(url)
.then(response => response.json())
.then(datas => displayContentPage(datas))

const pageContent = document.querySelector('#content')

async function displayContentPage(datas) {
    //On parcourt les objets afin de trouver le bon ID pour récupérer les bonnes datas


    datas.forEach(data => {
        let titre = data.title
        let id = data.id
        let image = data.image
        let type = data.type
        let isLiked = data.isLiked
        let isNew = data.isNew
        let logiciel = typeof data.logiciel == "object" ? data.logiciel : [data.logiciel]
        let visible =  'hidden'
        const displayLiked = isLiked == 'true' ?  'fa-solid' : 'fa-regular'

        if (data.id == id){
            pageContent.innerHTML = `
            <h2>${titre}</h2>
        `
        }
    });
};
