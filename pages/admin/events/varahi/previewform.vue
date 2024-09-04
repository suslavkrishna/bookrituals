<template>
    <div>
       <div class="bg-slate-300">
               <div><br/></div>
               <div class=" grid grid-cols-1 pr-5 pl-5 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5">
                   <div>
                        <Eventsmenu></Eventsmenu>
                   </div>
                   <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                     <div> My Profile</div>                  
                     <div><br/></div>                   
                     <form method="post">
                       <div>
                         Name :  <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                       </div> 
                       <div>
                           Gender : 
                           <select class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                               <option>Male</option>
                               <option>Female</option>
                               <option>Others</option>
                           </select>
                       </div>  
                       <div>
                         Email :  <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                       </div> 
                       <div>
                         Mobile :  <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                       </div>  
                       <div><br/></div>
                       <div>
                           <button  @click.prevent="login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                               Update Profile
                            </button>
                       </div> 
                   </form>   
                   </div>
                   <div></div>
               </div>
       </div>
   </div>
</template>

<script setup>
definePageMeta({
        layout: 'admin'
        //middleware: ["auth-admin"]
    })
</script>

<style lang="scss" scoped>

</style>