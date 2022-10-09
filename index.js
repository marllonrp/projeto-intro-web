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
  image2: "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSHP/SWSHP_EN_SWSH151.png",
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
    "https://assets.pokemon.com/assets/cms2/img/cards/web/SWSH7/SWSH7_EN_18.png",
  link: "https://www.pokemon.com/us/pokedex/flareon",
};

const object5 = {
  nome: "Espeon",
  height: 0.9,
  weight: 26.5,
  type: "Psychic",
  evolution: true,
  weakenesses: ["Ghost", "Dark", "Bug"],
};

const object6 = {
  nome: "Umbreon",
  height: 1.0,
  weight: 27.0,
  type: "Dark",
  evolution: true,
  weakenesses: ["Fairy", "Bug", "Fighthing"],
};

const object7 = {
  nome: "Leafeon",
  height: 1.0,
  weight: 25.5,
  type: "Grass",
  evolution: true,
  weakenesses: ["Fire", "Flying", "Ice", "Poison", "Bug"],
};

const object8 = {
  nome: "Glaceon",
  height: 0.8,
  weight: 25.9,
  type: "Ice",
  evolution: true,
  weakenesses: ["Fire", "Stell", "Fighthing", "Rock"],
};

const object9 = {
  nome: "Sylveon",
  height: 1.0,
  weight: 23.5,
  type: "Ice",
  evolution: true,
  weakenesses: ["Stell", "Poison"],
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

// 1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2, altere a forma que a característica de array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.

const modificarArrayString = (array) => {
  let newArray = [...array];
  for (objeto in newArray) {
    newArray[objeto] = { ...newArray[objeto] };
  }

  for (i = 0; i < newArray.length; i++) {
    let string = newArray[i].weakenesses.join();
    newArray[i].weakenesses = string;
  }
  return newArray;
};

// console.log(modificarArrayString(allObjects))

// 2. Ainda no relatório, altere-o para que ele seja criado utilizando um laço. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.

// for (i in allObjects){
//   console.log( allObjects[i])
// }

// 3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.

const dadosObjeto = (objeto) => {
  let string = "";
  for (i in objeto) {
    string += `${i}: ${objeto[i]} `;
  }
  return console.log(string);
};

// dadosObjeto(object1)

// 4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.
// const stringBusca = prompt ("Busque um nome pokemon: ").toLowerCase()

const filtro = (array, stringg) => {
  let newArray = [];

  array.filter((titulo) => {
    if (titulo.nome.toLowerCase() === stringg) {
      newArray.push(titulo);
    }
  });
  if (newArray.length === 0) {
    alert("Não foi encontrado nenhum pokemon.");
  }
  return newArray;
};

// console.log(filtro(allObjects, stringBusca));

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

// Filp-Cards

document.querySelectorAll(".cards").forEach(
 cards=> {cards.addEventListener("click", (e) => {
    if (cards.classList.contains("card--flip")) {
      cards.classList.remove("card--flip");
    } else {
      cards.classList.add("card--flip");
    }
  });
});


