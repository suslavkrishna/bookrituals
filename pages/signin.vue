<!--pages/login.vue-->
<template>
	<div class="bg-slate-300">
		<div><br /></div>
        <div class="grid flex flex-col  space-y-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-3 gap-5 pr-5 pl-5">
		<div></div>
		<div class="text-center bg-slate-100 ">
			<div class="text-lg font-bold">Devipuram</div>
			<div><br/></div>
			<div class="">
			<h1 class="text-lg font-bold">Sign in</h1>
			</div>
			<div><br/></div>
		<form method="post">
			<div class=" ">
				
				<input name="username" id="username" placeholder="email" v-model="UserNameRef" required class="peer 
				 text-blue-gray-700 font-sans font-normal outline outline-0 
		focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border
		 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 
		 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 
		 " />
			</div>
			<div><br/></div>
			<div class="">
				
				<input type="password" name="password" placeholder="password" v-model="PasswordRef" id="password" required 
				class="peer 
				 text-blue-gray-700 font-sans font-normal outline outline-0 
		focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border
		 placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 
		 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 
		 " />
		 </div>
			<div><br/></div>
			<button  @click.prevent="login" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				Signin</button>
			<div><br/></div>
		</form>
		</div>
		<div></div>
		</div>
		<div><br/></div>
	</div>
</template>
  
<script lang="ts" setup>
definePageMeta({
        layout: 'default',
        middleware: ["already-signed"]
    })
const UserNameRef = ref(null)
const PasswordRef = ref(null)
const isDisabledRef = ref(false)

async function login(e: Event) {
	isDisabledRef.value = true;
	await $fetch("/api/auth/signin", {
		method: "POST",
		body: {
			username: UserNameRef.value,
			password: PasswordRef.value,
		}
	});
	await navigateTo("/devotee", {
  external: true
})
}
</script>
