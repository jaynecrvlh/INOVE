<template>
	<div class="about columns is-desktop" id="about">
    <section class="about-icon column">
      <img src="../assets/project-management.svg" alt="">

    </section>

    <section class="about-infos column">
      <div class="infos-container">
        <div class="infos-title">
          Nossa missão
        </div>

        <div class="infos-desc">
          Fomentar o desenvolvimento tecnológico e 
          social da Região do Sertão Central e Estado 
          do Ceará, atuando na pesquisa e desenvolvimento de 
          ciência e tecnologia, e na geração de novos empreendimentos, 
          de forma integrada e auto-sustentada com a sociedade.
        </div>
      </div>
    </section>
    
	</div>
  </template>


<style lang="scss" scoped>
	@import '../colors.scss';

	.about {
    background-color: $purple;
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
  name: 'About'
}
</script>


	
