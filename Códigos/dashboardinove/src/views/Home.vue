<template>
   
   <div>
    <Navbar></Navbar>
    <Menu></Menu>
   </div>
   

</template>

<script>
  import Menu from '.././components/Menu';
  import Navbar from '.././components/Navbar';

  export default {
    name: 'home',

    components:{
      Menu, Navbar
    }
    
  }
</script>

