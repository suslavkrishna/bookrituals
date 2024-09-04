export default defineNuxtRouteMiddleware((to,from) => {

    const { loggedIn, user, session, fetch, clear } = useUserSession()
    console.log("no sessuion --",loggedIn.value)
    if(loggedIn.value)
    {
        console.log(session.value.user.userrole)
        if(session.value.user.userrole == 1)
        {
            return  navigateTo("/admin", {external: true})   
        }

        if(session.value.user.userrole == 2)
        {
            return  navigateTo("/staff", {external: true})
        }
        
        if(session.value.user.userrole == 3)
        {
            return  navigateTo("/devotee", {external: true})
        }        
    }
 
})