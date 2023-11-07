<script>
	import '../app.postcss';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar>
	<NavBrand href="/">
		<a href="/"
			><img
				src="https://commission.europa.eu/themes/contrib/oe_theme/dist/ec/images/logo/positive/logo-ec--en.svg"
				class="mr-3 h-6 sm:h-9"
				alt="EU Commision logo"
			/></a
		>
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			>Tender Visualization</span
		>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		<NavLi href="/">Home</NavLi>
		<NavLi href="/about">About</NavLi>
	</NavUl>
</Navbar>
<slot />
