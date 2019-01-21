<template>
    <div class="columns">
        <div class="infos column is-7">
            <div>
                <b>Nome do evento </b>
            </div>
             <div class="desc">
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
             </div>

        </div>

        <div class="column icons">
            <div >
                <img class="img" src="../assets/caneta.svg" alt="">
            </div>
            <div >
                <img class="img" src="../assets/lixeira.svg" alt="">
            </div>

        </div>

    </div>


</template>

<style lang="scss" scoped>

    .icons{
        margin-top: 10px;
        display: flex;

        .img{
            margin: 10px;
            width: 25px;
        }
    }


    .infos{
        margin-top: 15px;
    }

    .desc{
        font-size: 9pt;
        max-width: 50ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        
    }
</style>


<script>
export default {
    name: "cadastrados"
}
</script>
