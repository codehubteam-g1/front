<template>
	<div class="columns">
		<div class="column"> </div>
		<div class="column is-half"> 
			<Producto ></Producto>
			<Producto></Producto>
			<Producto></Producto>
			<Producto></Producto>
			<Producto></Producto>
			<div class="card">
				<div class="card-content">
					<div class="media">
						<div class="media-right">
							<span class="tag is-light is-large">Total</span>
						</div>				
					</div>
				</div>
			</div>
		</div>
		<div class="column"> </div>
	</div>
</template>

<script type="text/javascript">
import Producto from '../../components/producto'
import Orders from './orders'
import axios from "axios"
export default {
    components: {
		Producto,
		Orders
	},
	data(){
     return {
         productos: []
     }
   	},
  	methods: {
      getOrders(){
          axios.get("http://localhost:3002/products").then(response  => {
              this.productos = response.data.ord
          	})
      	}
  	},
  	mounted(){
		this.getOrders()
  }
	
}

</script>

<style>
</style>