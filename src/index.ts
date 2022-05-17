// import { getPokemon } from "./generics/get-pokemon";

import { Pokemon } from "./decorators/pokemon-class";

const charmander = new Pokemon('Charmander');
// (Pokemon.prototype as any).customName = 'Pikachu';
// console.log(charmander);
// charmander.savePokemonToDB(-891);

charmander.publicApi = 'https://fernando-herrera-com';
console.log(charmander);

// getPokemon(41)
//     .then( pokemon => console.log( pokemon.sprites.front_default ) )
//     .catch( error => console.log( error ) )
//     .finally( () => console.log('Fin de getPokemon')  )