<template>
    <div>
       {{ eventdata }}

    </div>
</template>

<script setup>
const { loggedIn, user, session, fetch, clear } = useUserSession()

const eventdata = ref()

const event = useRequestEvent()
eventdata.value = event;


//console.log("session details:",sessiondetails)
if(loggedIn.value)
{
    const id = session.value.user.userid;
    const result = await $fetch("/api/cart/cart?id="+id)
    console.log(result)
}



</script>

<style lang="scss" scoped>

</style>