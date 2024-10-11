//Variaveis globais
const pokemonNome = document.querySelector('.pokemom--nome');
const pokemonNumero = document.querySelector('.pokemom--numero');
const pokemonImagem = document.querySelector('.pokemon--imagem');
const tipoValor = document.querySelector('.tipo--valor');
const vidaValor= document.querySelector('.vida--valor');
const ataqueValor= document.querySelector('.ataque--valor');
const defesaValor= document.querySelector('.defesa--valor');
const formulario = document.querySelector('.formulario');
const input = document.querySelector('.input__pesquisa');

//Função para buscar informaçoes do pokémon
const buscaPokemon = async (pokemon) => {
    const buscaApi = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);

    const dados = await buscaApi.json(); //Extrair dados da busca pela Api
    return dados; //Retorna os dados extraidos
};

//Função para renderizar os dados extraidos da função para buscar nome e número
const renderizarPokemon = async (pokemon) => {
    const dados = await buscaPokemon(pokemon);
    pokemonNome.innerHTML = dados.name; //Trocar nome
    pokemonNumero.innerHTML = dados.id; //Trocar o número
    pokemonImagem.src = dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default']; //Trocar os sprites

    tipoValor.innerHTML = dados['types']['0']['type']['name']; //Troca o conteúdo do tipo
    vidaValor.innerHTML = dados['stats']['0']['base_stat']; //Troca o valor da vida
    ataqueValor.innerHTML = dados['stats']['1'] ['base_stat']; //Troca o valor do ataque
    defesaValor.innerHTML = dados['stats']['2'] ['base_stat']; //Troca o valor da defesa

}

formulario.addEventListener('submit', (event) => { //Função de submit do formulário, mostra na tela as informações que foram carregadas
    event.preventDefault(); //Evita a açao padrão
    renderizarPokemon(input.value);
    input.value = '' //Zera o campo de pesquisa do formulário
});
