const object1 = {
  nome: "Evee",
  height: 0.3,
  weight: 6.5,
  type: "Normal",
  evolution: false,
  weakenesses: ["Figthing"],
};

const object2 = {
  nome: "Vaporeon",
  height: 1.0,
  weight: 29.0,
  type: "Water",
  evolution: true,
  weakenesses: ["Grass", "Eletric"],
};

const object3 = {
  nome: "Jolteon",
  height: 0.8,
  weight: 24.5,
  type: "Eletric",
  evolution: true,
  weakenesses: ["Ground"],
};

const object4 = {
  nome: "Flareon",
  height: 0.9,
  weight: 25.0,
  type: "Fire",
  evolution: true,
  weakenesses: ["Water", "Ground", "Rock"],
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

const allobjects = [];

// allobjects.push(
//   object1,
//   object2,
//   object3,
//   object4,
//   object5,
//   object6,
//   object7,
//   object8,
//   object9
// );

if (object1.evolution == true) {
  allobjects.push(object1);
} else {
  alert(
    `Não foi possivel adicionar o objeto à array, pois a chave "evolution" possui valor falso.`
  );
}

if (object2.evolution == true) {
  allobjects.push(object2);
} else {
  alert(
    `Não foi possivel adicionar o objeto à array, pois a chave "evolution" possui valor falso.`
  );
}

if (object3.evolution == true) {
  allobjects.push(object3);
} else {
  alert(
    `Não foi possivel adicionar o objeto à array, pois a chave "evolution" possui valor falso.`
  );
}

if (object4.evolution == true) {
  allobjects.push(object4);
} else {
  alert(
    `Não foi possivel adicionar o objeto à array, pois a chave "evolution" possui valor falso.`
  );
}

if (object5.evolution == true) {
  allobjects.push(object5);
} else {
  alert(
    `Não foi possivel adicionar o objeto à array, pois a chave "evolution" possui valor falso.`
  );
}

if (object6.evolution == true) {
  allobjects.push(object6);
} else {
  alert(
    `Não foi possivel adicionar o objeto à array, pois a chave "evolution" possui valor falso.`
  );
}

if (object7.evolution == true) {
  allobjects.push(object7);
} else {
  alert(
    `Não foi possivel adicionar o objeto à array, pois a chave "evolution" possui valor falso.`
  );
}

if (object8.evolution == true) {
  allobjects.push(object8);
} else {
  alert(
    `Não foi possivel adicionar o objeto à array, pois a chave "evolution" possui valor falso.`
  );
}

if (object9.evolution == true) {
  allobjects.push(object9);
} else {
  alert(
    `Não foi possivel adicionar o objeto à array, pois a chave "evolution" possui valor falso.`
  );
}

console.log(allobjects);
