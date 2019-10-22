import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './Component/Header';
import Welcome from './Component/Home/Welcome';
import Admin from './Component/Home/Admin';
import Student from './Component/Home/Student';
import Traineer from './Component/Home/Traineer';



class App extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Header/>
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/student" component={Student}/>
                    <Route path="/traineer" component={Traineer}/>
                </BrowserRouter>
            
            </div>
           
        )
    }

}
ReactDOM.render(<App />, document.getElementById('root'));

