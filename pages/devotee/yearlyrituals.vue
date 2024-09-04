<template>
    <div>
        <div><br /></div>
        <div class="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-5 pr-5 pl-5">
            <div class="card bg-slate-100 px-8 py-8 text-center"> Shiva Ratri / Kamakhya Kalyanam</div>
            <div class="card bg-slate-100 px-8 py-8 text-center"> Shyama Navaratri</div>
            <div class="card bg-slate-100 px-8 py-8 text-center"> Lalita Navaratri</div>
            <div class="card bg-slate-100 px-8 py-8 text-center"> 
               
                <nuxt-link to="/devotee/varahi/varahiform">Varahi Navaratri</nuxt-link>
            </div>
            <div class="card bg-slate-100 px-8 py-8 text-center"> Guru Pournami</div>
            <div class="card bg-slate-100 px-8 py-8 text-center"> Sravana Masam</div>
            <div class="card bg-slate-100 px-8 py-8 text-center"> Ganapati Navaratri </div>
            <div class="card bg-slate-100 px-8 py-8 text-center"> Dasara Brahmotsavam</div>
            <div class="card bg-slate-100 px-8 py-8 text-center"> Karthika Masam</div>
            <div class="card bg-slate-100 px-8 py-8 text-center"> Datta Jayanti</div>
        </div>
    </div>
</template>
<script setup>
    definePageMeta({
        layout: 'default',
       // middleware: ["auth-devotee"]
    })
</script>

<style scoped>

</style>