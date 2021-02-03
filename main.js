const app = new Vue({
    el: '#app',    
    data () {
        return {
          info: null
        }
      },
    mounted () {
    axios
        .get('https://pokeapi.co/api/v2/pokemon/25')
        .then(response => (this.info = response.data.sprites.back_default))
    }
})
