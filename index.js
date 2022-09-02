const nome1 = "Evee";
const height1 = 0.3;
const weight1 = 6.5;
const type1 = "Normal";
const evolution1 = false;
const weakenesses1 = ["Figthing"];

const nome2 = "Vaporeon";
const height2 = 1.0;
const weight2 = 29.0;
const type2 = "Water";
const evolution2 = true;
const weakenesses2 = ["Grass", "Eletric"];

const nome3 = "Jolteon";
const height3 = 0.8;
const weight3 = 24.5;
const type3 = "Eletric";
const evolution3 = true;
const weakenesses3 = ["Ground"];

const nome4 = "Flareon";
const height4 = 0.9;
const weight4 = 25.0;
const type4 = "Fire";
const evolution4 = true;
const weakenesses4 = ["Water", "Ground", "Rock"];

const nome5 = "Espeon";
const height5 = 0.9;
const weight5 = 26.5;
const type5 = "Psychic";
const evolution5 = true;
const weakenesses5 = ["Ghost", "Dark", "Bug"];

const nome6 = "Umbreon";
const height6 = 1.0;
const weight6 = 27.0;
const type6 = "Dark";
const evolution6 = true;
const weakenesses6 = ["Fairy", "Bug", "Fighthing"];

const nome7 = "Leafeon";
const height7 = 1.0;
const weight7 = 25.5;
const type7 = "Grass";
const evolution7 = true;
const weakenesses7 = ["Fire", "Flying", "Ice", "Poison", "Bug"];

const nome8 = "Glaceon";
const height8 = 0.8;
const weight8 = 25.9;
const type8 = "Ice";
const evolution8 = true;
const weakenesses8 = ["Fire", "Stell", "Fighthing", "Rock"];

const nome9 = "Sylveon";
const height9 = 1.0;
const weight9 = 23.5;
const type9 = "Fairy";
const evolution9 = true;
const weakenesses9 = ["Stell", "Poison"];

mediaHeight =
  (height1 +
    height2 +
    height3 +
    height4 +
    height5 +
    height6 +
    height7 +
    height8 +
    height9) /
  9;
console.log(mediaHeight);

mediaWeight =
  (weight1 +
    weight2 +
    weight3 +
    weight4 +
    weight5 +
    weight6 +
    weight7 +
    weight8 +
    weight9) /
  9;
console.log(mediaWeight);

verificarEvolution =
  evolution1 &&
  evolution2 &&
  evolution3 &&
  evolution4 &&
  evolution5 &&
  evolution6 &&
  evolution7 &&
  evolution8 &&
  evolution9;
console.log(verificarEvolution);

console.log(
  `${nome1.toLocaleUpperCase()}
    Altura: ${height1} m
    Peso: ${weight1} Kg
    Tipo: ${type1}
    Evolução? ${evolution1}
    Fraco contra: ${weakenesses1}\n\n`,

  `${nome2.toLocaleUpperCase()}
    Altura: ${height2} m
    Peso: ${weight2} Kg
    Tipo: ${type2}
    Evolução? ${evolution2}
    Fraco contra: ${weakenesses2}\n\n`,

  `${nome3.toLocaleUpperCase()}
    Altura: ${height3} m
    Peso: ${weight3} Kg
    Tipo: ${type3}
    Evolução? ${evolution3}
    Fraco contra: ${weakenesses3}\n\n`,

  `${nome4.toLocaleUpperCase()}
    Altura: ${height4} m
    Peso: ${weight4} Kg
    Tipo: ${type4}
    Evolução? ${evolution4}
    Fraco contra: ${weakenesses4}\n\n`,

  `${nome5.toLocaleUpperCase()}
    Altura: ${height5} m
    Peso: ${weight5} Kg
    Tipo: ${type5}
    Evolução? ${evolution5}
    Fraco contra: ${weakenesses5}\n\n`,

  `${nome6.toLocaleUpperCase()}
    Altura: ${height6} m
    Peso: ${weight6} Kg
    Tipo: ${type6}
    Evolução? ${evolution6}
    Fraco contra: ${weakenesses6}\n\n`,

  `${nome7.toLocaleUpperCase()}
    Altura: ${height7} m
    Peso: ${weight7} Kg
    Tipo: ${type7}
    Evolução? ${evolution7}
    Fraco contra: ${weakenesses7}\n\n`,

  `${nome8.toLocaleUpperCase()}
    Altura: ${height8} m
    Peso: ${weight8} Kg
    Tipo: ${type8}
    Evolução? ${evolution8}
    Fraco contra: ${weakenesses8}\n\n`,

  `${nome9.toLocaleUpperCase()}
    Altura: ${height9} m
    Peso: ${weight9} Kg
    Tipo: ${type9}
    Evolução? ${evolution9}
    Fraco contra: ${weakenesses9}\n\n`
);
