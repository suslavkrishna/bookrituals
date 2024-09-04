<template>
     
    <div>
        <div><br /></div>
            <div class="grid grid-cols-1 pr-5 pl-5 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-5">
                
                <div class="pr-5 pl-5" v-for="(ritualdate,index) in ritualdates" :key="ritualdates.RitualDateID">
           
                    <div   class="card bg-slate-100 px-8 py-8 text-center">
                         <p > {{ ritualdate.RitualTitle }} <br/>
                            Date : {{ useDateFormat(ritualdate.RitualDate, 'YYYY-MMMM-DD')  }} <br/> Price: {{ ritualdate.price }}</p>
                        <div >
                         <p v-if="cartItemListfromstore.getAddCartStatus(ritualdate)"  @click="addtocart_statusupdate(ritualdate,index)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</p>
                        </div>
                        <br/>
                        <div>
                         <p v-if="cartItemListfromstore.getRemoveCartStatus(ritualdate)" @click="cartItemListfromstore.removeRitualItem(ritualdate)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Remove From Cart</p>
                         </div>
                        
                    </div>
                    <div><br /></div>                  
                </div>
        </div>
    </div>
</template>
<script setup>
    import { useDateFormat } from '@vueuse/core';

    const route = useRoute()
    console.log(route.params.id)
    
    const ritualdates = ref(null)
    ritualdates.value = await getritualdates(route.params.id)
      
    async function getritualdates(id)
    {
        return await $fetch("/api/ritualdates/ritualdates?id="+id)
    }

    const cartdisplayRef = reactive(["True","False","True","False","True","False"])
      
    const cartItemListfromstore = useRitualStore();
      
    function addtocart_statusupdate(ritualdateitem,index)
    {
       cartItemListfromstore.addRitualItem(ritualdateitem)
    } 

    
   
    definePageMeta({
        layout: 'default'
    })
</script>

<style scoped>

</style>