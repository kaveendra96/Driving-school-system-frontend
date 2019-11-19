import React from 'react';
import axios from 'axios';
class Form extends React.Component {
    state = { 
              id:'',
              studentName: '',
              age:'',
              paidVal:''
};
      
    handleSubmit = async (event) => {
    
      event.preventDefault();
      const resp = await axios({
          method:'POST',
          url:'http://localhost:8080/admin/student/',
          data:this.state,
          headers:{
            'content-type': 'application/json'
      }});
      this.setState({ 
                    id:'',
                    studentName: '',
                    age:'',
                    paidVal:''});
    };
   
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          
          <input 
              type="text" 
              value={this.state.id}
              onChange={event => this.setState({ id: event.target.value })}
              placeholder="Enter STUDEN id" 
              required 
              
              
            />
            <br/>
            <input 
              type="text" 
              value={this.state.studentName}
              onChange={event => this.setState({ studentName: event.target.value })}
              placeholder="Enter STUDEN name" 
              required 
            />
            <br/>
            <input 
              type="text" 
              value={this.state.age}
              onChange={event => this.setState({ age: event.target.value })}
              placeholder="Enter  age" 
              required 
            />
            <br/>
            <input 
              type="text" 
              value={this.state.paidVal}
              onChange={event => this.setState({ paidVal: event.target.value })}
              placeholder="Enter paid Value" 
              required 
            />
            <br/>
            <button>Go!</button>
          </form>
        );
      }
  }
  export default Form;