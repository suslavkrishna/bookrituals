<template>
    <div>
        <div class="w-full">
                <div class="grid p-10 lg:grid-cols-3 sm:grid-cols-3 md:grid-cols-3 bg-slate-50 text-center">
                    
                    <div class="text-right"> <p @click="previousmonth()">Previous Month</p></div>
                    <div><b>{{months[new Date(year,monthref,1).getMonth()]}} {{ year }}</b></div> 
                    <div class="text-left"> <p @click="nextmonth()">Next Month</p></div> 
                </div>
            
        </div>
        <div>
            <div v-for="item in calendardateswitheventsref">
                <div class="p-5">
                    {{ new Date(year,monthref,item.monthdate).toDateString() }}
                   
                     <p v-for="ritualobj in item.eventdate">
                        {{ ritualobj.RitualTitle }}
                     </p>
                </div>
                <div>
                    <hr>
                </div>
            </div>
        </div> 
        <div>
            <div v-for="(item,index) in calendardateswitheventsref.monthdate">
                <div class="p-5">
                    {{ index }}   {{  new Date(year,monthref,item).toDateString() }} 
                </div>
                <div>
                    <hr>
                </div>
            </div>
        </div>
        <div>
            <div v-for="(item,index) in ritualdatesref" :key="item.RitualDate">
                {{ item }} 
                {{ new Date(item.RitualDate).getDate() }}
                {{ new Date(item.RitualDate).getMonth() }}
           </div>
        </div>
</div>
{{ calendardateswitheventsref }}
</template>

<script setup>


async function getritualdates()
{
        return await $fetch("/api/ritualdates/calendarrituals");
}
const ritualdatesref = ref(null)
ritualdatesref.value =await getritualdates()
//console.log(ritualdatesref.value)
function getval()
{
    return "test";
}

function geteventdate(year, month , date,)
{
   //ritualdatesref.value
   console.log(ritualdatesref.value)
   
   //new Date(item.RitualDate).getDate()
   ritualdatesref.value.forEach(element => {
        
        const dateval = element.RitualDate
        const loopdate = new Date(dateval).getDate()
        const loopmonth = new Date(dateval).getMonth()
        console.log(loopdate,loopmonth,date,month)
        if((loopdate == date) && (loopmonth == month))
        {
           
           return "18 8 thuis is matched date";
          // console.log("matched date:",date,month)
        }
    });
    //const checkdate = 
   //const vals = ritualdatesref.value.findIndex(objevent => objevent.RitualDate === "2024-07-31T00:00:00.000Z" );
   //console.log(vals)
}


let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const monthref = ref(month)
const yearref= ref(2024)
const calendardatesref= ref([])

const calendardateswitheventsref = reactive([])
    const weekday = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat"
    ]

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

loadmonth(year,month)

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

async function loadmonth(year,month)
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


    // Loop to add the dates of the current month
    for (let i = 1; i <= lastdate; i++) 
    {
       // Check if the current date is today
        let isToday = i === date.getDate()
        && month === new Date().getMonth()
        && year === new Date().getFullYear()
        ? "active"
        : "";
        lit[j] = `${i}`;
        j++;
    }

    calendardatesref.value = lit
    console.log(lit)
    console.log(lit.length)
    //calendardateswitheventsref.monthdate = lit
    //calendardateswitheventsref[1].eventdate =11111;
    // ritualdatesref.value
     
     const events  =await getritualdates()
     
     console.log(events)


     let prefixmonth ='0';
     let dayprefix ='0';
     let datetocheck 
     const monthtocompare = monthref.value +1;
     let objdate = null;
     let eventobject = null;
     calendardateswitheventsref.splice(0)
     for(var i=0;i<lit.length;i++)
     {

        if(monthtocompare <10)
        {
            prefixmonth = "0"+ monthtocompare.toString()
        }
        else
        {
            prefixmonth = monthtocompare.toString()
        }
        if(lit[i] < 10)
        {
            dayprefix = "0" + lit[i]
        }
        else
        {
            dayprefix = lit[i]
        }

        //console.log(prefixmonth)
        datetocheck = '2024-'+prefixmonth+'-'+dayprefix+'T00:00:00.000Z'
        //console.log(datetocheck)
        const found = events.find((element) => element.RitualDate == datetocheck);
        let results= events.filter(x => x.RitualDate == datetocheck);
        console.log("this is results:",results)
        if(results.length >0)
        {
            console.log(found) 
           // console.log(prefixmonth ,lit[i], datetocheck)    

           objdate = {monthdate:lit[i],eventdate: results}
        } 
        else
        {
            objdate = {monthdate:lit[i],eventdate:""}
        }
       
        //objdate = {monthdate:lit[i],eventdate:i}
        calendardateswitheventsref.push(objdate)
    }
}




</script>

<style  scoped>

</style>