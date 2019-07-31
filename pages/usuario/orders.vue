<template>
<div>
<div v-for="order in orders" :key="order.id">
    {{order.id}}
</div>
    <table>
        <thead>
            <tr>
                <th>
                    id
                </th>
                <th>
                    status
                </th>
                <th>
                    create_at
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="order in orders" :key="order.id">
                
                <td>
                    {{order.id}}
                </td>
                <td>
                    {{order.orderStatusId}}
                </td><td>
                    {{order.createdAt}}
                </td>

            </tr>
        </tbody>
    </table>
</div>

</template>

<script>
import axios from "axios"
export default {
  data(){
     return {
         orders: []
     }
   },
  methods: {
      getOrders(){
          axios.get(process.env.apiUrl+":3000/api/orders").then(response  => {
              this.orders = response.data.ord
          })
      }
  },
  mounted(){
      this.getOrders()
  }
}
</script>
