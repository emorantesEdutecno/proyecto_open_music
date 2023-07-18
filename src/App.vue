<template>
  <div id="AppComponent">
        <div id="banner">
        <p>Open Music</p>
        </div>
      <nav>
        <router-link to="/"><button class="botones">Rock</button> </router-link> |
        <router-link to="/pop"><button class="botones">Pop</button></router-link> |
        <router-link to="/rap"><button class="botones">Rap</button></router-link> 
      </nav>

      <NewAlbumComponent />

      <router-view/>
  </div>

</template>

<script>
import NewAlbumComponent from '@/components/NewAlbumComponent.vue';
export default{
  name: 'AppComponent',
  components:{
    NewAlbumComponent,
  },
  data: function(){
    return{

    }
  },
  methods:{},
  computed:{},
  watch:{},
  created(){
    let url = 'musica.json';
    fetch(url)
      .then(respuesta=>respuesta.json())
      .then(objetoJson =>{
        console.log(objetoJson);
        this.$store.state.musica = objetoJson;
      })
      .catch(error=>{
        console.log('ERROR: ',error);
      });
  },
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.botones{
  background-color: chartreuse;
  width: 15%;
}

#banner{
  background-color: darkgrey;
  height: 70px;
}
</style>
