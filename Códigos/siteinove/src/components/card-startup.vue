<template>
    <div class="card">
  <div class="card-image">
    <figure class="image is-3by3">
      <img src="../assets/arcos.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">Arcos</p>
        <p class="subtitle is-6">@arcoseducacional</p>
      </div>
    </div>

    <div class="content">
      Solução educacional para auxiliar professores a 
      ministrarem aulas lúdicas através de um tabuleiro digital.

      <div class="content-card-none">
        <div>
         <b>Responsáveis:</b> Daniel Oliveira, Jayne carvalho, Lindberg Pinheiro, Marcelo Siqueira
        </div>
        <div>
          <b>Email:</b> arcos.startup@gmail.com
        </div>
        <div>
          <b> Tel.:</b> (88) 99639-4309
        </div>
        <div>
           <b>site:</b> www.arcoseducaional.com
        </div>
        <div>
           <b>Outros links:</b>
        </div>
      </div>

      <button v-on:click= aparecer(true) >Ver mais</button>

    </div>

  </div>
</div>
</template>

<style lang="scss" scoped>

    .content-card-none{
      display: none;
    }

    .block{
      display: block;
    }


</style>

<script>
  import Vue from 'vue';

  export default {
      name: 'card'
  }

    

    



</script>

