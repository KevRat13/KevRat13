function calcul_moyenne() {
    var n1= prompt("Donner la première note: ");
    var n2= prompt("Donner la deuxième note: ");
    var n3= prompt("Donner la troisième note: ");

    var somme = Number(n1)+Number(n2)+Number(n3);

    document.write ("Voici la somme: "+somme+ "<Hr>");
    var moyenne= somme/3;

    document.write("Voici la moyenne: "+moyenne+"<br>");

    if (moyenne<10)
    document.write("Vous êtes redoublant");
else
document.write("Vous êtes admis");

}

function test_age() {
    let age = prompt('Quelle est votre age ?');
    if(age < 18){
        document.write("<font size='8em' color='pink'>"+"Vous êtes mineur"+"</font>");
        document.bgColor="red";
    }
    else{
        document.write ("<font size='8em' color='darkgreen'>"+"Vous êtes majeur"+"</font>");
        document.bgColor="green";
    }

}

function simple_affichage(){
    let name = prompt('Donner votre prénom');
    let familyName = prompt('Donner votre Nom');
    document.write('<div style="margin:auto; width:300px; border:2px solid blue;">');
    document.write("Bonjour" + name + familyName);
    document.write('</div>');

}
function test_couleur(){
    let c = prompt("Donner une couleur");
    if(c == "rouge" || c == "ROUGE"){
        document.body.style.background = "red";

    }
    else if (c == "bleu" || c == "Bleu"){
        document.body.style.background = "blue";
    }
    else{
        document.write("Couleur non comprise");
    }
}