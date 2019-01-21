<template>
    <div class="forms" >
        <span>* campos obrigatórios </span>

        <div class="control">
            <div class="input-form">
            <p>Nome da startup <span>*</span></p>
            <input class="input is-hovered" type="text">
            </div>

            <div class="input-form">
            <p>Descrição da startup <span>*</span></p>
            <textarea class="textarea is-hovered"></textarea>
            </div>

            <div class="columns">
                <div class="column">
                    <p>Telefone da startup <span>*</span></p>
                    <input class="input is-hovered" type="text">
                </div>   
                 <div class="column">
                    <p>Email da startup <span>*</span></p>
                    <input class="input is-hovered" type="text">
                </div>            
            </div> 

            <div class="columns">
                <div class="column is-8">
                    <p>Link do site</p>
                    <input class="input is-hovered" type="text">
                </div>   
                 <div class="column is-4">
                    <p>Logo da startup <span>*</span></p>
                    <input class="input is-hovered" type="file">
                </div>            
            </div> 

             <div class="columns">
                <div class="column is-8">
                    <p>Outro link: </p>
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
    name: 'formStartup'
}
</script>

