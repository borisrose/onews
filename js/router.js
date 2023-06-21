import Home from "./home/home.js"



const routes = [

    {
        path:'/PROJET_ONEWS/index.html',
        component : Home
    }

]


const router = () => {


    if(window.location.pathname === routes[0].path){ 
       routes[0].component()
    }



}


export { router}

