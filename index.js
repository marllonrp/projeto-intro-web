const object1 = {
  nome: "Eevee",
  height: 0.3,
  weight: 6.5,
  type: "Normal",
  evolution: false,
  weakenesses: ["Figthing"],
  image1: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png",
  image2:
    "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH9/SWSH9_EN_TG11.png",
};

const object2 = {
  nome: "Vaporeon",
  height: 1.0,
  weight: 29.0,
  type: "Water",
  evolution: true,
  weakenesses: ["Grass", "Eletric"],
  image1: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/134.png",
  image2:
    "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH181.png",
  link: "https://www.pokemon.com/us/pokedex/vaporeon",
};

const object3 = {
  nome: "Jolteon",
  height: 0.8,
  weight: 24.5,
  type: "Eletric",
  evolution: true,
  weakenesses: ["Ground"],
  image1: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/135.png",
  image2:
    "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH151.png",
  link: "https://www.pokemon.com/us/pokedex/jolteon",
};

const object4 = {
  nome: "Flareon",
  height: 0.9,
  weight: 25.0,
  type: "Fire",
  evolution: true,
  weakenesses: ["Water", "Ground", "Rock"],
  image1: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/136.png",
  image2:
    "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH149.png",
  link: "https://www.pokemon.com/us/pokedex/flareon",
};

const object5 = {
  nome: "Espeon",
  height: 0.9,
  weight: 26.5,
  type: "Psychic",
  evolution: true,
  weakenesses: ["Ghost", "Dark", "Bug"],
  image1: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/196.png",
  image2:
    "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH7/SWSH7_EN_64.png",
  link: "https://www.pokemon.com/us/pokedex/espeon",
};

const object6 = {
  nome: "Umbreon",
  height: 1.0,
  weight: 27.0,
  type: "Dark",
  evolution: true,
  weakenesses: ["Fairy", "Bug", "Fighthing"],
  image1: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png",
  image2:
    "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH7/SWSH7_EN_94.png",
  link: "https://www.pokemon.com/us/pokedex/umbreon",
};

const object7 = {
  nome: "Leafeon",
  height: 1.0,
  weight: 25.5,
  type: "Grass",
  evolution: true,
  weakenesses: ["Fire", "Flying", "Ice", "Poison", "Bug"],
  image1: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/470.png",
  image2:
    "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH7/SWSH7_EN_7.png",
  link: "https://www.pokemon.com/us/pokedex/leafeon",
};

const object8 = {
  nome: "Glaceon",
  height: 0.8,
  weight: 25.9,
  type: "Ice",
  evolution: true,
  weakenesses: ["Fire", "Stell", "Fighthing", "Rock"],
  image1: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/471.png",
  image2:
    "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH196.png",
  link: "https://www.pokemon.com/us/pokedex/glaceon",
};

const object9 = {
  nome: "Sylveon",
  height: 1.0,
  weight: 23.5,
  type: "Fairy",
  evolution: true,
  weakenesses: ["Stell", "Poison"],
  image1: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/700.png",
  image2:
    "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH7/SWSH7_EN_74.png",
  link: "https://www.pokemon.com/us/pokedex/sylveon",
};

const allObjects = [];

allObjects.push(
  object1,
  object2,
  object3,
  object4,
  object5,
  object6,
  object7,
  object8,
  object9
);

// Slides

let count = 1;

document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 3000);

function nextImage() {
  count++;
  if (count > 10) {
    count = 1;
  }
  document.getElementById("radio" + count).checked = true;
}

