import { defineStore, skipHydrate } from 'pinia'


export const useRitualDBStore = defineStore('ritualitems',() =>
{
    const { loggedIn, user, session, fetch, clear } = useUserSession()
    const ritualItemsList = ref('ritualitems',[]);
    

    const getRitualItems = computed(() => ritualItemsList.value)
    const getRitualItemsCount = computed(() => ritualItemsList.value.length)
    const getSessionDetails = computed(() => getlogindetails() )
    

    async function getRitualItemsFromDB() {
        if(loggedIn.value)
            {
                const userid = session.value.user.userid
                console.log("entered login section",userid)
                return await $fetch("/api/cart/cart?id="+userid)
                //console.log("this is data:",data)
            }
    }

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

    return {ritualItemsList:skipHydrate(ritualItemsList),getSessionDetails,getRitualItemsFromDB,getRitualItems,addRitualItem,
        getRitualItemsCount,removeRitualItem,getAddCartStatus,getRemoveCartStatus}
})

