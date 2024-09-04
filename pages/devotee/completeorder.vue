<template>
    <div>
        succcess
        {{ eventdata }}
    </div>
</template>

<script setup>
const eventdata = ref()
const event = useRequestEvent()
eventdata.value = event.value;
console.log(event)
</script>

<style lang="scss" scoped>

</style>