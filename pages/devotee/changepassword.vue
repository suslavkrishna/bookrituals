<template>
    <div>
        <div class="bg-slate-300">
                <div><br/></div>
                <div class=" grid grid-cols-1 pr-5 pl-5 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5">
                  <div></div>
                  <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                   
                    <div class="grid grid-cols-1 pr-5 pl-5 lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-5">
                        <div> 
                          <nuxt-link to="/devotee/profile">My Profile </nuxt-link>
                        </div>
                        <div>
                          <nuxt-link to="/devotee/family">  Family Members </nuxt-link>
                        </div>
                      </div>  
                  </div>
                  <div></div>
                </div>
                <div class=" grid grid-cols-1 pr-5 pl-5 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5">
                    <div></div>
                    <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <form method="post">
                        <div>
                            <h3>Change Password</h3>
                        </div>
                        <div><br/></div>
                        <div>
                          Old Password :  <input type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div> 
                        <div>
                          New Password :  <input type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>   
                        <div>
                          Confirm New Password :  <input type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div> 
                      
                        <div><br/></div>
                        <div>
                            <button  @click.prevent="login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Update Password</button>
                        </div> 
                    </form>   
                    </div>
                    <div></div>
                </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>