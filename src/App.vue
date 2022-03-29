<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
	<header>
		<div class="wrapper">
			<nav>
				<RouterLink to="/dental">Dental</RouterLink>
				<RouterLink to="/hospital">Hospital</RouterLink>
				<RouterLink to="/primary-care">Primary Care</RouterLink>

				<!-- <RouterLink to="/create">Create Post</RouterLink> -->
			</nav>
			<div class="locale-changer">
        <label>change language </label>
				<select v-model="$i18n.locale">
					<option
						v-for="locale in $i18n.availableLocales"
						:key="`locale-${locale}`"
						:value="locale"
					>
						{{ locale }}
					</option>
				</select>
			</div>
		</div>
	</header>

	<main>
		<RouterView />
	</main>
</template>

<style>
#app {
	max-width: 1280px;
	margin: 0 auto;
	padding: 2rem;

	font-weight: normal;
}

nav {
	display: flex;
	justify-content: center;
}

nav a {
	margin: 0 20px;
	text-decoration: none;
}

main {
	padding: 100px 0;
}
</style>
