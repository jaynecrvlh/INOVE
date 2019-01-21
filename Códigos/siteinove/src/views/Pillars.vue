<template>
  <div class="section-pillars" id="pillars" >
    <section class="title">
      Nossos pilares
    </section>


    <div class="pillars columns" >
      <section class="entrepreneurship column is-3 ">
        <div class="div-test">
              <div class="entrepreneurship-ball pillars-ball ">
                <img src="../assets/startup.svg" alt="">
              </div>
          </div>
        <div class="container-white column is-12">       
          <div class="entrepreneurship-title pillars-title">
            Empreendedorismo
          </div>
          <div class="entrepreneurship-desc pillars-desc column is-12">
            Através de programa contínuo de aceleração de 
            ideias e incubação de startups, o INOVE 
            fomenta uma nova geração de empreendedores e
             empresas que nascem e já se estabelecem na região.
          </div>
          <router-link to="/home-entrep">
            <a class="button column is-12">Saiba mais</a>
          </router-link>
        </div>

      </section>

      <section class="search column is-3">
        <div class="div-test"> 
          <div class="search-ball pillars-ball">
            <img src="../assets/magnifier.svg" alt="">
          </div>
        </div>
        
        <div class="container-white column is-12">
          <div class="search-title pillars-title">
            Pesquisa
          </div>
          <div class="search-desc pillars-desc column is-12">
            Esse eixo compreende laboratórios de
             informática para execução de projetos de pesquisa 
             e desenvolvimento, sejam financiados por editais públicos,
              diretamente por empresas, ou através de programas de 
              incentivo tais como Lei do Bem e Lei de Informática
          </div>
          <div class="pillars-construction"> EM CONSTRUÇÃO </div>
        </div>
      </section>

      <section class="business column is-3">
        <div class="div-test">
          <div class="business-ball pillars-ball">
            <img src="../assets/hand-shake.svg" alt="">
          </div>
        </div>        
        <div class="container-white column is-12">
          <div class="business-title pillars-title">
            Empresarial
          </div>
          <div class="business-desc pillars-desc column is-12">
            O ambiente de empresas compreende espaços que atendem 
            desde empresas de médio porte a empreendedores individuais,
             através do seu espaço de coworking.

          </div>
          <div class="pillars-construction">EM CONSTRUÇÃO </div>
        </div>
      </section>

    </div>
  </div>
</template>

<style lang="scss" scoped>
	@import '../colors.scss';

	.section-pillars {
    height: 90vh;

    .title{
      display: flex;
      justify-content: center;
      padding: 40px 0 40px 0;
      color: $purple;
    }


    .div-test{
      margin-top: 20px;
      position: absolute;

    }
    .pillars{
      height: 65vh;
      display: flex;
      justify-content: center;

      .container-white{
        background-color: $white;
        height: 55vh;
        margin-top: 7vh; 
        border: solid 0.1px rgb(241, 241, 241);
        padding-top: 50px;
      }

      .pillars-ball{
        width: 60px;
        height: 60px;
        border-radius: 100%; 
        background-color: $white;
        display: flex;
        justify-content: center;
        align-items: center;

      }

      .pillars-title{
        font-size: 16pt;
        font-weight: bold;
        display: flex;
        justify-content: center;
      }

      .pillars-desc{
        text-align: center;
        padding-top: 15px;
        height: 30vh;
        font-size: 11pt;
      }

      .pillars-construction{
        display: flex;
        justify-content: center;
      }
      

      .entrepreneurship {
        background-color: $orange;
        padding: 0;
        color: $orange;
        display: flex;
        justify-content: center;

        .entrepreneurship-ball{
          border: solid 1px $orange; 


          & img{
          width: 35px;
        } 
        } 

        .button{  
        color: white;
        background-color: $orange;
        display: flex;
        align-items: center;
        justify-content: center;
  
        }

      }  
      .search {
        background-color: $teal;
        padding: 0;
        color: $teal;
        display: flex;
        justify-content: center;

        .search-ball{
          border: solid 1px $teal; 

          & img{
          width: 30px;
          }
        }  

      }

      .business{
        background-color: $lilac;
        padding: 0;        
        color: $lilac;
        display: flex;
        justify-content: center;

        .business-ball{
          border: solid 1px $lilac; 

          & img{
            width: 30px;
          }
        }  
      }
    }
  }
</style>

	
