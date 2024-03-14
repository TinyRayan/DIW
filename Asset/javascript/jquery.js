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

        const leprenom =  $("#prenom_form").val();
        
        if (leprenom === "") {
            envoi = false;
            $("#prenom_form").attr("placeholder", "Ce champ est obligatoire");
            $("#prenom_form").addClass('invalid');
        } else {
            $("#prenom_form").removeClass('invalid');
        }

        const email = $( "#email_form" ).val()

        if (email === "") {
            envoi = false;
            $("#email_form").attr("placeholder", "Ce champ est obligatoire");
            $("#email_form").addClass('invalid');
        } else {
            $("#email_form").removeClass('invalid');
        }

        const  regexEmail = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
            
        if (!regexEmail.test(email)) {
            $("#email_form").attr("placeholder", "Adresse e-mail invalide");
            $("#email_form").addClass('invalid');
            envoi=false;
        }
    

        if (leprenom === "") {
            envoi = false;
            $("#prenom_form").attr("placeholder", "Ce champ est obligatoire");
            $("#prenom_form").addClass('invalid');
        } else {
            $("#prenom_form").removeClass('invalid');
        }

        

        // Si tout est valide, soumettre le formulaire
        if (envoi) {
            document.forms[0].submit();
        } else {
            return false;
        }
    }

    // Validation du champ nom en temps réel
    $('#nom_form').on('input', function() {
        if ($(this).val() === '') {
            $(this).addClass('invalid');
        } else {
            $(this).removeClass('invalid');
        }
    });

    // Lorsque le bouton est cliqué, appeler la fonction de vérification
    $("#bouton").click(function(e) {
        e.preventDefault();
        verif();
    });

});
