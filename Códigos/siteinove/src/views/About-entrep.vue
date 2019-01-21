<template>
	<div class="about columns is-desktop">
    <section class="about-icon column">
      <img src="../assets/startup-branco.svg" alt="">

    </section>

    <section class="about-infos column">
      <div class="infos-container">
        <div class="infos-title">
          Pré-incubação e incubação de startups
        </div>

        <div class="infos-desc">
          Fomenta principalmente o desenvolvimento social 
          e econômico da região do Sertão Central buscando retenção 
          de talentos e geração de novos negócios; o INOVE também atua na 
          transferência de tecnologia da universidade para o mercado, aceleração e 
          incubação de empreendimentos nascentes e indução do ecossistema empreendedor regional
        </div>
      </div>
    </section>

	</div>
</template>

<style lang="scss" scoped>
	@import '../colors.scss';

	.about {
    background-color: $orange;
	width: 100vw;
    height: 60vh;


	.about-icon {
      display: flex;
      justify-content: center;
      align-items: center;
     

      & img{
        width: 200px;
        
      }

		}
    .about-infos {
      color: $white;
      display: flex;
      justify-content: center;
      align-items: center;


      .infos-container{
        width: 95%;
        padding-right: 30px;

      .infos-title{
        font-size: 20pt;
      }

      .infos-desc{
        font-size: 14pt;
      }

      }

  }
}
</style>

<script>
export default {
  name: 'AboutEntrep'
}
</script>


	
