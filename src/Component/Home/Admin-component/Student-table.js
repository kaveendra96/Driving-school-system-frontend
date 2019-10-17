import React, { Component } from 'react';
import StudentList from './Student-list/Student-List';

//url for fetch data
//const URL_STUDENT='http://localhost:3000/admin/student'

class StudentTable extends Component{
    constructor(){
        super();
        this.state={
            student:'kamal'
       }
    }
    // componentDidMount(){
    //     fetch(URL_STUDENT,{
    //         method:'GET'
    //     })
    //     .then(response => response.json())
    //     .then(json =>{
    //         this.setState({
    //             student:json
    //         })
    //     })
    // }
    render(){
        
        return(
          <div>
                <StudentList allStudent={this.state}/>
          </div>
        )
    }
}
export default StudentTable;