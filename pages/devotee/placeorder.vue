<template>
    
    <div>
        <div class="card bg-slate-100 px-8 py-8 text-center">
            Address 
        </div>
        <div v-if="addressedit">
        <div class="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
        <div class="text-center">
            <div>
                <input type="radio" value="Indian residing in India" v-model="form.selectednational"> Indian residing in India
            </div>
            <div>
                <input type="radio" value="Indian residing abroad with Indian Passport" v-model="form.selectednational"> Indian residing abroad with Indian Passport

            </div>
            <div>
                <input type="radio" value="Foreign National" v-model="form.selectednational"> Foreign National
            </div>
            <div>
                <input type="radio" value="Indian residing abroad with OCI" v-model="form.selectednational"> Indian residing abroad with OCI
            </div>
           
        </div>
        <div class="text-center">
            <div>
               <input type="text"  v-model="form.address" placeholder="address" required />
            </div>
            <div>
               <input type="text"  v-model="form.city" placeholder="city" required />
            </div>
            <div>
               <input type="text"  v-model="form.state" placeholder="state" required />
            </div>
            <div>
              <select v-model="form.country">
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
            </div>
            <div>
               <input type="text"  v-model="form.pin" placeholder="pincode" required />
            </div>
        </div>
    </div>
    <div class="card bg-slate-100 px-8 py-8 text-center">
              <p @click="saveaddress()" class=" lg:w-96 sm:w-50 bg-blue-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">Save Address</p>
            </div>
       
    </div>
</div>
<div v-if="addressdisplay">
   
    <div class="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2">
        <div class="text-center">
            <div><b>Address:</b> {{ form.address }}</div>
           <div><b>City:</b> {{ form.city }}</div>
            <div><b>State:</b> {{ form.state }}</div>
           <div><b>Country:</b> {{ form.country }}</div>
            <div><b>Pin:</b> {{ form.pin }}</div>
            
        </div>
        <div>
            <b>Nationality:</b> {{ form.selectednational }}
        </div>
    </div>
        <div class="card bg-slate-100 px-8 py-8 text-center">
              <p @click="editaddress()" class="lg:w-96 sm:w-50 bg-blue-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">Edit Address</p>
        </div>
    </div>
    <div><br /></div>
    <div>
        <div class="card bg-slate-100 px-8 py-8 text-center">
            Orders
        </div>
        <div><br /></div>
        <div>
            <div class="grid lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-1">
            <div class="grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2">
              <div class="pr-5 pl-5" v-for="(cartritual,index) in data" :key="cartritual.RitualDateID">
            
              <div class="card bg-slate-100 px-8 py-8 text-center">
               <p >{{ cartritual.RitualTitle }} <br/> , 
                Date : {{ useDateFormat(cartritual.RitualDate, 'YYYY-MMMM-DD')  }} <br/>
                Price: {{ cartritual.price }} ,
               </p>
               </div>
              <div><br /></div>
          </div>
          </div>
          <div><br /></div>
          <div class="card bg-slate-100 px-8 py-8 text-center">
            Total Amount  : {{ totalprice }}
          </div>
          <div><br /></div>
          <div>
            <div class="card bg-slate-100 px-8 py-8 text-center">
              <p @click="initiatepayment()" class=" lg:w-96 sm:w-50 bg-blue-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded">Pay Amount</p>
            </div>  
          </div>
        </div>
        </div>
    </div>
    <div>
        Payment Gateway
    </div>
</template>

<script setup>
   import { useDateFormat } from '@vueuse/core';
   let scripturl = "https://checkout.razorpay.com/v1/checkout.js";
