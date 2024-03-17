console.log("dev");

function validForm(){
    let x = document.forms["myforms"]["nomutili"].value;
    let y = document.forms["myforms"]["mdp"].value;
    if (x == "") {
        alert("Adresse email invalide");
        return false;
        
    }
    if (y == "") {
        alert("Mot de passe incorrect");
        return false;
        
    }
    
}

