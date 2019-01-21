<template>
	<div>
		<navbar color="is-purple"></navbar>	
		<div class="home">
			<section class="hero top is-fullheight" id="top">
				<div class="hero-body">
					<div class="container">
						<h1 class="title">
							Inovação, tecnologia <br>
							& Empreendedorismo
						</h1>
						<h2 class="subtitle">
							Núcleo de desenvolvimento de <br>
							ações inovadoras e impactantes
						</h2>
					</div>
				</div>
			</section>

			<about></about>

			<pillars></pillars>

			<foot></foot>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import '../colors.scss';
	.hero.top {
		background-image: url('../assets/top-image.jpg');
		background-attachment: fixed;
		background-size: cover;

		.hero-body {
			background: $purpleTransparent;

			.container {
				.title, .subtitle {
					color: $white;
				}

				.title {
					font-size: 3em;
					line-height: 55px;
				}

				.subtitle {
					font-size: 2em;
					margin-top: 15px;
				}
			}
		}
	}
</style>

<script>
import Navbar from './Navbar';
import About from './About';
import Pillars from './Pillars';
import Footer from './Footer';

export default {
	name: 'home',

	components: {
		Navbar, About, Pillars,
		'foot': Footer
	},

}
</script>