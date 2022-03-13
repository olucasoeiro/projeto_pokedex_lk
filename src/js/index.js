const listaSelecPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {

    const cartaoPokemonAberto = document.querySelector('.aberto')
    cartaoPokemonAberto.classList.remove('aberto')

    const idPokemonSelec = pokemon.attributes.id.value

    const idCartaoPokemonAbrir = 'cartao-' + idPokemonSelec

    const cartaoPokemonAbrir = document.getElementById(idCartaoPokemonAbrir)
    cartaoPokemonAbrir.classList.add('aberto')

    const pokemonAtivoListagem = document.querySelector('.ativo')
    pokemonAtivoListagem.classList.remove('ativo')

    const pokemonSelecListagem = document.getElementById(idPokemonSelec)
    pokemonSelecListagem.classList.add('ativo')

    })
})