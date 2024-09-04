<template>
    <div class="grid grid-cols-2 gap-10 ">
        <div class="card bg-slate-100">
        <p>display Rituals</p>
        <tr v-for="(ritual,index) in rituals" :key="rituals.RitualID">
            <td>
                {{ index + 1 }}
            </td>
            <td>
                <p @click="assign_id(ritual.RitualID,ritual.RitualTitle)">{{ ritual.RitualTitle }}</p>
            </td>
        </tr>
    </div>
    <div class="card ">
        <div class="bg-slate-100">
            Add / Edit Ritual Date :  <b> {{ displayRitualName }} </b>
        </div>
        <div v-if="form.RitualID!=''">
            <form @submit.prevent="postritualsdates(ritualid)" method="post">
               Date : <input v-model="form.RitualDate" type="text" id="ritual_date" 
                required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
               {{ RitualDateRef }}
               Price : <input v-model="form.RitualPrice" type="number" id="ritual_price" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
               {{ RitualPriceRef }}
                <br/>
               <button v-if="form.RitualDateID==''" type="submit" id="adddate" class="bg-blue-500 hover:bg-blue-700 text-white font-bold 
               py-2 px-4 rounded">Add</button>
               <button v-if="form.RitualDateID" type="submit" id="adddate" class="bg-blue-500 hover:bg-blue-700 text-white font-bold 
               py-2 px-4 rounded">Edit</button>
               <p v-if="form.RitualDateID" @click="enteraddmode()" class="w-20 bg-blue-500 hover:bg-blue-700 text-white 
               font-bold py-2 px-4 rounded"> Cancel</p>
            </form>
        </div>
        <div>display dates</div>
        <div>
            <b>
                {{ displayRitualName }}
            </b>
        </div>
        <div class="bg-slate-100">
            <tr v-for="(rd,index) in ritualdates" :key="rd.RitualDateID">
                <td>
                    {{ index + 1 }}
                </td>
                <td>
                    <p>{{  new Date(rd.ritualdate).toISOString().slice(0, 10)}}

                    </p>
                </td>
                <td>
                    <p>{{ rd.price }}</p>
                </td>
                <td>
                    <p @click="editritual(rd.ritualdateid,rd.ritualdate,rd.price)" class="w-20 bg-blue-500 hover:bg-blue-700 text-white 
                    font-bold py-2 px-4 rounded"> Edit</p>
                </td>
            </tr>
            
        </div>
    </div>
    {{  form }}
    </div>
</template>

<script setup>
    const rituals = ref(null)
    rituals.value = await getrituals()
      
    async function getrituals()
    {
        return await $fetch("/api/rituals/rituals?id=1")
    }

    async function enteraddmode()
    {
        form.RitualDateID = ""
        form.RitualDate = ""
        form.RitualPrice = ""
    }

    const initialState = {
        RitualID:"",
        RitualDateID:"",
        RitualDate: "",
        RitualPrice: ""
    };
    const form = reactive({
        ...initialState
    })
    const RitualDateRef = ref(null)
    const RitualPriceRef = ref(null)

    async function insertritualdate()
    {
        console.log(ritualid.value,RitualDateRef.value , RitualPriceRef.value)
        return await $fetch("/api/ritualdates/ritualdates",{
            method: 'POST',
            body: {
                RitualID: form.RitualID,
                RitualDate : form.RitualDate,
                RitualPrice : form.RitualPrice
            }
        })
    }   

    async function updateritualdate()
    {
        console.log(ritualid.value,RitualDateRef.value , RitualPriceRef.value)
        return await $fetch("/api/ritualdates/updateritualdates",{
            method: 'POST',
            body: {
                RitualDateID: form.RitualDateID,
                RitualDate : form.RitualDate,
                RitualPrice : form.RitualPrice
            }
        })
    }   

    const ritualdates = ref(null)
    const ritualid = ref(null)
    const displayRitualName = ref(null)
   

    //let assign_categoryid = ref(null)

    async function assign_id(id,ritualname)
    {
       // console.log(id)
       // console.log(getritualdates(id))
        ritualid.value = id
        ritualdates.value = await getritualdates(id)
        displayRitualName.value = ritualname
        Object.assign(form, initialState);
        form.RitualID = id
    }

    async function getritualdates(id)
    {
        return await $fetch("/api/ritualdates/ritualdates?id="+id)
    }

    async function editritual(ritualdateid,ritualdate,ritualprice) 
    {
         const customdate = new Date(ritualdate).toISOString().slice(0, 10);
        // RitualDateRef.value =customdate
         //RitualPriceRef.value = ritualprice

         form.RitualDateID = ritualdateid
         form.RitualID = ritualid
         form.RitualPrice = ritualprice
         form.RitualDate = customdate
    }

    async function postritualsdates(id)
    {
        console.log("form submit="+id)
        if(form.RitualDateID == "")
        {
           await insertritualdate()
        }
        else
        {
           await updateritualdate()
        }
        
        form.RitualDateID = ""
        form.RitualDate = ""
        form.RitualPrice = ""
       
        ritualdates.value = await getritualdates(id)
        console.log(ritualdates.value)
    }
    
    definePageMeta({
        layout: 'admin'
        //middleware: ["auth-admin"]
    })
</script>

<style scoped>

</style>