let affichage = document.getElementById("sortie_ecran");

    function display(num){
        affichage.value += num;
    }

     function calculer(){
        try{
            affichage.value = eval(affichage.value);
        }

        catch(error){
            alert("invalide")
        }
    }

    function efface(){
        affichage.value = affichage.value.slice(0, -1)
    }

    function supprime(){
        affichage.value = "";
    }