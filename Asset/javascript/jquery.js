$(document).ready(function () {

    function verif() {
        let envoi = true;

        // Récupération de la valeur du champ nom
        const lenom = $("#nom_form").val();

        // Vérification si le champ est vide
        if (lenom === "") {
            envoi = false;
            $("#nom_form").attr("placeholder", "Ce champ est obligatoire");
            $("#nom_form").addClass('invalid');
        } else {
            $("#nom_form").removeClass('invalid');
        }

        const leprenom = $("#prenom_form").val();

        if (leprenom === "") {
            envoi = false;
            $("#prenom_form").attr("placeholder", "Ce champ est obligatoire");
            $("#prenom_form").addClass('invalid');
        } else {
            $("#prenom_form").removeClass('invalid');
        }

        const email = $("#email_form").val()

        if (email === "") {
            envoi = false;
            $("#email_form").attr("placeholder", "Ce champ est obligatoire");
            $("#email_form").addClass('invalid');
        } else {
            $("#email_form").removeClass('invalid');
        }

        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

        if (!regexEmail.test(email)) {
            $("#email_form").attr("placeholder", "Ce champ est obligatoire");
            $("#email_form").addClass('invalid');
            envoi = false;
        }

        const phone = $("#phone_form").val()

        if (phone === "") {
            envoi = false;
            $("#phone_form").attr("placeholder", "Ce champ est obligatoire");
            $("#phone_form").addClass('invalid');
        } else {
            $("#phone_form").removeClass('invalid');
        }

        const regexTel = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]{6,}$/;

        if (!regexTel.test(phone)) {
            $("#phone_form").attr("placeholder", "Le numéro de téléphone doit être valide (ex : 0678560123 ou +33");
            $("#phone_form").addClass('invalid'); 
            } else   { 
                $("#phone_form").removeClass('invalid'); 
            }


            

        // Si tout est valide, soumettre le formulaire
   
    return envoi;
    }

    $("#bouton").click(function (e) {

        e.preventDefault();
      
        const envoi = verif();
      
        if (envoi) {
      
          alert("Form will be sent.");
      
          $("#myForm").submit();
      
        } else {
      
          alert("Form will not be sent.");
      
        }
      
      });

      
     // Validation du champ nom en temps réel
    $('#nom_form').on('input', function () {

        let lenom = $(this).val();

        if (lenom === '') {

            $(this).addClass('invalid');

        } else if (!/^[a-zA-Z\s-]+$/.test(lenom)) {

            $(this).addClass('invalid');

            $(this).attr("placeholder", "Le nom doit contenir que des lettres !");

        } else {

            $(this).removeClass('invalid');
        }

        if ($(this).hasClass('invalid')){
            $(this).css('border' , '3px solid red');
        }else{
            $(this).css('border' , '1px solid black');
        }

    });

     $('#prenom_form').on('input', function () {

        let leprenom = $(this).val();

        if (leprenom === '') {

            $(this).addClass('invalid');

        } else if (!/^[a-zA-Z\s-]+$/.test(leprenom)) { // Vérifie si le prénom contient uniquement des lettres, des espaces et des tirets

            $(this).addClass('invalid');

            $(this).attr("placeholder", "Le prenom doit contenir que des lettres !");

        } else {

            $(this).removeClass('invalid');

        }

        if ($(this).hasClass('invalid')){
            $(this).css('border' , '3px solid red');
        }else{
            $(this).css('border' , '1px solid black');
        }

    });


    $('#email_form').on('input',function () {

        let email = $ (this).val();

        if (email === '') {

            $(this).addClass('invalid');
        
        } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {


         $(this).addClass('invalid');

         $(this).attr("placeholder" , "L'addresse mail n'est pas correcte ou invalid !")

     } else {

        $(this).removeClass('invalid');

     }


     if ($(this).hasClass('invalid')){

        $(this).css('border' , '3ps solid red')

     } else  {

        $(this).removeClass('invalid');
 
     }



    });

         $('#phone_form').on('input', function() {


            let phone = $(this).val();
        
            const isValid = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]{6,}$/.test(phone);
        
        
            if (phone === '') {
        
                $(this).addClass('invalid');
        
                $(this).attr("placeholder", "ON A DIT UN NUMERO DE TELEPHONE BORDEL... Vraiment teubé comme humain.");
        
            } else if (!isValid) {
        
                $(this).addClass('invalid');
        
                $(this).attr("placeholder", "Entrez un numéro de téléphone valide SVP");
        
                $(this).css('border', '3px solid red');
        
            } else {
        
                $(this).removeClass('invalid').css('border', '');
        
            }
        
        
        }); 


        
        

});







