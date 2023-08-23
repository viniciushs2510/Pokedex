const pokemonList = document.getElementById('pokemonList');

function convertPokemonToLi(pokemon) {

    return `
    <li class="pokemon">
    <span class="number">#${ pokemon.id.toString().padStart(3, '0')}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((typeInfo) => `<li class="type">${typeInfo.type.name}</li>`).join('')}
        </ol>
        <img
            src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}"/>
    </div>
    </li>
    `;
}

pokeApi.getPokemons(0, 10).then((pokemons = []) => {
    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('');
});