const creatSectionObject = (objeto) => {
  // Section
  const getList = document.getElementById("list-container");
  const creatSection = document.createElement("section");
  const newSection = getList.appendChild(creatSection);
  creatSection.classList.add("items");

  // Divs

  const creatDiv1 = document.createElement("div");
  const creatDiv2 = document.createElement("div");

  const newDiv1 = newSection.appendChild(creatDiv1);
  newDiv1.classList.add("cards");
  const newDiv2 = newSection.appendChild(creatDiv2);
  newDiv2.classList.add("items-text");

  //Div 1

  const creatFrontCard = document.createElement("div");
  const creatBackCard = document.createElement("div");

  const newFrontCard = newDiv1.appendChild(creatFrontCard);
  newFrontCard.classList.add("card__inner");
  newFrontCard.classList.add("card__inner--front");

  const newBackCard = newDiv1.appendChild(creatBackCard);
  newBackCard.classList.add("card__inner");
  newBackCard.classList.add("card__inner--back");

  // Cards

  const creatImgFront = document.createElement("img");
  const img1 = newFrontCard.appendChild(creatImgFront);
  img1.setAttribute("src", objeto.image1);
  const creatImgBack = document.createElement("img");
  const img2 = newBackCard.appendChild(creatImgBack);
  img2.setAttribute("src", objeto.image2);

  // Div 2

  const creatH3 = document.createElement("h3");
  const h3 = newDiv2.appendChild(creatH3);
  const creatA = document.createElement("a");
  const aElement = h3.appendChild(creatA);
  aElement.innerHTML = objeto.nome;
  aElement.setAttribute("href", objeto.link);
  aElement.setAttribute("target", "_blank");

  // Lista

  const creatUl = document.createElement("ul");
  const newUl = newDiv2.appendChild(creatUl);
  const creatLi1 = document.createElement("li");
  const creatLi2 = document.createElement("li");
  const creatLi3 = document.createElement("li");
  const creatLi4 = document.createElement("li");
  const creatLi5 = document.createElement("li");

  const li1 = newUl.appendChild(creatLi1);
  li1.innerHTML = "<strong>height:</strong>" + objeto.height.toString() + " m";

  const li2 = newUl.appendChild(creatLi2);
  li2.innerHTML = "<strong>weight:</strong>" + objeto.weight.toString() + " Kg";

  const li3 = newUl.appendChild(creatLi3);
  li3.innerHTML = "<strong>type:</strong>" + objeto.type.toString();

  const li4 = newUl.appendChild(creatLi4);
  li4.innerHTML =
    "<strong>weakenesses:</strong>" + objeto.weakenesses.join(", ");

  const li5 = newUl.appendChild(creatLi5);
  let escrita1LetraM = objeto.evolution.toString();
  escrita1LetraM =
    escrita1LetraM[0].toUpperCase() + escrita1LetraM.substring(1);
  li5.innerHTML = "<strong>evolution:</strong>" + escrita1LetraM;
};

// Intrudção de objetos na página através do Dom

creatSectionObject(object5);
creatSectionObject(object6);
creatSectionObject(object7);
creatSectionObject(object8);
creatSectionObject(object9);

// Filp-Cards

document.querySelectorAll(".cards").forEach((cards) => {
  cards.addEventListener("click", (e) => {
    if (cards.classList.contains("card--flip")) {
      cards.classList.remove("card--flip");
    } else {
      cards.classList.add("card--flip");
    }
  });
});

// Buscador

const textSearchBar = document.getElementById("name");
const tagsDeBusca = document.getElementsByTagName("h3");
const tagsSection = document.querySelectorAll(".items");
const footer = document.getElementById("footer");
const arrayInnerText = [];

for (a in tagsDeBusca) {
  arrayInnerText.push(tagsDeBusca[a].innerText);
}
let resultsArray = arrayInnerText.filter((items) => items !== undefined);
resultsArray = resultsArray.map((items) => items.toLowerCase());

const buscar = (event) => {
  const texto = textSearchBar.value.toLowerCase();

  tagsSection.forEach((addi) => addi.classList.add("hideItems"));

  for (let i in tagsSection) {
    if (resultsArray[i] === texto) {
      tagsSection[i].classList.remove("hideItems");
    }
  }
  let alerta = resultsArray.includes(texto);

    const limpar = () => {
      if (texto === "") {
        tagsSection.forEach((addi) => addi.classList.remove("hideItems"));
        footer.classList.remove("fixed-footer")
      }else if (texto !== "" && alerta === false){
        alert("Nenhum resultado encontrado");
        footer.classList.add("fixed-footer");
      }
    };

    limpar();
  
};
