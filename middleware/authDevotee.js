export default defineNuxtRouteMiddleware((to,from) => {

    const { loggedIn, user, session, fetch, clear } = useUserSession()
    console.log("no sessuion --",loggedIn.value)
    if(!loggedIn.value)
    {
        console.log("not logged in entered to redirect")
       return  navigateTo("/signin", {external: true})
    }
    else
    {
        console.log(session.value.user.userrole)
        if(session.value.user.userrole != 3)
        {
          return  navigateTo("/signin", {external: true})
        }
    }
 
})