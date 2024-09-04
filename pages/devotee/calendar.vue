<template>
    <div>
        <div class="w-full ">
                <div class="pt-5 pb-5 grid lg:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 bg-slate-50 text-center">
                    
                    <div class="text-right"> <p @click="previousmonth()"><b>previous month</b></p></div>
                    <div><b>{{ months[monthref] }} {{ year }}</b></div> 
                    <div class="text-left"> <p @click="nextmonth()"><b>Next month</b></p></div> 
                    
                </div>
            
        </div>
        <div class="relative flex w-full">
           
        <table class="w-full">
  <thead class="pt-5 pb-5">
    <tr>
        <th class="text-center"> <p class="bg-slate-300 pt-5 pb-5">Sun</p></th>
        <th class="text-center"> <p class="bg-slate-300 pt-5 pb-5">Mon</p></th>
        <th class="text-center"> <p class="bg-slate-300 pt-5 pb-5">Tue</p></th>
        <th class="text-center"> <p class="bg-slate-300 pt-5 pb-5">Wed</p></th>
        <th class="text-center"> <p class="bg-slate-300 pt-5 pb-5">Thu</p></th>
        <th class="text-center"> <p class="bg-slate-300 pt-5 pb-5">Fri</p></th>
        <th class="text-center"> <p class="bg-slate-300 pt-5 pb-5">Sat</p></th>        
    </tr>    
  </thead>
  <tbody>
      <tr v-for="rowIdx in Math.ceil(calendardatesref.length / 7)">
        <td class="text-center" v-for="item in calendardatesref.slice(7 * (rowIdx - 1), 7 * rowIdx)">
            <p class="bg-slate-50 pt-5 pb-5">{{ item  }}</p>
        </td>
      </tr>
      
  </tbody>
</table>


</div>
</div>


    
</template>

<script setup>



let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const monthref = ref(month)
const yearref= ref(2024)
const calendardatesref= ref([])
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

loadmonth(2024,month)

function nextmonth()
{
    
    if(monthref.value >10)
    {
        monthref.value = 11
    }
    else
    {
        monthref.value = monthref.value +1;
    }

     date = new Date(2024,monthref.value,2);
     year = date.getFullYear();
     month = date.getMonth();
     loadmonth(year,month)
}

function previousmonth()
{
    if(monthref.value >0)
    {
        monthref.value = monthref.value -1;
    }
    else
    {
        monthref.value = 0;
    }
    date = new Date(2024,monthref.value,2);
year = date.getFullYear();
 month = date.getMonth();
    loadmonth(2024,month)
    
}

function loadmonth(year,month)
{
    let name = months[month];

// Get the first day of the month
let dayone = new Date(year, month, 1).getDay();

// Get the last date of the month
let lastdate = new Date(year, month + 1, 0).getDate();

// Get the day of the last date of the month
let dayend = new Date(year, month, lastdate).getDay();

// Get the last date of the previous month
let monthlastdate = new Date(year, month, 0).getDate();

// Variable to store the generated calendar HTML
let lit = [];
let j=0;
// Loop to add the last dates of the previous month
for (let i = dayone; i > 0; i--) 
{
    lit[j] =`${monthlastdate - i + 1}`;
    j++;
}

// Loop to add the dates of the current month
for (let i = 1; i <= lastdate; i++) {

    // Check if the current date is today
    let isToday = i === date.getDate()
        && month === new Date().getMonth()
        && year === new Date().getFullYear()
        ? "active"
        : "";
    lit[j] = `${i}`;
    j++;
}

let test = "";
// Loop to add the first dates of the next month
for (let i = dayend; i < 6; i++) {
    lit[j] = `${i - dayend + 1}`
    j++;
}
calendardatesref.value = lit
}



</script>

<style  scoped>

</style>