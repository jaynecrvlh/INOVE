<template>
	<div class="footer" >
    <section class="footer-logo" id="footer">
      <img src="../assets/logo-inove.svg" alt="">
    </section>

    <section class="footer-contact">
      <div class="contact-address">
        <div class="contact-title">
          Endereço
        </div>
        <div class="contact-desc">
          Av. José de Freitas Queiroz, 5003 <br>
           Cedro – Quixadá – Ceará 63902-580
        </div>

      </div>
   <div class="contact-us">
        <div class="contact-title">
          Fale Conosco
        </div>
        <div class="contact-desc">
          projetos@quixada.ufc.br<br>
          (88) 3412 - 0919
        </div>

      </div>
       <div class="contact-social">
        <div class="contact-title">
          Siga-nos
        </div>
        <div class="contact-desc">
          <a href="https://www.facebook.com/inoveufc/">
            <img src="../assets/facebook-letter-logo.svg" alt="">          
          </a>
          <a href="https://www.instagram.com/inove_ufcquixada/">
            <img src="../assets/instagram-logo.svg" alt="">
          </a>
        </div>

      </div>
       <div class="contact-connected">
        <div class="contact-title">
          Conecte-se com a gente
        </div>
        <div class="connected-input">
          <input type="text" placeholder="Digite seu email">

          <button> > </button>
        </div>

        <div>
          Receba as novidades do INOVE
        </div>

      </div>


    </section>

    <section class="contact-copyright">
      © Copyright 2018. Todos os direitos reservados. INOVE.
    </section>
   
	</div>
</template>

<style lang="scss" scoped>
  @import '../colors.scss';

  
	.footer {
    background-color: $purple;
		width: 100vw;
    height: 40vh;
    padding-left: 80px;

		.footer-logo {
      float: left;
      width: 100%;
    
     
      & img{
        width: 50px;
      }
    }
  
    .footer-contact {
      width: 95%;
      color: $white;
      display: flex;
      align-items: center;  
      
        .contact-title{
          font-size: 16pt;
          font-weight: bold;
          padding-bottom: 7px;
        }  
        
        .contact-address{
          width: 25%;
        }

        .contact-us{
          width:20%;
        }

        .contact-social{
          width: 15%;

          & img{
            height: 30px;
            margin: 10px;
            
          }

        }

        .contact-connected{
          width: 25%;

          & input{
            border: none;
            height: 30px;
            width: 200px;
            border-radius: 7px 0 0 7px;
            padding-left: 10px;
            color: $purple;

          }

            & button{
            background-color: $grey;
            height: 30px;
            width: 40px;
            border: none;
            border-radius:0 7px 7px 0;
          
          }
        }
      }

    .contact-copyright{
      margin-top: 30px;
      padding-top: 10px;
      width: 80%;
      color: $white;
      border-top: solid 1px white;
    }

}
</style>

<script>
export default {
  name: 'Foot'
}
</script>

	
