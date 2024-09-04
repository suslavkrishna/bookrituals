<template>
    <div>
        <div v-if="loggedIn">
            <h1>Welcome {{ user.login }}!</h1>
            <p>Logged in since {{ session.loggedInAt }}</p>
            <p>{{ session.user }}</p>
            <button @click="clear">Logout</button>
        </div>
        <div v-else>
            <h1>Not logged in</h1>
        </div>

        <AuthState v-slot="{ loggedIn, clear }">
            <div v-if="loggedIn">
                <h1>Welcome {{ session.user.username }}!</h1>
                <button @click="clear">Logout</button>
                {{ usernameref }} dfdff
            </div>
            <NuxtLink v-else to="/login">Login</NuxtLink>
        </AuthState>
    </div>
</template>


<script setup>
const { loggedIn, user, session, fetch, clear } = useUserSession()

const usernameref = ref(null)
//usernameref.value = session.user.username
usernameref.value = session
</script>

<style lang="">
    
</style>