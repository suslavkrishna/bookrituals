<template>
    <div>
        <header class="bg-[#FFCCFFCC]">
        <nav class="flex items-center justify-between px-12 h-16 lg:gap-8">
            <nuxt-link class="text-2xl font-bold border-2 px-2 py-1" to="/devotee">Devipuram</nuxt-link>
            <div :class="{ 'top-16': !isActive, '-top-full': isActive }" class="dropdown-menu absolute  left-0 max-lg:bg-[#FFCCFFCC] w-full flex flex-col gap-6 items-center py-2 text-lg font-bold lg:static lg:flex-row lg:justify-between">
                <ul  class="flex flex-col items-center gap-6 lg:flex-row lg:gap-8">
                    <li class="hover:text-orange-400"> 
                        <nuxt-link to="/devotee">Dashboard</nuxt-link>   
                    </li>
                    <li class="hover:text-orange-400">
                        <nuxt-link to="/devotee/rituals">Rituals</nuxt-link>
                    </li>
                    <li class="hover:text-orange-400">
                        <nuxt-link to="/devotee/rituals">Ritual Packages</nuxt-link>
                    </li>
                    <li class="hover:text-orange-400">
                        <nuxt-link to="/devotee/mybookings">My Bookings</nuxt-link>
                    </li>
                    <li class="hover:text-orange-400">
                        <nuxt-link to="/devotee/mycart">My Cart</nuxt-link>
                    </li>
                    <li class="hover:text-orange-400">
                        <nuxt-link to="/devotee/profile">Profile</nuxt-link>
                    </li>
                    <li class="hover:text-orange-400">
                        <nuxt-link to="/devotee/calendarlist">Calendar</nuxt-link>
                    </li>
                    <template v-if="loggedIn">
                        <p>
                            Hi
                            {{ user?.username }}
                        </p>
                        <p @click="logout">Log out</p>
                    </template>
                    <p v-else><nuxt-link to="/devotee">Hi Guest</nuxt-link>, <nuxt-link to="/signin">Signin</nuxt-link> || <nuxt-link to="/signup">Signup</nuxt-link></p>
                </ul>
                <div>
                    <p><router-link class="nav-link" to="/devotee/mycart"><i class="bi bi-cart-check"></i> ({{cartItemListfromstore.getRitualItemsCount}})</router-link></p>
                </div>
            </div>
            <div>
                <button class="relative group flex flex-col items-center gap-6 toggle-button lg:hidden" @click="toggleClass">
                    <div class="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
                    <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                        <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
                        <div class="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
                        <div class="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>
                        <div class="absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 group-focus:translate-x-0 flex w-0 group-focus:w-12">
                        <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 group-focus:rotate-45"></div>
                        <div class="absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 group-focus:-rotate-45"></div>
                        </div>
                    </div>
                    </div>
                </button>
            </div>
        </nav>
        </header>

       
       
        <div>
            <slot />
        </div>
        this is footer
    </div>
</template>
<script setup>
const { loggedIn, user, clear, fetch } = useUserSession();

//fetch()

const logout = () => {
  clear().then(value => {
    console.log('after clear session',value)
    navigateTo("/signin", {external: true})
})
  //navigateTo("/devotee", {external: true})
};

    //get store
const data = useShoppingStore();

const cartItemListfromstore = useRitualStore();

const isActive = ref(true)

    function toggleClass() 
    { 
          isActive.value = !isActive.value; 
          //alert(isActive)
    } 
  


</script>
