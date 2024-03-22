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
      divCategorie.className = ("col-10 col-sm-6 col-md-3 col-lg-3 mb-4 ms-lg-4 mx-auto mx-md-0")

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

    // Create a container to wrap the cards

    let container = document.createElement('div');

    container.className = 'container d-flex';


    for (let i = 0; i < 3; i++) {

      /* console.log(data.plat[i]); */

     let apple = $('#cardbot');
 
      /* APPARENCECARD */

      let card = document.createElement('div');

      card.className = "card mb-4 shadow-sm col-12 col-md-4 flex-row ms-3 mb-4 ";

      /* APPARENCECARD */

      /* IMAGE */

      let imgplat = document.createElement('img');

      imgplat.src = data.plat[i].image;

      imgplat.className = "img-fluid rounded";

      imgplat.style = 'height: 10rem ; width: 15rem ; object-fit : fill ; display: flex; justify-content: center; align-items: center;';

      /* IMAGE */

      let cardbody = document.createElement('div');

      cardbody.className = "card-body";

      /* LIBELLE */

      let libelle = document.createElement('h5');

      libelle.className = "card-title,text-muted";

      libelle.textContent = data.plat[i].libelle;

      /* LIBELLE */

      /* PRIX */

      let prix = document.createElement('p');

      prix.className = 'card-text, text-muted';

      prix.innerHTML = `<strong class="precio">${data.plat[i].prix} €</strong>`;

      /* PRIX */

      /* AFFICHAGE */

      cardbody.append(libelle, prix);

      card.append(imgplat, cardbody);

      container.append(card);

      apple.append(container);
      
      /* AFFICHAGE */
      
    }

      let (i = 0 ; i < 6 ; i++) {
      
      let principale = $('#platpage');

      principale.append();

       let card = document.createElement('div');
       card.className = ('card col-4 flex-row ms-lg-5 mt-4" style="width: 40rem;');

        let cardimage = document.createElement('img');
        cardimage.src = data.plat[i].image;
        cardimage.className = ('');
        cardimage.style = ('');

        let cardbody = document.createElement('div');
        cardbody.className = ('card-body');

        let cardtitle = document.createElement('h5');
        cardtitle.className = ('card-title , text-muted');
        
        let cardtext = document.createElement('p');
        cardtext.className = ('card-text , text-muted , fst-italic');

        let inbtn = document.createElement('div');
        inbtn.className = ('');

        let cardbtn = document.createElement('a');
        cardbtn.className = ('');
        cardbtn.id = ('bouton');


         
      });
    });