const { loggedIn, user, session, fetch, clear } = useUserSession()
    //const selectedNational = ref()

    const addressedit = ref(true)
    const addressdisplay = ref(false)
    const closeorders = ref(true)
    const addressref = ref(null)
    const totalprice = ref(0)
    //const displayaddressval = ref("test address")
    
    async function loadrazorpayscript()
    {
        return new Promise((resolve,reject)=>{
            const script = document.createElement('script');
            script.src = scripturl;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                reject(new Error('Failed to load Razorpay Script'))
            };
            document.body.appendChild(script);
        })
        
    }

    async function fetchorderdetails()
    {
        try
        {
            const orderdata = await $fetch("/api/cart/orders", {
		    method: "POST",
		    body: {
			    userid: 2 //session.value.user.userid
		        }
	        });
            return orderdata;
        }
        catch(error)
        {
            throw new Error('failed to fetch order details')
        }
    }

    async function handlepaymentsuccess(response)
    {
        console.log(response)
        const orderdata = await $fetch("/api/cart/completeorder", {
		    method: "POST",
		    body: {
			    userid: 2, //session.value.user.userid
                orderid: response.razorpay_order_id,
                paymentid:response.razorpay_payment_id,
                signature:response.razorpay_signature
                //updatedate transaction date
		        }
	        });
        //razorpay_order_id: "order_OopUPfh4FqaK5n"​
        //razorpay_payment_id: "pay_OopUp4oO1j9Z1w"​
        //razorpay_signature: "52ea4d91fea228431cdf304ee120a63d2ef9d6dd069bd4389612e7de3f6d643a"
        navigateTo("/devotee/mybookings", { external: true })
    }

    async function initiatepayment()
    {
        try
        {
            await loadrazorpayscript();
            const orderid = await fetchorderdetails()

            const options = {
                key:'rzp_test_iprtqJyTTJ0ZSa',
                amount: totalprice.value * 10,
                currency:'INR',
                name:'Devipuram',
                description:'Devipuram Rituals Booking By Devotee',
                order_id:orderid,
                image:'Devipuram',
                //"callback_url": "http://localhost:3000/devotee/completeorder",
                handler: (response) => {
                    handlepaymentsuccess(response)
                },
                "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
                "name": "Krishna", //your customer's name
                "email": "iamsuslav@gmail.com",
                "contact": "917660919191" //Provide the customer's phone number for better conversion rates 
                 },
            };
            const razorpayinstance = new window.Razorpay(options);
            razorpayinstance.open();
        }
        catch(error)
        {

        }
    }


    const form = reactive({
        address:"",
        city:"",
        state:"",
        country:"",
        pin:"",
        selectednational:""
    })

    async function saveaddress()
    {
        addressedit.value = false;
        addressdisplay.value = true;
        await $fetch("/api/cart/address", {
		method: "POST",
		body: {
			address: JSON.stringify(form),
            cartid: 5			
		}  });
      addressref.value =   await getaddress(5)
      //displayaddressval.value = updatedaddress
      
    }

    async function editaddress()
    {
        //addressref.value =   await getaddress(5)
       
        addressedit.value = true;
        addressdisplay.value = false;
    }

    function closeordersfunc()
    {
        closeorders.value = !closeorders;
    }

    
    addressref.value = await getaddress(5)
    console.log(addressref.value[0])
    loadaddressform()
      
    function loadaddressform()
    {
        form.address = addressref.value[0].address;
        form.city =addressref.value[0].city;
        form.state = addressref.value[0].state;
        form.country = addressref.value[0].country;
        form.pin = addressref.value[0].pin;
        form.selectednational = addressref.value[0].selectednational;
    }

    async function getaddress(id)
    {
        return await $fetch("/api/cart/address?id="+id)
    }

     //console.log(loggedIn.value)
        const cartItemListfromstore = useRitualStore();
        const cartitems = cartItemListfromstore.getRitualItems
        //console.log(cartitems)
       // console.log(session.value.user.userid)

        //const transactionStatus = await $fetch("/api/transactions/transaction?id="+session.value.user.userid);
        const returnvalue = await $fetch("/api/cart/cart", {
		    method: "POST",
		    body: {
			    cartitems: cartitems,
                userid: 2 //session.value.user.userid
		    }
	    });

        const cartitemsfromdb = await $fetch("/api/cart/cart?id="+2)
        console.log(cartitemsfromdb[0].cartitems)
        const data = eval(cartitemsfromdb[0].cartitems)
        console.log(data)
        totalprice.value = data.reduce((n, {price}) => n + price, 0)
        
        


    if(loggedIn.value)
    {
        console.log(returnvalue)
    }
    else
    {
        console.log(loggedIn.value)
    } 

    
</script>

<style lang="scss" scoped>

</style>