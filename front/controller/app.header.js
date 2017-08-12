let app_header = (function(){
    let
        stateToggle=true,
        toggleBurger,
        burgerClick,
        initModule;

    toggleBurger = function(e){
        stateToggle? $('.menu').addClass('open'):$('.menu').removeClass('open')
        stateToggle = !stateToggle;
    }
    burgerClick = function(){
        toggleBurger();
        return false;
    }
    initModule = function(){
        let ww=window.innerWidth;
        if(ww<1200){
            $('.burger').unbind('click',toggleBurger);
            $('.burger').click(toggleBurger);
            $('.topMenu li').unbind('click',toggleBurger)
            $('.topMenu li').click(toggleBurger)
            $('.menu').addClass('tablet-mobile');
            $('.App').addClass('app-mobile');
        }
        else {
            $('.menu').removeClass('tablet-mobile')
            $('.topMenu li').unbind('click',toggleBurger)
        }
    }
    return{
        initModule:initModule
    }
}())

export default app_header;