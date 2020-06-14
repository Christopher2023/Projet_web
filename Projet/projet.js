function supprimer()
{
    alert("Hello! I am an alert box!!");
}

function soumettre()
{
    var element = document.querySelector("body");
    var prenom = document.getElementById("prenom");
    var nom = document.getElementById("nom");
    var marque = document.getElementById("marque");
    var kilometrage = document.getElementById("kilometrage");
    var annee = document.getElementById("annee");
    var modele = document.getElementById("modele");
    var prix = document.getElementById("prix");
    var description = document.getElementById("description");
    var section = document.createElement("section");
    var div = document.createElement("div");
    var ul1 = document.createElement("ul");
    ul1.textContent = form.elements.prenom.value;
    div.appendChild(ul1);
    section.appendChild(div);
    element.appendChild(section);
}
