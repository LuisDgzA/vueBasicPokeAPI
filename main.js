const $pokemon = document.querySelector('#pokemon')

function renderPokemon(image){
    $pokemon.setAttribute('src',image)
}





$(document).on('click', '.btn-detalles', function(event)
{
    event.preventDefault();
    let id = $(this).data('id');
    let url = 'https://pokeapi.co/api/v2/pokemon/'+id;
    const app = new Vue({
        el: '#app',    
        data () {
            return {
              info: null
            }
          },
        mounted () {
        axios
            .get(url)
            .then(response => (renderPokemon(response.data.sprites.front_default) ))
        }
    })
    
});

$(document).on('click', '.btn-elegir', function(event)
{
    event.preventDefault();
    let tipo = $(this).data('tipo');
    $('#h-eleccion').html("Usted escogió: "+tipo);
    console.log(tipo);
    
});