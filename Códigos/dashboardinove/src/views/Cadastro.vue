<template>
    <div class="columns is-desktop">
        <div class="column infos">
            <img class="logo" src="../assets/logo-in.png" alt="">
            Portal de gerenciamento da plataforma INOVE

        </div>
        <div class="column inputs">
            <div>
                <div class="tabs is-centered">
                    <ul>
                        <li><a href="/#/login">Login</a></li>
                        <li class="is-active"><a>Cadastro</a></li>
                    </ul>
                </div>
                <div class="campos-texto">
                    <div class="nome">
                    Nome:
                    <input class="input" type="text" placeholder="Nome">
                    </div>
                    <div class="email">
                    Email:
                    <input class="input" type="text" placeholder="Email">
                    </div>
                    <div class="senha">
                    Senha:
                    <input class="input senha" type="text" placeholder="Senha">
                    </div>
                    <div class="senha">
                    Confirmar senha:
                    <input class="input senha" type="text" placeholder="Confirmar senha">
                    </div>

                    <a class="button is-medium" href="/#/home">Cadastrar</a>
                </div>
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped>
   	@import '../colors.scss';

    .columns{
        padding: 0;
        margin: 0;
        height: 100vh;
    
    }
    .infos{
        background-color:$purple;
        color: white;
        font-size: 16pt;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .logo{
        padding-bottom: 5vh;
        width: 30%;
    }

    .inputs{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        .tabs{
            margin-bottom: 5vh;
        }

        .nome, .email, .senha{
            padding-bottom: 10px;
        }

        .button{
            margin-left: 30%;
            margin-top: 30px;
            background-color: $purple;
            color: $white;
        }
    }


</style>

