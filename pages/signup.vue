<!--pages/signup.vue-->
<template>
	<div>
        <div class="bg-slate-300">
            <div><br/></div>
                <div>
                    <div class="grid grid-cols-1 pr-5 pl-5 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-5">
                        <div></div>
						<div class=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
							<h1>Create an account</h1>
							<form method="post" action="/api/auth/signup" @submit.prevent="signup">
								<div >
									<label htmlFor="username">Username</label>
									<input name="username" id="username" v-model="UserNameRef" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
								</div>  
								<br />
								<div class="bg-slate-100">
									<label htmlFor="password">Password</label>
									<input type="password" name="password" v-model="PasswordRef" id="password" required class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
								</div>
								<br />
								<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Signup</button>
							</form>
                        </div>
                        <div></div>
                    </div>
                </div>
			</div>
		</div>
	
</template>
<script lang="ts" setup>

const UserNameRef = ref(null)
const PasswordRef = ref(null)


async function signup(e: Event) {
	
	await $fetch("/api/auth/signup", {
		method: "POST",
		body: {
			username: UserNameRef.value,
			password: PasswordRef.value,
			userrole: 3
		}
	});
	//await navigateTo("/");
}
</script>
