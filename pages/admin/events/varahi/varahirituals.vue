<template>
    <div>
       <div class="bg-slate-300">
               <div><br/></div>
               <div class=" grid grid-cols-1 pr-5 pl-5 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5">
                <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <Eventsmenu></Eventsmenu>
                   </div>
                   <div class="col-span-2 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                     <div><br/></div>
                     <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <div> Varahi Rituals</div>                  
                        <div><br/></div>
                        <div>
                            <table>
                            <tr>
                                <td>Edit</td>
                                <td>Category</td>
                                <td>Title</td>
                                <td>Price</td>
                            </tr>
                            <tr class="pr-5 pl-5" v-for="(ritual,index) in VarahiRitualsRef" :key="ritual.RitualCategoryid">
                                    <td>
                                       
                                        
                                        <NuxtLink :to="`/admin/events/varahi/addrituals?id=${ritual.RitualID}`">Edit</NuxtLink>
                                    </td>
                                    <td> {{ ritual.ritualcategory }}</td>
                                    <td> {{ ritual.ritualtitle }}</td>
                                    <td> {{ ritual.price }}</td>
                            </tr> 
                        </table>
                        </div>
                    </div>
                   </div>
                   
               </div>
       </div>
   </div>
</template>

<script setup>

    const VarahiRitualsRef = ref(null)
  
    VarahiRitualsRef.value = await getvarahirituals()
    
    async function getvarahirituals()
    {
        return await $fetch("/api/rituals/varahirituals")
    }


definePageMeta({
        layout: 'admin'
        //middleware: ["auth-admin"]
    })
</script>

<style lang="scss" scoped>

</style>