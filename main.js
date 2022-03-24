const parent = document.querySelector('.portfolio-header')

const url = "article.json"
fetch(url)
.then(response => response.json())
.then(datas => displayData(datas))



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

        ul.innerHTML += `
        <li class="portfolio-item">

        <div id="header">
            <div class="new-item">
                <div class="blocNew">
                    <h2>Nouveauté</h2>
                </div>
            </div>
            <div class="like">
                <div class="icon"><i class="heart fa-regular fa-heart"></i></div>
            </div>
        </div>
        <div class="portfolio-content">
            <div class="divider"></div>
            <div class="title">${titre}</div>
        </div>
        <div class="portfolio-footer">
            <div class="tag">${type}</div>
            <div class="logiciel-items">${logiciel}</div>
        </div>
    </li>
        `;

        // On vérifie si isNew est true et on affiche le code
        function verifier(datas){
            const headers = document.querySelectorAll(".new-item");

            for ( let i = 0 ; i < headers.length ; i++){

            if(datas[i].isNew === "true"){

                headers[i].innerHTML = `         
                        <div class="blocNew">
                            <h2>Nouveauté</h2>
                        </div>
                `;
                headers[i].classList.add('visible')
            } else {
            headers[i].innerHTML = `         
                        <div class="blocNew">
                            <h2>Nouveauté</h2>
                        </div>
                `;
                headers[i].classList.add('hidden')
        }
    }
        }

        // Events des boutons " Like "
        function liked(datas){
            const hearts = document.querySelectorAll(".heart");
            for ( let i = 0 ; i < hearts.length ; i++){

              // Récupération de la valeur isLiked sur le JSON  
            
                if(datas[i].isLiked === "true"){
                    hearts[i].classList.remove('fa-regular')
                    hearts[i].classList.add('fa-solid')
                }else {
                    hearts[i].classList.remove('fa-solid')
                    hearts[i].classList.add('fa-regular')
                }

                // Au clic
                hearts[i].addEventListener('click', () => {
                        hearts[i].classList.toggle('fa-solid')

                        if(datas[i].isLiked === "true"){
                            hearts[i].classList.toggle('fa-regular')
                        }
                })

            }
        }

        // Events des Logiciels, création des fonds
        function logicielDesign(datas){
                    
                    for(i in datas){
                        const parent = document.querySelectorAll ('.logiciel-items')
                        const text = document.querySelectorAll('.text')

                        for ( let i = 0 ; i < parent.length ; i++){

                             if(datas[i].logiciel === "AI"){
                                parent[i].innerHTML = `         
                                <div class="fond">
                                <p class="text">${datas[i].logiciel}</p>
                                </div>
                                `;
                                const fond = document.querySelectorAll('.fond')
                                fond[i].classList.add('ai')

                            }else if (datas[i].logiciel === "PS"){
                                parent[i].innerHTML = `         
                                <div class="fond">
                                <p class="text">${datas[i].logiciel}</p>
                                </div>
                                `;

                                const fond = document.querySelectorAll('.fond')
                                fond[i].classList.add('ps')
                            } else if(datas[i].logiciel === "Affinity Designer"){
                                parent[i].innerHTML = `         
                                <div class="fond">
                                <p class="text">${datas[i].logiciel}</p>
                                </div>
                                `;

                                const fond = document.querySelectorAll('.fond')
                                fond[i].classList.add('afdesigner')

                            }else if(datas[i].logiciel === "Affinity Publisher"){
                                parent[i].innerHTML = `         
                                <div class="fond afpublisher">
                                <p class="text">${datas[i].logiciel}</p>
                                </div>
                                `;
                                const fond = document.querySelectorAll('.fond')
                                fond[i].classList.add('afpublisher')

                            }else if(datas[i].logiciel === "In"){
                                parent[i].innerHTML = `         
                                <div class="fond">
                                <p class="text">${datas[i].logiciel}</p>
                                </div>
                                `;

                                const fond = document.querySelectorAll('.fond')
                                fond[i].classList.add('in')
                            }else{
                                parent[i].classList.add('hidden')
                            }
                    }                    
            }
        }

        function designTag(datas){
            for(data in datas){
                const types = document.querySelectorAll('.tag')
                for (let i = 0; i < types.length; i++) {

                    types[i].innerHTML = `
                    <div class="tagFond">
                        <p class="tagName">${datas[i].type}</p>
                    </div>
                    `

                                    //Condition design 

                if(datas[i].type == "Logo"){
                    types[i].innerHTML = `
                    <div class="tagFond">
                        <p class="tagName">${datas[i].type}</p>
                    </div>
                    `
                    const fond = document.querySelectorAll('.tagFond')
                    fond[i].classList.add('logo')

                } else if (datas[i].type == "Web"){
                    types[i].innerHTML = `
                    <div class="tagFond">
                        <p class="tagName">${datas[i].type}</p>
                    </div>
                    `
                    const fond = document.querySelectorAll('.tagFond')
                    fond[i].classList.add('web')
                }

                }



            }
        }

        verifier(datas)
        designTag(datas)
        liked(datas)
        logicielDesign(datas)

    }// Fin boucle For


}


/*
    // Créer fonction Vérifier condition pour logiciel Item + 2


    */