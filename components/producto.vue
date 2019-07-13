<template>
	<div class="card">
		<div class="card-content">
			<div class="media">
				<div class="media-left">
					<figure class="image is-48x48">
					<img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
					</figure>
				</div>
				<div class="media-content">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Phasellus nec iaculis mauris. 
				<time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
				</div>
				<a class="button is-light"> + </a>
				<span class="tag is-light is-medium">Cantidad</span>
				<a class="button is-light"> - </a>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
import axios from "axios"
export default {
	data(){
		return { 
			"nombre": "Cheese", 
			"cantidad" : 2, 
			"descripcion": "Refrigerated foods", 
			"imagen": "https://bulma.io/images/placeholders/96x96.png"
			}
	}
}

</script>

<style>
</style>