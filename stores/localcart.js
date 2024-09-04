import { defineStore, skipHydrate } from 'pinia'
import { useLocalStorage } from '@vueuse/core';

export const useRitualStore = defineStore('ritualitems',() =>
{
    const { loggedIn, user, session, fetch, clear } = useUserSession()
    const ritualItemsList = useLocalStorage('ritualitems',[]);
   

    const getRitualItems = computed(() => ritualItemsList.value)
    const getRitualItemsCount = computed(() => ritualItemsList.value.length)
    const getTotalCartPrice = computed(() =>  ritualItemsList.value.reduce((n, {price}) => n + price, 0))
    

   /* async function getRitualItemsFromDB() {
        if(loggedIn.value)
            {
                const userid = session.value.user.userid
                console.log("entered login section",userid)
                return await $fetch("/api/cart/cart?id="+userid)
                //console.log("this is data:",data)
            }
    } */

    function addRitualItem(item)
    {
        let index = ritualItemsList.value.findIndex(product => product.RitualDateID === item.RitualDateID);
        if(index == -1) {
            ritualItemsList.value.push(item)
        }
    }

    function removeRitualItem(item)
    {
        ritualItemsList.value = ritualItemsList.value.filter(product => product.RitualDateID !== item.RitualDateID);
    }

    function getAddCartStatus(item)
    {
        let index = ritualItemsList.value.findIndex(product => product.RitualDateID === item.RitualDateID);
        if(index == -1) {
           return true;
        }
        else
        {
           return false;
        }
    }

    function getRemoveCartStatus(item)
    {
        let index = ritualItemsList.value.findIndex(product => product.RitualDateID === item.RitualDateID);
        if(index == -1) {
           return false;
        }
        else
        {
           return true;
        }
    }

    return {ritualItemsList:skipHydrate(ritualItemsList),getRitualItems,addRitualItem,
        getRitualItemsCount,removeRitualItem,getTotalCartPrice,getAddCartStatus,getRemoveCartStatus}
})

