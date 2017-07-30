import * as React from'react'
import  {Li} from'./itemOfMenu'
import './header.css'


let menu=['main','about','gallery','contact','coments']
export let Header = ({changeContent})=>{
    return(
    <header className="header container">
        <div className="foto">
            <img src="contents/foto.jpg" className="img-circle" alt="Cinque Terre" width="150" height="150"/>
        </div>
        <div className="menu">
            <span></span>
            <div className="burger">                
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className='topMenu'>
                {
                    menu.map((item,index)=>{
                        return <Li key={index} index={index} item={item} changeContent={changeContent}/>
                    })
                }
            <li className="chat-mobile-button"><img src="contents/chat.png"/></li>
            </ul>

        </div>  
    </header>
    ) 
}