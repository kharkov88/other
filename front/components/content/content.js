import * as React from'react'
import {Sidebar} from'../sidebar'
import {Route}from'react-router-dom'
import {Main}from'../main'
import {AppComment}from'../add_comment'

import './content.css'

export let Content = ({content=()=>{}})=>{
    return  <div className="content container">
                <div className="row">
                    <div className="col-md-2 col-sm-12 col-xs-12">
                        <Sidebar/>
                    </div>
                    <div className="col-md-10 col-sm-12 col-sx-12 main-content">
                        <Route exact path="/" component={Main}/>
                        <Route exact path="/history" component={()=><p>Компонент history</p>}/>
                        <Route exact path="/contact" component={()=><p>Компонент контакты</p>}/>
                        <Route exact path="/comment" component={AppComment}/> 
                        <Route exact path="/login" component={Main}/>
                        <Route exact path="/logout" component={Main}/>
                    </div>
                </div>
            </div>
}