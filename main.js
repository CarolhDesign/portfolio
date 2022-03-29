const parent = document.querySelector('.portfolio-header')
let logicielArray = []
const url = "article.json"
fetch(url)
.then(response => response.json())
.then(datas => displayData(datas))

//let ramdom = 0

document.querySelector('body').addEventListener('click', (e) => {
           
    if(e.target.classList.contains('heart')){
     e.target.classList.toggle('fa-solid')
     e.target.classList.toggle('fa-regular')
    
    }  
});
 

function displayData(datas){
    const ul = document.querySelector('.folio')

    for(data in datas){

        // On créer une boucle for in pour parcourir les index du tableau d'objet.
        // Ensuite, on créer les variables pour une meilleure accessibilité et lisibilité du code
        let titre = datas[data].title
        let id = datas[data].id
        let image = datas[data].image
        let type = datas[data].type
        let isLiked = datas[data].isLiked
        let isNew = datas[data].isNew
        let logiciel = datas[data].logiciel
        let visible =  'hidden'
        const displayLiked = isLiked == 'true' ?  'fa-solid' : 'fa-regular'

      //Verifier si new Post
            if(isNew == "true"){
                visible = 'visible'
            }


        // Vérifier Logiciels

        if(logiciel == "AI"){
            log = 'ai'
        } else if (logiciel == "PS"){
            log = 'ps'
        } else if (logiciel == "In"){
            log = "in"
        } else if(logiciel == "Affinity Designer"){
            log = "afdesigner"
        } else if (logiciel == "Affinity Publisher"){
            log = "afpublisher"
        } else {
            log = "hidden"
        }    
       

        //Vérifier Types

        if(type == "Logo"){
            tag = 'logo'
        } else if (type == "Web"){
            tag = 'web'
        } else if (type == "Vectoriel"){
            tag = "vector"
        } else {
            tag = "hidden"
        }

        ul.innerHTML += `
        <li class="portfolio-item">

        <div id="header">
            <div class="new-item">
                  <div class="blocNew ${visible}">
                        <h2>Nouveauté</h2>
                  </div>

                  <div class="tag">
                  <div class="tagFond ${tag}">
                      <p class="tagName">${type}</p>
                  </div>
                  </div>
            </div>
        </div>
        <div class="portfolio-content">
            <div class="divider"></div>
            <div class="title">${titre}</div>
        </div>
        <div class="portfolio-footer">
        <div class="like ">
        <div class="icon"><i class="heart ${displayLiked} fa-heart"></i></div>
    </div>
            <div class="logiciel-items">
            <div class="fond ${log}">
            <p class="text">${logiciel}</p>
        </div>
            </div>
        </div>
    </li>
        `;

        //Voir avec Ahmed

        const boxLogiciel = document.querySelectorAll('.logiciel-items')

        if(logiciel.length < 2){
            boxLogiciel[data].innerHTML = `
            <div class="fond ${log}">
            <p class="text">${logiciel}</p>
            </div>
            `  
        } else {
            for(logi in logiciel.length){
                boxLogiciel[logi].innerHTML += `
                <div class="fond ${log}">
                <p class="text">${logiciel}</p>
                </div>
                `  
            }
        }
        

        //Travailler dans la boucle, chercher DATA
        const portfolioItem = document.querySelectorAll('.portfolio-item')
        portfolioItem[data].style.backgroundImage = `url('${image}')`
        portfolioItem[data].style.backgroundSize = "cover"
        


        //console.log('icone'+ramdom)
    //    document.querySelector('#icone'+ramdom).appendChild(icone)
    //     ramdom++ 

    }// Fin boucle For


}


/*
    // Créer fonction Vérifier condition pour logiciel Item + 2
    // Créer fonction condition pour type > 2 et affichage
    //Faire LocalStorage, et après Firebase
 */