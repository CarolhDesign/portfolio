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
        }//Fin functioin verifier

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

                        if(datas[i].isLiked === "true" || localStorage.getItem('isLiked' + [i], true)){
                            hearts[i].classList.toggle('fa-regular')
                        }
                })

            }
        }

        function logicielDesign(datas){
                    for(i in datas){
                        if(datas[i].logiciel === "AI"){
                            console.log("AI")

                    } else if (datas[i].logiciel === "PS"){
                        console.log("PS")
                    } else if(datas[i].logiciel === "Affinity Designer"){
                        console.log("Affinity")

                    }else if(datas[i].logiciel === "Affinity Publisher"){
                        console.log("Affinity Pub")

                    }else if(datas[i].logiciel === "InDesign"){
                        console.log("Indesign")

                    }else{
                        console.log("Rien")

                    }
            }
        }

  

        verifier(datas)
        liked(datas)
        logicielDesign(datas)

    }// Fin boucle For


}


/*


    // Créer fonction TAG
    // Créer fonction Logiciel Item + vérifier condition
    // Créer fonction Vérifier condition pour logiciel Item


    */