const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMore');
const limit = 10;
var offset = 0;

function convertPokemonToLi(pokemon) {

    return `
    <li class="pokemon ${pokemon.type}">
    <span class="number">#${pokemon.number.toString().padStart(3, '0')}</span>
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

function loadPokemonItens(offset, limit) {
    loadMoreButton.disabled = true;
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join('');
        loadMoreButton.disabled = false;
    });
}

loadMoreButton.addEventListener('click', () => {

    if (offset >= 151)
        return;

    offset += limit;

    if (offset + limit > 151) {
        loadPokemonItens(offset, 151 - offset);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    }

    else
        loadPokemonItens(offset, 10);

});

loadPokemonItens(offset, limit);