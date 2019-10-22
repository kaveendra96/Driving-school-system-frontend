import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import StudentList from './Student-list/Student-List';

class StudentTable extends Component{
    render(){
        
        return(
          <div className="container">
                <h4 style={{textAlign:'center'}}>Student list</h4>
                <StudentList/>
              

          </div>
        )
    }
}
export default StudentTable;