import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom'
import Header from './Component/Header';
import Welcome from './Component/Home/Welcome';
import Admin from './Component/Home/Admin';



class App extends React.Component{
    render(){
        return(
            <div>
                <BrowserRouter>
                    <Header/>
                    <Route exact path="/" component={Welcome}/>
                    <Route path="/admin" component={Admin}/>
                </BrowserRouter>
            
            </div>
           
        )
    }

}
ReactDOM.render(<App />, document.getElementById('root'));

