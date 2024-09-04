<template>
    <div>
        <div class="bg-slate-300">
                <div><br/></div>
                <div class=" grid grid-cols-1 pr-5 pl-5 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5">
                  <div></div>
                  <div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                   
                    <div class="grid grid-cols-1 pr-5 pl-5 lg:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-5">
                        <div> 
                          <nuxt-link to="/devotee/profile"> My Profile </nuxt-link>
                        </div>
                        <div>
                          <nuxt-link to="/devotee/changepassword">  Change Password </nuxt-link>
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
                            <h3>Family Members</h3>
                        </div>
                        <div><br/></div>
                        <div>
                          Name :  <input type="password" v-model="form.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div> 
                        <div>
                          Relationship with Primary Devotee :  
                          <select v-model="form.relation" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                                <option>Brother</option>
                                <option>Brother in Law</option>
                                <option>Daughter</option>
                                <option>Daughter in Law</option>
                                <option>Father</option>
                                <option>Father in Law</option>
                                <option>Grand Daughter</option>
                                <option>Grand Son</option>
                                <option>Husband</option>
                                <option>Mother</option>
                                <option>Mother in Law</option>
                                <option>Sister</option>
                                <option>Sister in Law</option>
                                <option>Son</option>
                                <option>Wife</option>
                            </select>
                        
                        
                        </div>   
                        <div>
                          Gender :   <select v-model="form.gender" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                                <option>Male</option>
                                <option>Female</option>
                                <option>Others</option>
                            </select>
                        </div> 
                      
                        <div><br/></div>
                        <div>
                            <button  @click.prevent="login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Add Family Members</button>
                        </div> 
                    </form>   
                    </div>
                    <div>
                        {{ form }}
                    </div>
                </div>
        </div>
    </div>
</template>

<script setup>
 const form = reactive({
        name:"",
        relation:"",
        gender:"",
    })


    async function addfamilymembers()
    {
        const returnvalue = await $fetch("/api/users/family", {
		    method: "POST",
		    body: {
			    family: form,
                userid: 2 //session.value.user.userid
		    }
	    });
    }
</script>

<style lang="scss" scoped>

</style>