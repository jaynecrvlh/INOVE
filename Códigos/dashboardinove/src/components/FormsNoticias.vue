<template>
    <div class="forms" >
        <span>* campos obrigatórios </span>

        <div class="control">
            <div class="input-form">
            <p>Título da notícia <span>*</span></p>
            <input class="input is-hovered" type="text">
            </div>

            <div class="input-form">
            <p>Descrição da notícia <span>*</span></p>
            <textarea class="textarea is-hovered" rows="14" ></textarea>
            </div>

            <a class="button is-fullwidth">Cadastrar notícia</a>
        </div>  
        
    </div> 

</template>

<style  lang="scss" scoped>
	@import '../colors.scss';

    .forms{
        padding-top: 10px;
    }

    .button{
        height: 6vh;
        color: $white;
        background-color: $purple;

        &:hover{
            color: white;

        }
    }

    span{
        color: red;
    }

    .input-form{
        padding-bottom: 15px;
    }

</style>


<script>
export default {
    name: 'formNoticias'
}
</script>

