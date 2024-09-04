<template>
    <div>
        <div class="grid grid-cols-1 pr-5 pl-5 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5">
            <div></div>
            <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div>
                    <VueDatePicker v-model="date"></VueDatePicker>
                </div>
                <div><br /></div>
                <div class="items-center text-center">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Check for Homam</button>
                </div>
                <div><br /></div>
                <div>
                    <div class="pr-5 pl-5" v-for="(homam,index) in homamslist" :key="homamslist.RitualDateID">
                        <div   class="items-center card bg-slate-100 px-8 py-8 text-center">
                                <p > {{ homam.RitualTitle }}  
                                    <br/> Price: {{ homam.price }}</p>
                                   
                            <p v-if="cartItemListfromstore.getAddCartStatus(homam)"  @click="addtocart_statusupdate(homam,index)" class="items-center w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</p>
                       
                            <p v-if="cartItemListfromstore.getRemoveCartStatus(homam)" @click="cartItemListfromstore.removeRitualItem(homam)" class=" w-1/2  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Remove From Cart</p>
                        
                            </div>
                            <div><br /></div>   
                       
                    </div>
                    
                </div>
               
            </div>
            <div></div>
        </div>
    </div>
    
</template>

<script setup>
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref();

const homamslist = ref(null)
homamslist.value = await getritualdates()
      
    async function getritualdates(id)
    {
        return await $fetch("/api/rituals/requesthomams")
    }

    const cartItemListfromstore = useRitualStore();
      
      function addtocart_statusupdate(ritualdateitem,index)
      {
         cartItemListfromstore.addRitualItem(ritualdateitem)
      } 
</script>

<style lang="scss" scoped>

</style>