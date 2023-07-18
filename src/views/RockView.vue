<template>
    <div id="RockView">
        <h1>Rock View</h1>
        <div class="flex-container" >
            <div class="contenido" v-for="vinilo in musica.rock" :key="vinilo.id">
                <p>{{  vinilo.artist }}</p>
                <div>
                    <img class="img-contenedor" v-bind:src="vinilo.image" v-bind:alt="vinilo.album">
                </div>
                {{ vinilo.album }}
            </div>
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex';

export default{
    name:'RockView',
    data: function(){
        return{

        }
    },
    methods:{},
    computed:{
        ...mapState(['musica']),
    },
    watch:{},
}
</script>

<style scoped>
#RockView{
    background-color: midnightblue;
    color: white;
}
.flex-container{
    display: flex;
    background-color: deepskyblue;
    flex-wrap: wrap;
    flex-direction: row;
}

.img-contenedor{
    width:100%;
}

.contenido{
    width:100px;
    margin: 2%;
}
</style>