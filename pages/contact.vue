<template>
        <div>
            <div v-if="loggedIn">
                <h1>Welcome {{ user.login }}!</h1>
                <p>Logged in since {{ session.loggedInAt }}</p>
                 <button @click="clear">Logout</button>
            </div>
            <div v-else>
                <h1>Not logged in</h1>
            </div>
        </div>
    </template>
    
    
    <script setup>
    const { loggedIn, user, session, fetch, clear } = useUserSession()
    </script>
    
    <style lang="">
        
    </style>