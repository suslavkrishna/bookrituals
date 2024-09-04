<template>
    <div>
        <div class="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
            my booking
        </div>
    </div>
</template>
<script setup>
    definePageMeta({
        layout: 'default',
        middleware: ["auth-devotee"]
    })
</script>

<style scoped>

</style>