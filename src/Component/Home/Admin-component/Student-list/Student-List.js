import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import AddButton from './Student-Profile/AddButton';

class StudentList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          products: []
        }
      }
      componentDidMount() {
        this.getData();

      
      }

     async getData(){
        const apiUrl = 'http://localhost:8080/admin/student';
    
        const response=await fetch(apiUrl)
        const data=await response.json();
        console.log(data)
        this.setState({
          products:data
        })
      }

      
      
      
      handleClick(userId){
       fetch('http://localhost:8080/admin/student/'+userId,{
         method:'delete'
       }).then(
         this.getData()
       )
      }


      render() {
        const { error, products} = this.state;
        console.log(products)
        if(error) {
          return (
            <div>Error: {error.message}</div>
          )
        } else {
          return(
            
            <div className=" p-4 center">
              
              <table className="table table-dark p-4 m-4">
                <thead>
                  <tr>
                    <th scope="col">#ID</th>
                    <th scope="col">Student  Name</th>
                    <th scope="col">Student Age</th>
                    <th scope="col">Paid Value</th>
                  </tr>
                </thead>
                <tbody>
                  
                  {products.map(product => (
                  
                    <tr key={product.id}>
                      <td scope="row">{product.id}</td>
                      <td>{product.studentName}</td>
                      <td>{product.age}</td>
                      <td>{product.paidVal}</td>
                      <td>
                        <div className="progress">
                          <div className="progress-bar progress-bar-striped" role="progressbar" style={{width:'10%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                      </td>
                      <td><div className="btn btn-primary"> View </div></td>
                      <td><div onClick={()=>{this.handleClick(product.id)}} className="btn btn-danger"> Delete </div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <td><AddButton className="btn btn-primary"/></td>
            </div>
          )
        }
      }
    }

export default StudentList;