<template>
    <div class="forms" >
        <span>* campos obrigatórios </span>

        <div class="control">
            <div class="input-form">
            <p>Nome do evento <span>*</span></p>
            <input class="input is-hovered" type="text">
            </div>

            <div class="columns">
                <div class="column">
                    <p>Data <span>*</span></p>
                    <input class="input is-hovered" type="date">
                </div>   
                 <div class="column">
                    <p>Documento<span>*</span></p>
                    <input class="input is-hovered" type="file">
                </div>            
            </div>
            <div class="column">
                <p>Outros documento<span></span></p>
                <input class="input is-hovered" type="file">
            </div>  

           
            <a class="button is-fullwidth">Cadastrar edital</a>
        </div>  
        
    </div> 

</template>

<style  lang="scss" scoped>
	@import '../colors.scss';

    .forms{
        padding-top: 10px;
        height: 85vh;
    }

    .button{
        margin-top: 35vh;
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
    name: 'formEditais'
}
</script>

