<template>
    <div>
        <div><br /></div>
        <div class="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-5 pr-5 pl-5">
            <div class="card bg-slate-100 px-8 py-8 text-center">
                 <nuxt-link to="/devotee/monthlyritualdates/1">Sahasraksi Pournami Abhisekam</nuxt-link>  
                <!-- <nuxt-link :to="`/devotee/monthlyritualdates/${product.id}`"></nuxt-link>-->
            </div>
            <div class="card bg-slate-100 px-8 py-8 text-center"> Sahasrakshi Amavasya Abhisekam</div>
            <div class="card bg-slate-100 px-8 py-8 text-center"> Ganapati Chaviti Abhisekam</div>
            <div class="card bg-slate-100 px-8 py-8 text-center"> Dattatreya Ekadasi Abhisekam</div>
            <div class="card bg-slate-100 px-8 py-8 text-center"> Monday Shiva Abhisekam</div>
            <div class="card bg-slate-100 px-8 py-8 text-center"> Masa Siva Ratri</div>
            <div class="card bg-slate-100 px-8 py-8 text-center"> Varahi Sahita Chandi Homam </div>
            <div class="card bg-slate-100 px-8 py-8 text-center"> Pournami Annadanam</div>
        </div>
    </div>
</template>
<script setup>
    definePageMeta({
        layout: 'default'
    })
</script>

<style scoped>

</style>