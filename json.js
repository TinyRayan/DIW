$(document).ready(function () {
  $.get("Asset/javascript/the_district.json", null, function (data) {
    /* console.log(data); */
    /*   let text = document.createElement("h1")
      text.textContent= "BONZOUR"
      geto.append(text)  */


    


    for (let i = 0; i < 6; i++) {
      // console.log(data.categorie[i])

      let geto = $('#cardtop')

      let divCategorie = document.createElement('div')
      divCategorie.className = /* ("col-12 col-md-6 col-lg-4 p-0 d-flex justify-content-around p-0 m-0 mt-3")  */("col-10 col-sm-6 col-md-3 col-lg-3 mb-4 ms-lg-4 mx-auto mx-md-0")

      let cardcategorie = document.createElement('div')
      cardcategorie.className = "card"

      let image = document.createElement('img')
      image.src = data.categorie[i].image
      image.className = "card-img-top"

      let libelle = document.createElement('h2')
      libelle.textContent = data.categorie[i].libelle
 
      geto.append(divCategorie)

      divCategorie.append(cardcategorie)

      cardcategorie.append(image, libelle)
      
    };


    /* let apple = document.querySelector("#cardbot")
 
 
    for(let i = 0; i < 3; i++) {
     console.log(data.plat[i]) */

    /* APPARENCECARD */

    /* let card = document.createElement('div')
    card.className = ("card mb-4 shadow-sm col-12 col-md-4 d-flex flex-row ms-3 mb-4 ") *//* .split(' ')[i] +' '+ "col-md-6 col-lg-4" */

    /* APPARENCECARD */
    /* 
        let imgplat = document.createElement('img')
        imgplat.src = data.plat[i].image
        imgplat.className = "img-fluid rounded "
        imgplat.style = 'height: 10rem ; width: 50rem ; object-fit : fill ; display: flex; justify-content: flex-end;';
        
    
        let cardbody = document.createElement('div')
        cardbody.className ="card-body"
    
        let libelle =document.createElement('h5')
        libelle.className="card-title,text-muted"
        libelle.textContent= data.plat[i].libelle
    
        let prix = document.createElement('p')
        prix.className='card-text, text-muted'
        prix.innerHTML=`<strong class="precio">${data.plat[i].prix} €</strong>`
    
        apple.append(card)
        card.append(cardbody,imgplat) 
        cardbody.append(libelle,prix)
         */

    /* } */


   


    // Create a container to wrap the cards

    let container = document.createElement('div');

    container.className = 'container d-flex';


    for (let i = 0; i < 3; i++) {

      /* console.log(data.plat[i]); */

     let apple = $('#cardbot');
 
 /* APPARENCECARD */


      let card = document.createElement('div');

      card.className = "card mb-4 shadow-sm col-12 col-md-4 d-flex flex-row ms-3 mb-4 ";


      /* APPARENCECARD */


      let imgplat = document.createElement('img');

      imgplat.src = data.plat[i].image;

      imgplat.className = "img-fluid rounded";

      imgplat.style = 'height: 10rem ; width: 15rem ; object-fit : fill ; display: flex; justify-content: center; align-items: center;';


      let cardbody = document.createElement('div');

      cardbody.className = "card-body";


      let libelle = document.createElement('h5');

      libelle.className = "card-title,text-muted";

      libelle.textContent = data.plat[i].libelle;


      let prix = document.createElement('p');

      prix.className = 'card-text, text-muted';

      prix.innerHTML = `<strong class="precio">${data.plat[i].prix} €</strong>`;


      cardbody.append(libelle, prix);

      card.append(imgplat, cardbody);

      container.append(card);

      apple.append(container);

      
    }



    

     let food = $('#platpage') 

    for (let i = 0; i < 4; i++){

      console.log (data.plat[i]);

 
    let card = document.createElement('div')

    card.style = ('card col-4 flex-row ms-lg-5 mt-4" style="width: 40rem;')

    let img = document.createElement('img')

    img.src = data.plat[i].image

    let cardint = document.createElement('div')

    cardint  

    }








  });
});