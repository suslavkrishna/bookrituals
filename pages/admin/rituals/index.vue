
<template>
<div>
    <div>
        <p>display categories</p>
        <tr v-for="(category,index) in cat" :key="category.RitualCategoryID">
            <td>
                {{ index + 1 }}
            </td>
            <td>
                <nuxt-link @click="call_sub_category_component(category.RitualCategoryID)"  to="/admin/rituals">{{ category.RitualCategory }}</nuxt-link>
            </td>
        </tr>
    </div>
    <div>
        <subcategories :categoryid=assign_categoryid />
        <component :is="subcategories" :categoryid=assign_categoryid  />
        
    </div>
</div>
</template>

<script setup>
    import testcomp from '~/components/testcomp.vue';
    import subcategories from '~/components/subcategories.vue';
    const cat = ref(null)
    cat.value = await getritualcategories()

    //console.log(cat.value)
    
    async function getritualcategories()
    {
        return await $fetch("/api/ritualcategories/ritualcategories")
    }

    let assign_categoryid = ref(null)

    function call_sub_category_component(id)
    {
        //console.log(id)
        assign_categoryid.value = id;
    }


    definePageMeta({
        layout: 'admin',
        middleware: ["auth-admin"]
    })

   
</script>