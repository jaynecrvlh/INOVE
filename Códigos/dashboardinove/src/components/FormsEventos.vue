<template>
    <div class="forms" >
        <span>* campos obrigatórios </span>

        <div class="control">
            <div class="input-form">
            <p>Nome do evento <span>*</span></p>
            <input class="input is-hovered" type="text">
            </div>

            <div class="input-form">
            <p>Descrição do evento <span>*</span></p>
            <textarea class="textarea is-hovered"></textarea>
            </div>

            <div class="columns">
                <div class="column">
                    <p>Data do evento <span>*</span></p>
                    <input class="input is-hovered" type="date">
                </div>   
                 <div class="column">
                    <p>Local do evento <span>*</span></p>
                    <input class="input is-hovered" type="text">
                </div>            
            </div> 

            <div class="columns">
                <div class="column is-8">
                    <p>Link do formulário <span>*</span></p>
                    <input class="input is-hovered" type="text">
                </div>   
                 <div class="column is-4">
                    <p>Foto do evento <span>*</span></p>
                    <input class="input is-hovered" type="file">
                </div>            
            </div> 

             <div class="columns">
                <div class="column is-5">
                    <p>Nome do palestrante </p>
                    <input class="input is-hovered" type="text">
                </div>   
                 <div class="column is-7">
                    <p>Mine curriculo</p>
                    <input class="input is-hovered" type="text">
                </div>            
            </div> 

            <a class="button is-fullwidth">Cadastrar evento</a>
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
    name: 'formEventos'
}
</script>

