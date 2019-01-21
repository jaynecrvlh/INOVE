<template>
	<div>
	
		<navbar color="is-orange"></navbar>
		
		<div class="home-entrep">
			<section class="hero top is-fullheight">
				<div class="hero-body">
					<div class="container">
						<h1 class="title">
							Bem vindo ao ambiente de <br>
							empreendedorismo
						</h1>
						<h2 class="subtitle">
							Fique por dentro de todos os eventos, as capacitações,<br> os programas
							de pré-incubação, incubação e aceleração <br>
							de startups	disponíveis no campus da UFC - Campus Quixadá
						</h2>
					</div>
				</div>
			</section>
		</div>

		<about-entrep></about-entrep>
		<cards-entrep></cards-entrep>


	</div>
    
</template>

<style lang="scss" scoped>
	@import '../colors.scss';

		.hero.top {
		background-image: url('../assets/empreendedores.jpg');
		background-attachment: fixed;
		background-size: cover;

		.hero-body {
			background: $orangeTransparent;

			.container {
				.title, .subtitle {
					color: $white;
				}

				.title {
					font-size: 3em;
					line-height: 55px;
				}

				.subtitle {
					font-size: 1.5em;
					margin-top: 15px;
				}
			}
		}
	}

</style>

<script>

import Navbar from './Navbar';
import AboutEntrep from './About-entrep';
import CardsEntrep from './Cards-entrep';

export default {
	name: 'Home-Entrep',

	components:{
		Navbar, AboutEntrep, CardsEntrep
	}
	
}
</script>


