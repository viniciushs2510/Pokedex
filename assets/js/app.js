const pokemonList = document.getElementById('pokemonList');

function convertPokemonToLi(pokemon) {

    return `
    <li class="pokemon ${pokemon.type}">
    <span class="number">#${ pokemon.number.toString().padStart(3, '0')}</span>
    <span class="name">${pokemon.name}</span>

    <div class="detail">
        <ol class="types">
            ${pokemon.types.map((typeInfo) => `<li class="type ${typeInfo}">${typeInfo}</li>`).join('')}
        </ol>
        <img
            src="${pokemon.photo}" alt="${pokemon.name}"/>
    </div>
    </li>
    `;
}

pokeApi.getPokemons(0, 151).then((pokemons = []) => {
    pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join('');
});
