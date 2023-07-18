<template>
    <div id="NewAlbumComponent">
        <h1>NewAlbum Component</h1>
        <div class="flex-container">
            <form>
                <label for ="txtArtist">Artista:</label>
                <input type="text" id="txtArtist" v-model="formulario.artist">

                <label for ="txtAlbum">Album:</label>
                <input type="text" id="txtAlbum" v-model="formulario.album">

                <label for ="txtImagen">Imagen:</label>
                <input type="text" id="txtImagen" v-model="formulario.image">   
                
                <label for="genero">Genero:</label>
                <select name="genero" id="genero" v-on:change="asignarGenero">
                        <option value="rock">Rock</option>
                        <option value="pop">Pop</option>
                        <option value="rap">Rap</option>
                </select><br>
                <input type="button" v-on:click="enviarDatos" value="Agregar Album">
            </form>
        </div>
        {{ formulario }}
    </div>
</template>

<script>
export default{
    name:'NewAlbumComponent',
    data:function(){
        return{
            formulario:{
                artist:'',
                category:'rock',
                album:'',
                image:'',
            }

        
        }
    },
    methods:{
        asignarGenero: function(){
            let elGenero = document.getElementById('genero').value;
            console.log(elGenero);
            this.formulario.category = elGenero;
        },
        enviarDatos: function(){
            let data = {...this.formulario};
            console.log('NewAlbumComponent data: ',data);
            this.$store.commit('ADD_DISC', data);
        },
    },
    computed:{},
}
</script>

<style scoped>
#NewAlbumComponent{
    background-color: chocolate;
}

.flex-container{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
</style>