<template>
    <div>
            test component {{ props.categoryid }}
            <p>display rituals</p>
            <tr v-for="(ritual,index) in rituals" :key="ritual.RitualID">
                <td>
                    {{ index + 1 }}
                </td>
                <td>
                    <nuxt-link   to="/admin/rituals">{{ ritual.RitualTitle }}</nuxt-link>
                </td>
            </tr>
            {{ rituals }}
    </div>
</template>

<script setup>
    const props = defineProps(["categoryid"])

    console.log("test",props.categoryid)

    //const rituals = ref(null)
    const rituals = computed(() =>
    
    getrituals(props.categoryid)
    )
   
    //rituals.value = await getrituals(props.categoryid)
    //console.log("test rituals")
    //console.log(rituals)
    
    async function getrituals(id)
    {
        console.log(id)
        return await $fetch("/api/rituals/rituals?id="+id)
    }

    
</script>

<style scoped>
    
</style>