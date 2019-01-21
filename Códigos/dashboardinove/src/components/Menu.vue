<template>
    <div>
      <aside class="menu">
        <ul class="menu-list">
          <li><a >Estatisticas</a></li>
          <li><a href="/#/eventos">Eventos</a></li>
          <li><a href="/#/noticias">Notícias</a></li>
          <li><a href="/#/editais">Editais</a></li>
          <li><a href="/#/startups">Startups</a></li>
          <li><a href="/#/incubacao">Incubadora</a></li>        
        </ul>
      </aside>
    </div>
</template>


<style lang="scss" scoped>
   	@import '../colors.scss';

    .menu{
        width: 13vw; 
        height: 95vh;
        background-color: $purple;
        padding-top: 5vh;


        .menu-list > li>  a{         
          height: 10vh;
          color: white;
          font-size: 16pt;
          padding: 20px;
          

          &:hover{
            color:$purple;
            background-color: rgb(238, 238, 238);
          }
        }
    }

</style>



<script>
  export default {
      name: 'menu'
  }
</script>