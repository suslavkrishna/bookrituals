<template>
    <div class="grid grid-cols-2 gap-10 ">
        <div class="card bg-slate-100">
        <p>display Rituals</p>
        <tr v-for="(ritual,index) in rituals" :key="rituals.RitualID">
            <td>
                {{ index + 1 }}
            </td>
            <td>
                <p @click="assign_id(ritual.RitualID)">{{ ritual.RitualTitle }}</p>
            </td>
        </tr>
    </div>
    <div class="card ">
        <div class="bg-slate-100">
            Add / Edit Ritual Date
        </div>
        <div>
            <form @submit.prevent="postritualsdates(ritualid)" method="post">
               Date : <input v-model="RitualDateRef" type="text" id="ritual_date" 
               pattern="(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0,1,2])\/(19|20)\d{2}" required />
               {{ RitualDateRef }}
                
               Price : <input v-model="RitualPriceRef" type="number" id="ritual_price" required />
               {{ RitualPriceRef }}

               <button type="submit" id="adddate">Add/Edit</button>
            </form>
        </div>
        <div>display dates</div>
        <div class="bg-slate-100">
            <tr v-for="(rd,index) in ritualdates" :key="rd.RitualDateID">
                <td>
                    {{ index + 1 }}
                </td>
                <td>
                    <p>{{ rd.RitualDate }}</p>
                </td>
                <td>
                    <p>{{ rd.price }}</p>
                </td>
                <td>
                    Edit
                </td>
            </tr>
        </div>
    </div>
    
    </div>
</template>

<script setup>
    const rituals = ref(null)
    rituals.value = await getrituals()
      
    async function getrituals()
    {
        return await $fetch("/api/rituals/rituals?id=1")
    }

    const RitualDateRef = ref(null)
    const RitualPriceRef = ref(null)

    async function insertritualdate()
    {
        console.log(ritualid.value,RitualDateRef.value , RitualPriceRef.value)
        return await $fetch("/api/ritualdates/ritualdates",{
            method: 'POST',
            body: {
                RitualID: ritualid.value,
                RitualDate : '2024-07-31',
                RitualPrice : RitualPriceRef.value
            }
        })
    }   

    const ritualdates = ref(null)
    const ritualid = ref(null)
   

    //let assign_categoryid = ref(null)

    async function assign_id(id)
    {
        console.log(id)
        console.log(getritualdates(id))
        ritualid.value = id
        ritualdates.value = await getritualdates(id)
    }

    async function getritualdates(id)
    {
        return await $fetch("/api/ritualdates/ritualdates?id="+id)
    }

    async function postritualsdates(id)
    {
        console.log("form submit="+id)
        insertritualdate()
        ritualdates.value = await getritualdates(id)
        console.log(ritualdates.value)
    }
    
    definePageMeta({
        layout: 'admin',
        middleware: ["auth-admin"]
    })
</script>

<style scoped>

</style>