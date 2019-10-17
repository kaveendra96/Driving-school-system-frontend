import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Link,Route} from 'react-router-dom';
import TraineerTable from './Admin-component/Traineer-table';
import StudentTable from './Admin-component/Student-table';
class Admin extends Component{
    render(){
        return(
            <div
                style={{
                position: 'absolute', left: '50%', top: '30%',
                transform: 'translate(-50%, -50%)'
                }}>
                
                <div className="container">
                    <Link to="/admin/traineer" className="btn btn-light btn-lg mx-4">Traineers</Link>
                    <Link to="/admin/student" className="btn btn-dark btn-lg mx-4">Students</Link>

                    <Route path="/admin/traineer" component={TraineerTable}/>
                    <Route path="/admin/student"  component={StudentTable} />



                </div>

          </div>
        )
    }
}
export default Admin;