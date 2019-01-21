<template>
    <nav class="navbar" aria-label="main navigation">
     <div class="navbar-brand">
        <a  href="/#/home">
            <img class="logo" src="../assets/logo-in.png" alt="Logo do Inove">
        </a>
  </div>
  <div class="navbar-end">
        <a class="navbar-item">
           Roberta Andrade
        </a>
        <a href="/#/login" class="navbar-item">
            Sair
        </a>
    </div>
</nav>
</template>

<style lang="scss" scoped>
   	@import '../colors.scss';
    

    .navbar{
        background-color: $purple;
        height: 12vh;
        padding: 0;
        box-shadow: 1px 1px 20px #383838;

        .logo {
            padding: 0;
            margin: 20px;  
            width: 60px;

        }

        .navbar-end > a{
            color: white;
            font-size: 12pt;
            margin-right: 10px;

            &:hover{
                color:$purple;
            }
        }
    }

</style>


<script>
export default {
    name: 'Navbar'
}
</script>

