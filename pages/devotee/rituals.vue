<template>
    <div>
        <div><br/></div>
        <div class="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-5 pr-5 pl-5">
            <div class="card bg-slate-100 px-8 py-8 text-center">
                  <nuxt-link to="/devotee/monthlyrituals">Monthly Rituals</nuxt-link>   
            </div>
            <div class="card bg-slate-100 px-8 py-8 text-center">
                 <nuxt-link to="/devotee/yearlyrituals">Yearly Rituals</nuxt-link>
            </div>
            <div class="card bg-slate-100 px-8 py-8 text-center"> 
                <nuxt-link to="/devotee/astamatrukas"> Astamatruka Abhisekams</nuxt-link>
               </div>
            <div class="card bg-slate-100 px-8 py-8 text-center">
                 
                 <nuxt-link to="/devotee/requesthomam">Homams Request</nuxt-link>
                </div>
            <div class="card bg-slate-100 px-8 py-8 text-center"> Annadanam</div>
            <div class="card bg-slate-100 px-8 py-8 text-center"> Go Seva</div>
            <div class="card bg-slate-100 px-8 py-8 text-center"> </div>
            <div class="card bg-slate-100 px-8 py-8 text-center"> </div>
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