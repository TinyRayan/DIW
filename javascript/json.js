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
        divCategorie.className = ("col-10 col-sm-6 col-md-3 col-lg-3 my-5 ms-lg-4 mx-auto mx-md-0")
         divCategorie.id = 'cardplat'

       let cardcategorie = document.createElement('div')
        cardcategorie.className = "card"

       let image = document.createElement('img')
        image.src = data.categorie[i].image
         image.className = "card-img-top"
          image.style = ('height : 40rem')

       let libelle = document.createElement('h2')
        libelle.textContent = data.categorie[i].libelle

       geto.append(divCategorie)
        divCategorie.append(cardcategorie)
         cardcategorie.append(image, libelle)
      
    };


    let container = document.createElement('div');
    container.className = 'container d-flex';

    for (let i = 0; i < 3; i++) {

     let apple = $('#cardbot');

      let card = document.createElement('div');
       card.className = "card mb-4 shadow-sm col-12 col-md-4 flex-row me-5 mb-4";
        card.id = 'cardplat'

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

      apple.append(container);
       container.append(card);
        card.append(imgplat, cardbody);
         cardbody.append(libelle, prix);
      
    }
     

      for (let i = 0 ; i < 6 ; i++) {
      
       let principale = $('#platpage');

     

       let card = document.createElement('div');
       card.className = ('card col-12 col-md-8 col-lg-3 my-5 mx-4');
        card.id = 'cardplat'

        let cardimage = document.createElement('img');
         cardimage.src = data.plat[i].image;
          cardimage.className = ('card');
           cardimage.style = 'height: 20rem ; display: flex ; justify-content: center ; '  ;

        let cardbody = document.createElement('div');
         cardbody.className = ('card-body');

        let cardtitle = document.createElement('h5');
         cardtitle.className = ('card-title , text-black , fs-3 , d-flex justify-content-center , ');
          cardtitle.textContent = data.plat[i].libelle;
        
        let cardtext = document.createElement('p');
         cardtext.className = ('card-text , text-muted , fst-italic , pb-4');
          cardtext.textContent = data.plat[i].description ;

        let inbtn = document.createElement('div');
         let cardbtn = document.createElement('a');
          cardbtn.className = ('btn d-flex justify-content-center position-absolute bottom-0 start-50 translate-middle-x w-75 ');
           cardbtn.style = ('height : 3rem');
            cardbtn.id = ('bouton');
             cardbtn.text = ('Commander');
              cardbtn.addEventListener('click', function() {
                alert('Vous avez commandé le plat : ' + data.plat[i].libelle);

              });
        
        principale.prepend(card);
         card.prepend(cardimage , cardbody);
          cardbody.prepend(cardtitle , cardtext , inbtn);
           inbtn.prepend(cardbtn)
  
      }








/*       const searchInput = document.querySelector('#searchInput');
       console.log(searchInput);
        searchInput.addEventListener('keydown' , debounce(function(event) {
         if (event.key.length > 1) {
          return;
           } if (searchInput.value.length < 1) {
            return ;
             }let Input = searchInput.value; 
            
                            
          $.get('Asset/javascript/the_district.json' , function (data) {

          const plats = data.plat.filter(plat => plat.libelle.toLowerCase().includes(Input))
          console.log(plats);

          const list = document.querySelector('#searchResults')
          list.innerHTML = '';
          plats.forEach(plat => {
          
            const TitleList = document.createElement('a');
            TitleList.href = 'index.html?id=' + plat.id_plat;
            TitleList.text = plat.libelle;

            const ImgList = document.createElement('img');
            ImgList.src = plat.image;
            ImgList.className = 'img-fluid';
            ImgList.style = 'width : 5rem ; height : 3rem ; position : relative'

            list.append(ImgList)
            list.append(TitleList)

          })
          })
      
    })); */


const searchInput = document.querySelector('#searchInput');

console.log(searchInput);


searchInput.addEventListener('keyup', debounce(function(event) {

  if (event.key.length > 1) {

    return;

  } if (searchInput.value.length < 1) {

    return;

  }


  let Input = searchInput.value;


  $.get('Asset/javascript/the_district.json', function(data) {

    const plats = data.plat.filter(plat => plat.libelle.toLowerCase().includes(Input))

    console.log(plats);


    const list = document.querySelector('#searchResults');

    const listContainer = document.createElement('ul');
    listContainer.className = ('p-0 m-0 border rounded-3 col-md-12')

    listContainer.id = 'searchResultsList';

    list.innerHTML = '';

    plats.forEach(plat => {

      const TitleList = document.createElement('li');    

      const TitleListLink = document.createElement('a');

      TitleListLink.href = 'index.html?id=' + plat.id_plat;

      TitleListLink.text = plat.libelle;

      TitleList.append(TitleListLink);


      const ImgList = document.createElement('img');

      ImgList.src = plat.image;

      ImgList.className = 'img-fluid rounded';

      ImgList.style = 'width : 5rem ; height : 3rem ; position : relative'

      list.append(listContainer)
      listContainer.append(ImgList , TitleListLink)
       
       
       

      })
      
      list.append(listContainer);

  })

}));


        
    function debounce(func, wait) {

      let timeout;
    
      return function(...args) {
    
        const context = this;
    
        clearTimeout(timeout);
    
        timeout = setTimeout(function() {
    
          func.apply(context, args);
    
        }, wait);
    
      };
    
    }  



  });
});