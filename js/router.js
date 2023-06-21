import Home from "./home/home.js"



const routes = [

    {
        path:'/onews/',
        component : Home
    }

]


const router = () => {

    console.log("window.location.pathname",window.location.pathname)

    if(window.location.pathname === routes[0].path || window.location.pathname === '/index.html'){ 
       routes[0].component()
    }



}


export { router}

