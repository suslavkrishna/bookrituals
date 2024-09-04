

<template>
    <div>
        this is admin/index
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'admin',
        middleware: ["auth-admin"]
    })
</script>