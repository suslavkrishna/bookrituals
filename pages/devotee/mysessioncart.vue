<template>
    <div>
        <div class="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
            <div class="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
            <div class="pr-5 pl-5" v-for="(cartritual,index) in cartItemListfromstore.getRitualItems" :key="cartritual.RitualDateID">
            <div class="card bg-slate-100 px-8 py-8 text-center">
               <p >{{ cartritual.RitualTitle }} <br/> , 
                Date : {{ useDateFormat(cartritual.RitualDate, 'YYYY-MMMM-DD')  }} <br/>
                Price: {{ cartritual.price }} ,
              </p>
           </div>
           <div><br /></div>
          </div>
        </div>
          <div>total : {{ totalcart }}</div>
          <div>
            
          </div>
        </div>
    </div>
</template>
<script setup>
      import { useDateFormat } from '@vueuse/core';

    //const cartItemListfromstore = useRitualStore();

    const cartitems = []
    
    //console.log(cartitems.length)
    //console.log(cartitems.reduce((n, {price}) => n + price, 0));
    const totalcart = ref(0)
    totalcart.value = cartitems.reduce((n, {price}) => n + price, 0);

    definePageMeta({
        layout: 'default',
        //middleware: ["auth-devotee"]
    })
</script>

<style scoped>

</style>