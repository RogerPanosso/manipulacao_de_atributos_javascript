//define function procedimento trocarImagem() realizando manipulação em atributo
function trocarImagem(filename, animalname) {
  document.querySelector(".imagem").setAttribute("src", "Assets/images/"+filename);
  document.querySelector(".imagem").setAttribute("data-animal", animalname);
}

//define function procedimento pegarAnimal() realizando processo de leitura em atributo setado
function pegarAnimal() {
  let animal = document.querySelector(".imagem").getAttribute("data-animal");
  window.alert("O animal setado é: " + animal);
  if(animal == "Cachorro") {
    document.querySelector("#sobreAnimal").innerHTML = "<p>O animal " + animal + " é muito popular, pois a maioria de nossa população o possui...</p>";
  }else if(animal == "Gato") {
    document.querySelector("#sobreAnimal").innerHTML = "<p>O animal " + animal + " é muito popular, pois a maioria de nossa população o possui, porém sendo mais veloz...</p>";
  }else if(animal == "Coelho") {
    document.querySelector("#sobreAnimal").innerHTML = "<p>O animal " + animal + " não é tão popular como os outros, porém é muito carinhoso e amoroso com seu dono pois se apega demais...</p>";
  }
}
