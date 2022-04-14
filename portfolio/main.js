const parent = document.querySelector('.portfolio-header')
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
let allDatas
const url = "article.json"
fetch(url)
.then(response => response.json())
.then(datas => {
    allDatas = datas
    displayData(datas)
})

//let ramdom = 0

document.querySelector('body').addEventListener('click', (e) => {
           
    // Events pour les boutons et les filtres
    // Le bouton le plus proche : closest('button')
    if(e.target.closest('button')){
        filteredData(allDatas, e.target.textContent);
    }

    if(e.target.classList.contains('heart')){
     e.target.classList.toggle('fa-solid')
     e.target.classList.toggle('fa-regular')
    
    }  
});


function displayData(datas){
    const ul = document.querySelector('.folio')
    ul.innerHTML = ""
    for(data in datas){

        // On créer une boucle for in pour parcourir les index du tableau d'objet.
        // Ensuite, on créer les variables pour une meilleure accessibilité et lisibilité du code

        let titre = datas[data].title
        let id = datas[data].id
        let image = datas[data].image
        let type = datas[data].type
        let isLiked = datas[data].isLiked
        let isNew = datas[data].isNew
        let condition = data.type
        let logiciel = typeof datas[data].logiciel == "object" ? datas[data].logiciel : [datas[data].logiciel]
        let visible =  'hidden'
        const displayLiked = isLiked == 'true' ?  'fa-solid' : 'fa-regular'
        
        //faire les filtres
        // afficher toutes les images en lightbox ( via filtre )
        
        //Verifier si new Post

        if(isNew == "true"){
          visible = 'visible'
        }

        const displayTag = type.map(elem=>{ 
            
                if(elem == "Logo"){
                    tag = 'logo'
                    condition = 'Logo'
                } else if (elem == "Web"){
                    tag = 'web'
                    condition = 'Web'
                } else if (elem == "Vectoriel"){
                    tag = "vector"
                    condition = 'Vector'

                } else if(elem == "Compositing"){
                    tag = "compositing"
                    condition = 'Compositing'
                }else {
                    tag = "hidden"
                }  

                return `

                <div class="tag">
                    <div class="tagFond ${tag}">
                    <p class="tagName">${elem}</p>
                </div>

                `
    
        })  

        //Destiné a modifier la valeur d'un tableau ( transforme en html / log)
        const displayLogiciel = logiciel.map(element=>{ 
            if(element == "AI"){
            log = 'ai'
        } else if (element == "PS"){
            log = 'ps'
        } else if (element == "In"){
            log = "in"
        } else if(element == "Affinity Designer"){
            log = "afdesigner"
        } else if (element == "Affinity Publisher"){
            log = "afpublisher"
        } else {
            log = "hidden"
        }    
            return `
            <div class="logiciel-items">
                <div class="fond ${log}">
                <p class="text">${element}</p>
            </div>
            `

        })  


  
        //ajouter class pour style CSS

        ul.innerHTML += `
        <a class="itemBox ${type}" href="posts.html?id=${id}">
        <li class="portfolio-item">

        <div id="header">
        
            <div class="new-item">
                  <div class="blocNew ${visible}">
                        <h2>Nouveauté</h2>
                  </div>

                  </div>
                  <div class="typeUL">
                  ${displayTag.join("")}
              </div>
            </div>

            <div class="portfolio-content">
                <div class="title">${titre}</div>
            </div>
        </div>

        <div class="portfolio-footer">

        <div class="like ">
            <div class="icon"><i class="heart ${displayLiked} fa-heart"></i></div>
        </div>

        <div class="logicielUL">
            ${displayLogiciel.join("")}
        </div>

    </div>
 </div>
</li>
</a>
        `;
  
        //Travailler dans la boucle, chercher DATA
        const portfolioItem = document.querySelectorAll('.portfolio-item')
        portfolioItem[data].style.backgroundImage = `url('${image}')`
        portfolioItem[data].style.backgroundSize = "cover"

        //console.log('icone'+ramdom)
    //    document.querySelector('#icone'+ramdom).appendChild(icone)
    //     ramdom++ 

    
    }// Fin boucle For

}

function filteredData(datas, condition){
    const result = datas.filter(data => data.type == condition);
    displayData(result)
}
/*
    //Faire LocalStorage, et après Firebase
 */

    
