<template>
    <nav class="navbar" :class="color" ref="navbar">
			<div class="container">
				<div class="navbar-brand">
				<a href="top" class="logo">
					<img src="../assets/logo-in.png" alt="Logo">
				</a>
				<span class="navbar-burger burger" data-target="navbarMenuHeroA">
					<span></span>
					<span></span>
					<span></span>
				</span>
				</div>
				<div id="navbarMenuHeroA" class="navbar-menu">
				<div class="navbar-end">
					<a href="#about" class="navbar-item is-active">O Inove</a>
					<a href="#pillars" class="navbar-item">Pilares</a>
					<a class="navbar-item">Eventos</a>
					<a href="#footer" class="navbar-item">Fale Conosco</a>
					
				</div>
				</div>
			</div>
		</nav>
</template>

<style lang="scss" scoped>
	@import '../colors.scss';

	.logo{
		width: 100px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;


		& > img{	
			height: 100%
		}

		&:hover{
			 background: $whiteTransparent;
				border-radius: 3px;
				transition: all 0.3s;
		}
	}
	.navbar {
		background: transparent;
		position: fixed;
		width: 100vw;
		transition: all 0.3s;
		padding: 20px;

		&.is-outtop {
			background: $blackTransparent;
			padding: 5px;
			box-shadow: 0 5px 10px $blackTransparent;

			&.is-purple {
				background: $purpleTransparent;
			}

			&.is-orange {
				background-color: $orangeTransparent;
			}
		}

		a.navbar-item {
			color: $white;

			&:hover {
				background: $whiteTransparent;
				border-radius: 3px;
				transition: all 0.3s;
			}
		}
	}
</style>

<script>
export default {
	name: 'Navbar',

	props: ['color'],

	 mounted(){
		window.scroll({
			behavior: 'smooth' 
		})

		window.onscroll = () => {
			if(window.scrollY >= 100) this.$refs.navbar.classList.add('is-outtop');
			else this.$refs.navbar.classList.remove('is-outtop');
		}
	}
}

   
</script>

