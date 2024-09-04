<template>
    <div>
       <div class="bg-slate-300">
               <div><br/></div>
               <div class=" grid grid-cols-1 pr-5 pl-5 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5">
                   <div>
                    <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                     <div> My Profile</div>                  
                     <div><br/></div>
                   
                         <Eventsmenu></Eventsmenu>
                   
                        <div></div>
                    </div>
                   </div>
                   <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                     <div> My Profile</div>                  
                     <div><br/></div>
                   
                     <form method="post" @submit.prevent="addrituals">
                       <div>
                         Ritual Name :  <input type="text" required v-model="form.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        
                        </div> 
                       <div>
                         Ritual Price :  <input type="text" required  v-model="form.price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        
                        </div> 
                       <div>
                         <p>Ritual Category : </p>
                         <div class="pr-5 pl-5" v-for="(cat,index) in VarahiCategoriesRef" :key="cat.RitualCategoryid">
                            <input type="radio" required v-model="form.categoryid" id="category"  :value="cat.RitualCategoryID" />
                            &nbsp;
                            <label for="html">{{ cat.RitualCategory }}</label><br>
                         </div>                     
                        </div>
                       <div><br/></div>
                       <div>
                           <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                               Add Ritual
                           </button>
                       </div> 
                    </form>   
                   </div>
                   <div>
                    
                   </div>
               </div>
               {{ form }}
               <div><br /></div>
               
       </div>
   </div>
</template>

<script  setup>
import Rituals from '~/pages/devotee/rituals.vue';



    const VarahiCategoriesRef = ref(null)
  
    VarahiCategoriesRef.value = await getcategories()
      
    async function getcategories()
    {
        return await $fetch("/api/rituals/varahicategories")
    }

    const VarahiRitualsRef = ref(null)
  
    VarahiRitualsRef.value = await getvarahirituals()
    
    async function getvarahirituals()
    {
        return await $fetch("/api/rituals/varahirituals")
    }

    const form = reactive({
        id:"",
        name:"",
        price:"",
        categoryid:""
    })

    async function addrituals(e) {
	//isDisabledRef.value = true;
	console.log(form)
    await $fetch("/api/rituals/varahianyritual", {
		method: "POST",
		body: {
			name: form.name,
			price: form.price,
            categoryid: form.categoryid
		}
	});

	await navigateTo("/admin/events/varahi/varahirituals", {external: true})
}

definePageMeta({
        layout: 'admin'
        //middleware: ["auth-admin"]
    })
</script>

<style lang="scss" scoped>

</style>