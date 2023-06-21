import Home from "./home/home.js"



const routes = [

    {
        path:'/index.html',
        component : Home
    }

]


const router = () => {

    console.log("window.location.pathname",window.location.pathname)

    if(window.location.pathname === routes[0].path){ 
       routes[0].component()
    }



}


export { router}

