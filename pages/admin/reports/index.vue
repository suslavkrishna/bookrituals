<template>
    <div>
        this is report admin
    </div>
</template>
<script setup>
    definePageMeta({
        layout: 'admin',
        middleware: ["auth-admin"]
    })
</script>