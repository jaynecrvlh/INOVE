<template>
<div>
  <div class="title"> Nossas startups </div>
    <div class="page-card">
        <div class="container-cards columns is-desktop">
            <div class="column">
                <card></card>
            </div>
            <div class="column">
                <card></card>              

            </div>
             <div class="column">
                <card></card>              

            </div>
             <div class="column">
                <card></card>              

            </div>
             <div class="column">
                <card></card>              

            </div>
        </div>
    </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '../colors.scss';

    .title{
        font-size: 25pt;
        color: $orange;
        text-align: center;
        margin-top: 30px;
    }

    .page-card{
        margin-top: 30px;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;     
    }
    .container-cards{
        width: 95%;
    }
    

</style>


<script>
import card from '.././components/card-startup';

export default {
    name: 'cards-entrep',

    components: {
        card
    }  

}
</script>

