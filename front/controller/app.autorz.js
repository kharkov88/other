let app_autorization = (function(){
    let watingLogin,visibleLogin,stateMap,setState,handleClick,initModule;

    watingLogin = ()=>{
        $('body').toggleClass('waiting')
    }
    visibleLogin = ()=>{
        $('.content-login').toggleClass('login-visible')
    }
    
    initModule = ()=>{    
    }
    return {
        initModule,
        handleClick,
        watingLogin,
        visibleLogin
    }
}())

export default app_autorization;