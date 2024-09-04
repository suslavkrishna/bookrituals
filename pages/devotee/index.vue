
<template>
    <div>
        <div class="bg-slate-300">
            <div><br/></div>
                <div>
                    <div class="grid grid-cols-1 pr-5 pl-5 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-5">
                        <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                My Upcomming Bookings

                        </div>
                        <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                Upcomming Rituals
                        </div>
                        <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                
                        </div>
                        <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                        </div>
                    </div>
                </div>
                <div><br/></div>
                <div>
                    <div class="grid grid-cols-1 pr-5 pl-5 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-5">
                        <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div class="grid grid-cols-1 pr-5 pl-5 lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-5"> 
                            <div class="bg-gradient-to-l from-cyan-300 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    Sevas & Rituals
                                </div>
                                <div class="bg-gradient-to-r from-cyan-300 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    Accomodation
                                </div>
                                <div class="bg-gradient-to-l from-cyan-300 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    Donations
                                </div>
                            </div>
                        </div>
                        <div class="col-span-3 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div class="grid grid-cols-1 pr-5 pl-5 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-5"> 
                                <div class="bg-gradient-to-l from-yellow-300 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    Shiva Ratri & Kamakhya Kalyanam
                                </div>
                                <div class="bg-gradient-to-l from-green-300	 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    Shyama Navaratri
                                </div>
                                <div class="bg-gradient-to-l from-yellow-300 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    Lalita Navaratri
                                </div>
                                <div class="bg-gradient-to-l from-green-300 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    Guru Pournami & Chandi Homam
                                </div>
                                <div class="bg-gradient-to-l from-green-300 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    Varahi Navaratri
                                </div>
                                <div class="bg-gradient-to-l from-yellow-300 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    Sravana Masam
                                </div>
                                <div class="bg-gradient-to-l from-green-300 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    Ganesh Navaratri
                                </div>
                                <div class="bg-gradient-to-l from-yellow-300 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    Guruji Birthday Celebrations    
                                </div>
                                <div class="bg-gradient-to-l from-yellow-300 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    Dasara Brahmotsavam
                                </div>
                                <div class="bg-gradient-to-l from-green-300 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    Karthika Masam
                                </div>
                                <div class="bg-gradient-to-l from-yellow-300 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                   Datta Jayanti
                                </div>
                                                        
                            </div>
                        </div>
                        </div>
                </div>
                <div><br/></div>
        </div>





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



    definePageMeta({
        layout: 'default'
    })
</script>