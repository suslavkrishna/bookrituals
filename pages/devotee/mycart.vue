<template>
    <div>
      <div><br /></div>
        <div class="grid lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
            <div class="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
              <div class="pr-5 pl-5" v-for="(cartritual,index) in cartItemListfromstore.getRitualItems" :key="cartritual.RitualDateID">
            
              <div class="card bg-slate-100 px-8 py-8 text-center">
               <p >{{ cartritual.RitualTitle }} <br/> , 
                Date : {{ useDateFormat(cartritual.RitualDate, 'YYYY-MMMM-DD')  }} <br/>
                Price: {{ cartritual.price }} ,
               </p>
               <p v-if="cartItemListfromstore.getRemoveCartStatus(cartritual)" @click="cartItemListfromstore.removeRitualItem(cartritual)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Remove From Cart</p>
              </div>
              <div><br /></div>
          </div>
          </div>
          <div><br /></div>
          <div v-if="cartItemListfromstore.getTotalCartPrice >0">
            <div class="card bg-slate-100 px-8 py-8 text-center">
              total : {{cartItemListfromstore.getTotalCartPrice}}
            </div>
            <div><br /></div>
            <div class="card bg-slate-100 px-8 py-8 text-center">
              <p @click="redirectToPlaceOrder()" class="bg-blue-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">Place order</p>
            </div>
          </div>
          <div v-if="cartItemListfromstore.getTotalCartPrice ==0">
              <p>No Rituals in Cart</p>
              <div class="card bg-slate-100 px-8 py-8 text-center">
              <p @click="redirectToPlaceOrder()" class="bg-blue-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">Navigate to Rituals</p>
            </div>
          </div>
        </div>
    </div>
</template>
<script setup>
    import { useDateFormat } from '@vueuse/core';
      
    const cartItemListfromstore = useRitualStore();

    async function redirectToPlaceOrder()
    {
      await navigateTo("/devotee/placeorder")
    }
   console.log(cartItemListfromstore.getRitualItems)
    //const totalcart = ref(0)
    //totalcart.value = cartItemListfromstore.getRitualItems.reduce((n, {price}) => n + price, 0);

    definePageMeta({
        layout: 'default',
        //middleware: ["auth-devotee"]
    })

</script>

<style scoped>

</style>