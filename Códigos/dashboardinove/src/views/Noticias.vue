<template>
    <div class="page">
    <Navbar></Navbar>

    <div class="columns">
        <div>
            <Menu></Menu>
        </div>
        <div class="column is-8">
            <FormNoticias></FormNoticias>
        </div>

        <div class="column cadastrados">
            <span class="titulo">Notícias cadastrados</span>

            <Cadastrados></Cadastrados>

            <Cadastrados></Cadastrados>

            <Cadastrados></Cadastrados>

            <Cadastrados></Cadastrados>

            <Cadastrados></Cadastrados>
        </div>
    </div>
    
   </div>
   
</template>

<style>
    @import '../colors.scss';

    .cadastrados{
        overflow: auto;
        height: 80vh;
        margin-top: 20px;
    }

    .titulo{
        font-size: 16pt;
    }

    .page{
        height: 100vh;
        overflow: hidden;
    }


</style>


<script>
 import Menu from '.././components/Menu';
 import Navbar from '.././components/Navbar';
 import FormNoticias from '.././components/FormsNoticias';
 import Cadastrados from '.././components/cadastrados';


  export default {
    name: 'noticias',

    components:{
      Menu, Navbar, FormNoticias, Cadastrados
    }
    
  }
</script>

