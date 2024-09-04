<template>
    <div>
       <div class="bg-slate-300">
               <div><br/></div>
               <div class=" grid grid-cols-1 pr-5 pl-5 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5">
                   <div>
                    <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                 
                    <Eventsmenu></Eventsmenu>
                    </div>
                   </div>
                   <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                     <div> My Profile</div>                  
                     <div><br/></div>
                   
                     <form method="post" @submit.prevent="assigndatetoritual">
                       <div>
                         Select Date : 
                         <VDatePicker v-model="form.date" :attributes="attrs" />
                        </div> 
                       <div>
                           Any Day Any Rituals : 
                           <div class="pr-5 pl-5">
                         
                            <select v-model="form.ritualid" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                                <option  v-for="ritual in VarahiRitualsRef" :value="ritual.RitualID">{{ritual.RitualTitle}}</option>
                            </select>
                            
                            &nbsp;
                         </div>
                       </div>  
                      {{ form }}
                       <div><br/></div>
                       <div>
                           <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                               Assign Dates to Rituals</button>
                       </div> 
                   </form>   
                   </div>
                   <div>
                    <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <div class="pr-5 pl-5" v-for="(rd,index) in VarahiRitualdatesref" :key="rd.ritualdateid">
                          {{ rd.ritualdate }}  {{ rd.ritualtitle }}
                      </div>
                    </div>
                   </div>
                  
               </div>
               
       </div>
   </div>
</template>

<script setup>

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';



const attrs = ref([
  {
    key: 'today',
    highlight: {
      color: 'green',
      fillMode: 'solid'
    },
    dates: new Date()
  }
])

async function getvarahirituals()
  {
      return await $fetch("/api/rituals/varahianyrituals")
  }
const VarahiRitualsRef = ref(null)
  
  VarahiRitualsRef.value = await getvarahirituals()
  
  async function getvarahiassigneddates()
  {
      return await $fetch("/api/rituals/varahianyritualdates")
  }

  const VarahiRitualdatesref = ref(null)
  
  VarahiRitualdatesref.value = await getvarahiassigneddates()

  console.log(VarahiRitualdatesref.value)
 const form = reactive({
    date:"",
    ritualid:""
 })

 async function assigndatetoritual(e) {
	//isDisabledRef.value = true;
  console.log(form.date)
      const customdate = new Date(form.date).toISOString().slice(0, 10);
	console.log(customdate)

    await $fetch("/api/rituals/varahiassigndates", {
		method: "POST",
		body: {
                RitualDate: customdate,
			    RitualID: form.ritualid,
		    }
	    });
      VarahiRitualdatesref.value = await getvarahiassigneddates()
    // update rituals lost ref
	//await navigateTo("/admin/events/varahi/varahirituals", {external: true})
    }

definePageMeta({
        layout: 'admin'
        //middleware: ["auth-admin"]
    })
</script>

<style lang="scss" scoped>

</style>